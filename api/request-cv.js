// Vercel serverless function: POST /api/request-cv
// Validates input, rate-limits requests, and sends an email containing
// a CV attachment (and fallback link) using SMTP or Resend.

import fs from 'fs'
import path from 'path'
import nodemailer from 'nodemailer'

const emailRegex = /^(?:[a-zA-Z0-9_'^&+%`{}~|-]+(?:\.[a-zA-Z0-9_'^&+%`{}~|-]+)*)@(?:(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}|\[(?:\d{1,3}\.){3}\d{1,3}\])$/

// Simple in-memory rate limiter maps
const perMinute = new Map() // key => timestamp(ms)
const perDay = new Map() // key => { count, dayKey }

const ONE_MINUTE = 60 * 1000

function dayKeyNow() {
  const d = new Date()
  return `${d.getUTCFullYear()}-${d.getUTCMonth() + 1}-${d.getUTCDate()}`
}

function keyFor(ip, email) {
  return `${ip || 'unknown'}|${(email || '').toLowerCase()}`
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    const ip =
      req.headers['x-forwarded-for']?.toString().split(',')[0].trim() ||
      req.socket?.remoteAddress ||
      'unknown'

    const { email } = req.body || {}
    if (typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return res.status(400).json({ error: 'Invalid email.' })
    }

    const k = keyFor(ip, email)
    // Per-minute check
    const last = perMinute.get(k)
    const now = Date.now()
    if (last && now - last < ONE_MINUTE) {
      return res.status(429).json({ error: 'Please wait at least 60 seconds before trying again.' })
    }
    perMinute.set(k, now)

    // Per-day check (max 5)
    const today = dayKeyNow()
    const d = perDay.get(k)
    if (!d || d.dayKey !== today) {
      perDay.set(k, { count: 1, dayKey: today })
    } else {
      if (d.count >= 5) {
        return res.status(429).json({ error: 'Daily limit reached. Please try again tomorrow.' })
      }
      d.count += 1
      perDay.set(k, d)
    }

    // Resolve CV path and public URL
    const cvFileName = process.env.CV_FILE_NAME || 'CV_richie.pdf'
    const cvPublicPath = `/assets/${cvFileName}`
    const baseUrl = `${req.headers['x-forwarded-proto'] || 'https'}://${req.headers.host}`
    const cvUrl = `${baseUrl}${cvPublicPath}`

    const cvFilePath = path.join(process.cwd(), 'public', 'assets', cvFileName)
    const hasCvFile = fs.existsSync(cvFilePath)

    // 1) Try SMTP (default)
    // Supports both SMTP_* envs and Laravel-style MAIL_* envs
    const smtpHost = process.env.SMTP_HOST || process.env.MAIL_HOST
    const smtpPortRaw = process.env.SMTP_PORT || process.env.MAIL_PORT
    const smtpPort = smtpPortRaw ? Number(smtpPortRaw) : undefined

    const smtpSecure =
      typeof process.env.SMTP_SECURE !== 'undefined'
        ? String(process.env.SMTP_SECURE) === 'true'
        : process.env.MAIL_ENCRYPTION
        ? process.env.MAIL_ENCRYPTION.toLowerCase() === 'ssl'
        : smtpPort === 465

    const smtpUser = process.env.SMTP_USER || process.env.MAIL_USERNAME
    const smtpPass = process.env.SMTP_PASS || process.env.MAIL_PASSWORD

    const fromAddress =
      process.env.MAIL_FROM || process.env.MAIL_FROM_ADDRESS || smtpUser || 'no-reply@example.com'
    const fromName = process.env.MAIL_FROM_NAME || 'Portfolio'

    if (smtpHost && smtpPort && smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpSecure,
          auth: { user: smtpUser, pass: smtpPass },
        })

        await transporter.sendMail({
          from: `${fromName} <${fromAddress}>`,
          to: email,
          subject: 'Your requested CV',
          html: `<p>Hi,</p>
<p>Please find my CV attached to this email.</p>
<p>If the attachment does not appear, you can also download it here:</p>
<p><a href="${cvUrl}">${cvUrl}</a></p>
<p>Best regards,<br/>Richie</p>`,
          attachments: hasCvFile
            ? [
                {
                  filename: cvFileName,
                  path: cvFilePath,
                  contentType: 'application/pdf',
                },
              ]
            : undefined,
        })

        return res.status(200).json({ message: 'CV sent to your email.' })
      } catch {
        // Fall through to Resend or simulated with a generic error if all providers fail
      }
    }

    // 2) Alternative: Resend (link only)
    const apiKey = process.env.RESEND_API_KEY
    if (apiKey) {
      const sendResp = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          from: 'Richie <onboarding@resend.dev>',
          to: [email],
          subject: 'Your requested CV',
          html: `<p>Hi,</p><p>Here is the link to my CV:</p><p><a href="${cvUrl}">${cvUrl}</a></p><p>Best regards,<br/>Richie</p>`,
        }),
      })

      if (!sendResp.ok) {
        return res.status(502).json({ error: 'Failed to send email.' })
      }
      return res.status(200).json({ message: 'CV link sent.' })
    }

    // 3) Missing provider: make it explicit instead of silently simulating
    return res.status(500).json({
      error: 'Email service is not configured on the server. Please set SMTP or RESEND env variables.',
    })
  } catch {
    return res.status(500).json({ error: 'Internal error.' })
  }
}

export const config = {
  api: {
    bodyParser: true,
  },
}
