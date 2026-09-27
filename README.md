# Richie Richardo – Python & Data Specialist Portfolio

Personal one-page portfolio for **Richie Richardo** (Python and Data Specialist): project case studies, skills, FAQ, and contact links. Built with **Vite**, **React 19**, and **Tailwind CSS v4** (external CSS only).

## Overview

- Full-bleed hero video with crawlable HTML text and poster fallback
- Scroll-linked navigation, light/dark theme, expandable project cards
- SEO metadata, Open Graph / Twitter cards, JSON-LD, `robots.txt`, and `sitemap.xml`
- Optional serverless CV email API (not exposed in the current UI)

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

- **Hero** – Background video with poster; GitHub, LinkedIn, Gmail `mailto` CTAs
- **About** – Quote, “What I do” summary, and highlight cards
- **Projects** – Finance tracker, Pokémon team builder, dashboards, API tooling—with problem, stack, and features
- **Skills & tools** – Grid with logos or placeholders
- **FAQ** – Visible Q&A aligned with FAQPage structured data
- **Contact** – Direct GitHub, LinkedIn, and Gmail links
- **Navigation** – Sticky header, active section, mobile drawer
- **Theme** – Light/dark persisted in `localStorage` (dark default)

## Tech stack

- Vite 7, React 19, Tailwind CSS v4
- Vitest + Testing Library
- Optional CV email API (`api/request-cv.js`, Vercel-style; not used on static Lighthouse hosting)

## Project structure

```
src/
  Root.jsx              # Shell: loading screen, navbar, main, footer
  App.jsx               # Sections: hero, about, projects, skills, faq, contact
  sections/             # Hero, About, Projects, Skills, Faq, Contact
  components/           # Navbar, Footer, ThemeToggle, ProjectCard, …
  data/                 # siteMeta.js, projects.js, skills.js, social.js
  hooks/                # useInView, usePrefersReducedMotion
  styles/               # tokens, base, components (Tailwind v4)
api/
  request-cv.js         # Optional CV email endpoint
public/
  robots.txt
  sitemap.xml
  assets/               # Video, images, favicon, OG image (add og-image.png when ready)
```

## SEO & metadata

Central config: [`src/data/siteMeta.js`](src/data/siteMeta.js) — titles, descriptions, FAQ copy, OG paths. **Keep in sync** with [`index.html`](index.html) head tags and JSON-LD.

| File | Purpose |
|------|---------|
| `index.html` | Title, meta, canonical, Open Graph, Twitter, Person / WebSite / ProfilePage / FAQPage JSON-LD |
| `public/robots.txt` | Allow indexing + sitemap URL |
| `public/sitemap.xml` | Homepage URL for crawlers |

**Before production deploy:**

1. Production URL is `https://riport.web.id/` — update `siteMeta.js`, `index.html`, `robots.txt`, and `sitemap.xml` if the domain changes.
2. Add `public/assets/og-image.png` (1200×630) and point `og:image` to it (fallback: `hero-img.webp`).
3. Submit the sitemap in Google Search Console.

## Development

```bash
npm install
npm run dev
npm run lint
npm test
npm run build
```

## Deployment

- **Target:** Tencent Lighthouse (static `dist/` via nginx), domain `https://riport.web.id/`.
- **Flow:** push (or merge PR) to `main` → GitHub Actions path filter → lint/test/build → SSH deploy.
- One long-lived branch: `main`. Feature branches are optional.
- Place optional CV PDF at `public/assets/CV_richie.pdf`.
- Local setup checklists (gitignored): copy ideas from `ops/` on your machine — see repo ignore for `ops/`. Create `ops/github-setup.md` and `ops/server-setup.md` locally for Secrets, SSH, nginx, DNS, and SSL.

## CI/CD

[`.github/workflows/ci-cd.yml`](.github/workflows/ci-cd.yml):

1. Detects changes under app paths (`src/`, `api/`, `public/`, lockfile, configs, …).
2. Skips CI/deploy when only non-app files change.
3. On push to `main` after a green build: SSH into the server, `git reset --hard origin/main`, `npm ci`, `npm run build`.

Required GitHub Actions secrets: `SSH_HOST`, `SSH_USER`, `SSH_PRIVATE_KEY`, `DEPLOY_PATH`.

## Optional CV email API

`POST /api/request-cv` with `{ "email": "user@example.com" }` — rate-limited, SMTP or Resend. The contact section uses **mailto** only; the API is available for custom integrations.

## Security

See [SECURITY.md](./SECURITY.md). Do not commit secrets.

## Contributing

Clone, install, run `npm run dev` and `npm test` before opening a PR. Follow `docs/style-guide.md`.
