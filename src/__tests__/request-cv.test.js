import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import handler from '../../api/request-cv.js'

function createRes() {
  const res = {
    statusCode: 200,
    headers: {},
    setHeader(name, value) {
      this.headers[name] = value
    },
    status(code) {
      this.statusCode = code
      return this
    },
    json(payload) {
      this.body = payload
      return this
    },
  }
  return res
}

describe('POST /api/request-cv', () => {
  const envBackup = { ...process.env }

  beforeEach(() => {
    process.env = { ...envBackup }
    delete process.env.SMTP_HOST
    delete process.env.MAIL_HOST
    delete process.env.RESEND_API_KEY
  })

  afterEach(() => {
    process.env = envBackup
    vi.restoreAllMocks()
  })

  it('returns 405 for non-POST methods', async () => {
    const res = createRes()
    await handler({ method: 'GET', body: {} }, res)
    expect(res.statusCode).toBe(405)
    expect(res.body.error).toMatch(/not allowed/i)
  })

  it('returns 400 for invalid email', async () => {
    const res = createRes()
    await handler(
      {
        method: 'POST',
        body: { email: 'not-an-email' },
        headers: {},
        socket: { remoteAddress: '127.0.0.1' },
      },
      res,
    )
    expect(res.statusCode).toBe(400)
    expect(res.body.error).toMatch(/invalid email/i)
  })

  it('returns 500 when no email provider is configured', async () => {
    const res = createRes()
    await handler(
      {
        method: 'POST',
        body: { email: 'user@example.com' },
        headers: { host: 'localhost' },
        socket: { remoteAddress: '127.0.0.1' },
      },
      res,
    )
    expect(res.statusCode).toBe(500)
    expect(res.body.error).toMatch(/not configured/i)
  })

  it('returns 429 when rate limit exceeded within one minute', async () => {
    const req = {
      method: 'POST',
      body: { email: 'rate@example.com' },
      headers: { host: 'localhost' },
      socket: { remoteAddress: '10.0.0.1' },
    }

    const res1 = createRes()
    await handler(req, res1)
    expect(res1.statusCode).toBe(500)

    const res2 = createRes()
    await handler(req, res2)
    expect(res2.statusCode).toBe(429)
    expect(res2.body.error).toMatch(/60 seconds/i)
  })
})
