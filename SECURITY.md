# Security Policy

## Reporting abuse or security issues

- To report abuse of the CV request endpoint or suspected security vulnerabilities, please open a confidential issue or email the maintainer.
- Do not share sensitive details publicly. Provide steps to reproduce and any relevant logs or headers.

## CV request endpoint protections

- Server-side email validation (basic RFC 5322 regex) is enforced.
- In-memory rate limiting per IP+email: 1 request per minute and 5 per day. In production, prefer a persistent store (e.g., Vercel KV/Upstash Redis).
- Attachments are avoided to reduce spam flags; emails contain a link to the public CV.
- API keys (e.g., `RESEND_API_KEY`) are provided via environment variables and must never be committed to the repository.
- Consider adding CAPTCHA/Turnstile if public abuse is observed.

## Responsible disclosure

If you discover a vulnerability, please:

1. Privately report it to the maintainer with detailed reproduction steps.
2. Allow a reasonable time for investigation and remediation before public disclosure.
3. Avoid accessing or modifying data that does not belong to you.

Thank you for helping keep this project and its users safe.