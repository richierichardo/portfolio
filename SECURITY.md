# Security Policy

This file explains how to report security issues and what protections exist in this repository. It is mainly relevant if you expose **`POST /api/request-cv`** in production (the portfolio UI currently uses mailto links only; the API is optional).

## Reporting abuse or vulnerabilities

If you find abuse of the CV endpoint, a vulnerability, or suspicious traffic:

1. **Do not** open a public issue with exploit details.
2. Email **[richieforwork17@gmail.com](mailto:richieforwork17@gmail.com)** with:
   - What you found and the impact
   - Steps to reproduce
   - Request headers or timestamps if relevant (no passwords or API keys)
3. Allow reasonable time for a fix before public disclosure.

## What we protect

### CV request API (`/api/request-cv`)

| Control | Detail |
|---------|--------|
| Method | Only `POST` accepted (`405` otherwise) |
| Input | Email must match server-side regex; rejects malformed JSON bodies |
| Rate limit | 1 request per minute and 5 per day per `IP + email` (in-memory) |
| Secrets | `SMTP_*`, `MAIL_*`, `RESEND_API_KEY` via environment only — never in git |
| Attachments | PDF from `public/assets/` when present; link fallback in email body |
| Errors | Generic messages to clients; no stack traces in responses |

### Front end

- No user-submitted HTML rendered; social and project content is static data.
- External links use `rel="noreferrer"` / `noopener` where appropriate.
- Theme preference is stored in `localStorage` only (no sensitive data).

## Limitations (know before production)

- In-memory rate limits reset on cold starts (typical on serverless). For production abuse resistance, use a persistent store (e.g. Vercel KV, Upstash Redis).
- Without SMTP or Resend configured, the API returns `500` — it does not send mail.
- Consider **Cloudflare Turnstile** or similar if the CV endpoint is linked from a public form.

## Responsible disclosure

1. Report privately first.
2. Do not access, modify, or exfiltrate data that is not yours.
3. Do not perform denial-of-service testing against production without permission.

Thank you for helping keep this project and its users safe.
