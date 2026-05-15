# Richie Richardo – Portfolio (Vite + React + Tailwind v4)

One-page portfolio with a full-bleed hero video, scroll-linked navigation, light/dark theme, and expandable project cards. Built with Vite, React 19, and Tailwind CSS v4 (external CSS only).

## Quick start

| Requirement | Node.js 18+ (Node 20 recommended) |
|-------------|-----------------------------------|
| Install     | `npm install`                     |
| Dev server  | `npm run dev`                     |
| Build       | `npm run build`                   |
| Preview     | `npm run preview`                 |
| Lint        | `npm run lint`                    |
| Test        | `npm test` (Vitest + Testing Library) |
| Watch tests | `npm run test:watch`              |

## Features

- **Hero** – Background video with poster fallback; social CTAs (GitHub, LinkedIn, Gmail `mailto`).
- **About** – Intro quote and highlight cards (focus, stack, interests, goals).
- **Projects** – Expandable cards with overview, problem, features, and GitHub links.
- **Skills & tools** – Grid of tools with logos or letter placeholders.
- **Contact** – Direct links to GitHub, LinkedIn, and Gmail (no form on the page).
- **Navigation** – Sticky header, active section highlighting, mobile drawer.
- **Theme** – Light/dark toggle persisted in `localStorage` (dark default).
- **Loading screen** – Short boot animation; respects `prefers-reduced-motion`.
- **Optional API** – `POST /api/request-cv` for server-side CV email (SMTP or Resend); not wired in the current UI.

## Project structure

```
src/
  Root.jsx              # Shell: loading screen, navbar, main, footer
  App.jsx               # Section layout (hero, about, projects, skills, contact)
  sections/             # Hero, About, Projects, Skills, Contact
  components/           # Navbar, Footer, ThemeToggle, ProjectCard, SkillCard, …
  data/                 # projects.js, skills.js, social.js
  hooks/                # useInView, usePrefersReducedMotion
  utils/                # validation.js, rateLimit.js (shared with API tests)
  styles/               # Tailwind v4 external CSS (base, tokens, components)
api/
  request-cv.js         # Vercel serverless: validate email, rate-limit, send CV
public/
  assets/               # Video, images, tools logos, CV PDF, favicon
```

See `docs/requirements.md`, `docs/plan.md`, and `docs/style-guide.md` for specification and CSS architecture.

## Theming

- Toggle sets `<html data-theme="light|dark">` and a `.dark` class.
- Preference is stored under `localStorage` key `theme`.
- Default theme is **dark** when nothing is saved.

## CV email API (optional)

Endpoint: `POST /api/request-cv` with JSON `{ "email": "user@example.com" }`

- Validates email format; rate-limits per IP + email (1/min, 5/day, in-memory).
- **SMTP (default):** Gmail App Password via Nodemailer — attaches PDF when `public/assets/<CV_FILE_NAME>` exists.
- **Resend (fallback):** Used when `RESEND_API_KEY` is set and SMTP is unavailable.
- **Dev:** Vite dev server proxies `/api/request-cv` to the same handler (`vite.config.js`).
- Returns `500` if neither provider is configured (no silent simulation).

The contact section uses **mailto** links only; wire a form yourself if you want this API in the UI.

### Environment variables

Copy `.env.example` to `.env.local` (local) or set in Vercel → Environment Variables:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=youremail@gmail.com
SMTP_PASS=your-16-char-app-password
MAIL_FROM=youremail@gmail.com
MAIL_FROM_NAME=Your Name

# Optional
RESEND_API_KEY=
CV_FILE_NAME=CV_richie.pdf
```

## Deployment

- **Vercel** (recommended): `vercel.json` configures Vite build and Node 20 serverless functions.
- Connect the repo, set SMTP and/or `RESEND_API_KEY`, and deploy.
- Place the CV at `public/assets/CV_richie.pdf` (or the name in `CV_FILE_NAME`).

## CI/CD

`.github/workflows/ci.yml` runs lint, tests, and build on pushes and PRs to `main`.

## SEO & metadata

`index.html` includes title, description, Open Graph, Twitter cards, and JSON-LD (`Person`). `public/robots.txt` and `public/sitemap.xml` are included.

## Security

Input validation and rate limiting apply to the CV API. Do not commit secrets. See [SECURITY.md](./SECURITY.md) for reporting and hardening notes.

## Contributing

Clone, `npm install`, `npm run dev`. Follow `docs/style-guide.md`. Run `npm test` before opening a PR.
