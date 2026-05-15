# Richie Richardo – Portfolio (Vite + React + Tailwind v4)

One-page portfolio website with smooth scrolling sections, light/dark theme, and an email-based CV delivery system. Built with Vite + React and Tailwind v4 using external CSS only.

## Quick start

- Requirements: Node.js 18+ (Node 20 recommended)
- Install: `npm install`
- Run dev: `npm run dev`
- Build: `npm run build`
- Preview build: `npm run preview`
- Lint: `npm run lint`
- Test: `npm test` (Vitest + Testing Library)

## Project structure

- `src/sections/` – Hero, About, Skills, Projects, Contact
- `src/components/` – Navbar, Footer, ThemeToggle
- `src/styles/` – Tailwind v4 external CSS files only
  - `base.css` – imports Tailwind and global base styles
  - `tokens.css` – design tokens and themes (CSS custom properties)
  - `components.css` – reusable `.btn`, `.card`, `.tag`, `.badge`, `.nav-link`
- `api/request-cv.js` – Serverless endpoint (Vercel) to email CV link via Resend (or simulate in dev)
- `public/` – static assets (favicons, robots.txt, sitemap.xml, CV under `public/cv/...`)

See `docs/requirements.md` and `docs/plan.md` for the specification and implementation plan. CSS architecture is documented in `docs/style-guide.md`.

## Theming

- Theme is toggled via `<html data-theme="light|dark">` and persists to `localStorage`.
- Dark theme is default if no preference saved; first load respects `prefers-color-scheme`.

## CV sending (email)

Endpoint: `POST /api/request-cv` with JSON `{ email: string }`

- Validates email; rate-limits per IP+email (1/min, 5/day) in-memory for demo.
- Default provider: Gmail SMTP (Nodemailer). Configure via environment variables.
- Alternative: Resend when `RESEND_API_KEY` is set.
- If neither provider is configured in development, the endpoint returns simulated success with a link so you can test the flow without sending emails.

### Environment variables

Create `.env.local` (or configure Vercel Project Settings) with SMTP and/or Resend keys. An example file is provided: `.env.example`.

Gmail SMTP (App Password) example:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=richieforwork17@gmail.com
SMTP_PASS=your-16-char-app-password
MAIL_FROM=richieforwork17@gmail.com
MAIL_FROM_NAME=Richie For Work
```

Optional Resend fallback/alternative:

```
RESEND_API_KEY=your_resend_key
```

## Deployment

- Vercel is the recommended target. `vercel.json` is included.
- Push to GitHub; connect the repo in Vercel; set `RESEND_API_KEY` in Project Settings → Environment Variables.
- The API route `api/request-cv.js` runs as a Vercel Serverless Function on Node.js 20.

## CI/CD

GitHub Actions workflow `.github/workflows/ci.yml` runs lint, tests, and build on PRs and pushes to `main`.

## SEO & Metadata

`index.html` includes meta title/description, Open Graph, Twitter cards, and JSON-LD (`Person`). Robots and sitemap are in `public/robots.txt` and `public/sitemap.xml`. Favicon is served from `/assets/favicon.ico` as required.

## Security

- Input validation and server-side rate limiting implemented in the CV endpoint.
- No secrets committed; use platform secrets. See `SECURITY.md` for abuse/reporting procedures.

## Contributing

Clone, `npm install`, `npm run dev`. Follow the style guide in `docs/style-guide.md`. New contributors should get the project running in under 10 minutes.
