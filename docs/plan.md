# Portfolio Website – Implementation Plan

Last updated: 2025-12-06 17:33 (local)

This plan translates the Specification Document (docs/requirements.md) into an actionable, testable roadmap with phases, tasks, acceptance criteria, budgets, and risks. It is optimized for Vite + React + Tailwind v4 with external CSS files, smooth-scrolling one-page layout, and an email-based CV delivery system.

## 0. Guiding Principles
- Spec-Driven Development (SDD): implement only what the spec requires; keep code and docs in sync.
- Accessibility, performance, and security are first-class and validated continuously.
- Keep styling in external CSS files; avoid inline styles entirely.
- Small, frequent commits; each task ends with a visible artifact or measurable metric.

## 1. Scope & Goals (from Requirements)
- One-page portfolio: Hero, About, Skills, Projects, Contact, Footer.
- Smooth scroll navigation with responsive design.
- Logo & favicon: favicon served from `/public/assets/favicon.ico`; browser tab shows favicon and website name.
- Hero identity: circular portrait image; name, profession, tagline; GitHub `https://github.com/richierichardo` and LinkedIn `http://www.linkedin.com/in/richie-richardo21` buttons; hero image provided at `/public/assets/hero-img.webp`.
- Theme toggle: site defaults to dark mode; light mode sets bg `#fff` and text `#111`; must not break UI; persist in `localStorage`; use Tailwind `class="dark"` strategy.
- Email-driven CV sending workflow with validation and rate limiting (1/min, 5/day) via backend endpoint `POST /api/request-cv` and Gmail SMTP (App Password) by default; return clear error on failure.
- CV link in email must point to `/assets/cv.pdf`.
- Maintain perf budget (<100KB combined CSS+JS initial load) and Lighthouse > 90.
- Accessibility and SEO basics.
- Future-ready hooks for i18n, analytics, and admin logging.

## 2. Assumptions & Decisions
- Tailwind v4 configured with external CSS only (via `@apply` and utility classes in files under `src/styles`).
- Dark mode strategy: Tailwind `dark` class strategy. The theme toggle adds/removes `class="dark"` on `<html>`; default is dark if no saved preference. Light mode colors match the requirement (bg `#fff`, text `#111`). We may also expose CSS custom properties to keep tokens consistent.
- Email delivery: Primary per requirements is Gmail SMTP using App Password via Nodemailer on a serverless function (recommended on Vercel/Netlify). To improve deliverability or if Gmail is restricted, we keep a secondary option: Resend. The choice is controlled via env variables. Client-only EmailJS is the fallback for static hosting only.
- Secrets are never committed. SMTP and provider keys are loaded from env (see `.env.example`); provided credentials in the requirements file are placeholders and MUST NOT be committed.
- Deployment target: Vercel preferred (serverless endpoint support, preview URLs). Netlify is viable. GitHub Pages requires the client-only EmailJS option.
- CV is a static PDF stored at `/public/assets/cv.pdf` to satisfy the requirement (served at `/assets/cv.pdf`).

## 3. Architecture Overview
- Frontend: React (Vite) single page with section components under `src/sections`.
  - State: lightweight local state only; theme toggle state in localStorage.
  - Routing: none; use section IDs and smooth scroll.
- Styling: Tailwind v4 with external CSS modules:
  - `src/styles/tokens.css`: color tokens (including light/dark) using CSS variables to keep design system consistent across themes.
  - `src/styles/base.css`: Tailwind import, resets, base styles (no inline styles anywhere).
  - `src/styles/components.css`: reusable component classes with `@apply`.
  - Tailwind dark mode via `class` strategy on `<html>`. Toggle sets/removes `dark` class; tokens ensure contrast.
- Assets: favicon at `/public/assets/favicon.ico`; hero image at `/public/assets/hero-img.webp`; CV at `/public/assets/cv.pdf`.
- Email delivery:
  - Option A (per requirements, default): Nodemailer + Gmail SMTP in serverless `POST /api/request-cv` using env vars `SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=465`, `SMTP_SECURE=true`, `SMTP_USER`, `SMTP_PASS` (App Password), `MAIL_FROM`, `MAIL_FROM_NAME`.
  - Option B (alternative): Resend API via serverless function, controlled by `RESEND_API_KEY`.
  - Option C (static-only): EmailJS client SDK. Use only if no serverless available; apply client-side cooldown and simple human verification.
- Analytics (future): Plausible/Umami with consent.

## 4. Performance Budget & KPIs
- Initial page payload (HTML+CSS+JS, gzipped) ≤ 100KB; images lazy-loaded and optimized (WebP/AVIF).
- Lighthouse scores: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 90.
- CLS < 0.1, LCP < 2.5s on mid-tier mobile, TBT < 200ms.

## 5. Accessibility & SEO Baseline
- Semantic landmarks: header, main, section, footer; proper heading hierarchy.
- Nav: skip-to-content link, focus-visible styles, aria-current on active section link.
- Color contrast ≥ 4.5:1; test in both light/dark themes.
- Images with alt text; decorative images marked appropriately.
- SEO: meta title/description, Open Graph/Twitter tags, canonical URL, robots.txt, sitemap.xml (optional for SPA), structured data (Person) minimal.
 - Favicon present and visible in browser tab; title shows website name.

## 6. Work Breakdown by Phases

Phase 0 – Project Setup
- Task 0.1: Initialize Tailwind v4 with external CSS files only (base.css, tokens.css, components.css). Acceptance: build succeeds; no inline styles used.
- Task 0.2: Linting/formatting: ESLint (React, JSX a11y), Prettier; add npm scripts. Acceptance: npm run lint passes.
- Task 0.3: Smooth scroll baseline: CSS scroll-behavior: smooth; polyfill not required for modern browsers. Acceptance: in-page anchor navigation is smooth.

Phase 1 – Layout & Design System
- Task 1.1: Create responsive container, grid helpers, typography scale in tokens.css.
- Task 1.2: Header/nav with anchor links to sections; sticky on top; active link highlighting on scroll.
- Task 1.3: Define card, button, tag, badge classes in components.css using @apply.
Acceptance: All sections render with consistent spacing/typography; dark/light theme variable tokens exist though the toggle may be deferred to Phase 6.

Phase 2 – Section Implementations
- Task 2.1: HeroSection: name, title, tagline, profile image (circle), GitHub/LinkedIn buttons (use exact links from requirements).
- Task 2.2: AboutSection: short bio, education/experience summary, static Download CV link to /public/cv.
- Task 2.3: SkillsSection: categories (Frontend/Backend/Data/Cloud). Use badges; progress bars optional but must be accessible.
- Task 2.4: ProjectsSection: card/grid with image, title, description, tech tags; optional external link icons.
- Task 2.5: ContactSection: email input with validation, “Request CV” button (no-op until Phase 4).
Acceptance: All sections present, responsive at mobile/desktop breakpoints; keyboard accessible navigation between sections.

Phase 3 – Footer & Theming (UI polish)
- Task 3.1: Footer with copyright © 2025 Richie Richardo and social links.
- Task 3.2: Theme toggle using Tailwind `dark` class. Persist preference in `localStorage`; default to dark; light mode sets `#fff` bg and `#111` text.
Acceptance: Footer visible; theme switch is announced to SR; colors meet contrast ratios in both modes; `dark` class toggling verified.

Phase 4 – CV Email System (per Requirements)
- Decision 4.D: Use Gmail SMTP + Nodemailer on a serverless endpoint by default (aligns with requirements). Keep Resend as a configurable alternative (set if `RESEND_API_KEY` is present). EmailJS only for static hosting.
- Task 4.1 (Serverless, Gmail SMTP): Implement `POST /api/request-cv`:
  - Validate email (basic RFC 5322) and optionally CAPTCHA/Turnstile.
  - Rate limit per IP/email: max 1 request/min and 5/day; store counters in KV/Redis, or in-memory for demo.
  - SMTP config via env: `SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=465`, `SMTP_SECURE=true`, `SMTP_USER`, `SMTP_PASS` (App Password), `MAIL_FROM`, `MAIL_FROM_NAME`.
  - Email template includes greeting and a link to the CV at `/assets/cv.pdf`.
- Task 4.1a (Alternative: Resend): Switchable via `RESEND_API_KEY`; same validation and rate limits, same template.
- Task 4.1b (Client-only alternative): Integrate EmailJS template; client-side debounce, minimal cooldown, simple human verification if needed.
- Task 4.2: Wire `Contact` form to call backend; handle success, invalid, 429 cooldown, and generic failure states.
Acceptance: Valid email triggers SMTP send; invalid shows error; repeated requests within cooldown are blocked with clear messaging; if SMTP fails, return an informative error message.

Phase 5 – Performance & Accessibility Hardening
- Task 5.1: Optimize images (WebP/AVIF), proper sizes, lazy loading. Use srcSet sizes.
- Task 5.2: Code-split heavy components (if any) and ensure minimal runtime JS.
- Task 5.3: Lighthouse QA on mobile config; fix issues until targets hit.
- Task 5.4: A11y QA with axe and keyboard-only sweep; fix focus traps, landmarks, and contrast.
Acceptance: Budget and Lighthouse thresholds met; a11y automated checks pass.

Phase 6 – SEO & Metadata
- Task 6.1: Add meta tags, Open Graph, Twitter, favicons (ensure favicon path `/assets/favicon.ico`).
- Task 6.2: Add structured data (JSON-LD Person) minimal.
- Task 6.3: robots.txt; optional sitemap.xml (static URLs only).
Acceptance: Meta tags validated; no major SEO warnings.

Phase 7 – Testing & QA
- Task 7.1: Unit tests for utility functions (e.g., email validation, rate-limit helpers).
- Task 7.2: Component tests (Hero, Skills, Projects, Contact) with React Testing Library.
- Task 7.3: E2E happy path for CV request (Playwright/Cypress) in CI against preview deployment.
Acceptance: Tests pass locally and in CI; flake rate < 2%.

Phase 8 – Deployment & CI/CD
- Task 8.1: Choose hosting and set up build pipeline (Vercel preferred).
- Task 8.2: Preview deployments for PRs; Protect main with checks (lint, test, build, Lighthouse CI optional).
- Task 8.3: Env management (e.g., RESEND_API_KEY) via platform secrets.
Acceptance: Main deploys automatically on merge; preview URLs work; secrets not committed.

Phase 9 – Documentation
- Task 9.1: Update README with setup, development, deployment, and CV provider configuration.
- Task 9.2: Document CSS architecture and component class names.
- Task 9.3: Add SECURITY.md for abuse/reporting instructions.
Acceptance: New contributors can run the project in <10 minutes.

Phase 10 – Future Enhancements (Backlog)
- i18n (EN/ID) via a tiny key-value dictionary and language toggle.
- Admin dashboard (protected) for CV request logs; if serverless used, persist to KV/Redis; simple table + filters.
- Analytics integration (Plausible/Umami) with consent.

## 7. Detailed Task List With Estimates (T-shirt sizes)
- 0.1 Tailwind external CSS setup – S
- 0.2 ESLint/Prettier – XS
- 1.1 Tokens & base – S
- 1.2 Header/nav & scroll spy – M
- 1.3 Component classes (buttons/cards/badges) – M
- 2.1 Hero (with exact social URLs) – S
- 2.2 About – XS
- 2.3 Skills – S
- 2.4 Projects – M
- 2.5 Contact (UI only) – S
- 3.1 Footer – XS
- 3.2 Theme toggle via Tailwind dark class – S
- 4.1 Serverless CV function (Gmail SMTP by default) + rate limiting – M/L (depends on storage)
- 4.2 Wire Contact to API – S
- 5.1 Image optimization – S
- 5.2 Code-splitting/minification audit – S
- 5.3 Lighthouse/a11y fixes – M
- 6.1–6.3 SEO/meta/JSON-LD – S
- 7.x Tests (unit+component+E2E) – M
- 8.x Deployment & CI – S/M
- 9.x Docs – S

## 8. Acceptance Criteria Matrix (Requirement → Test)
- Smooth scroll only navigation → Clicking header links scrolls to the correct section with smooth behavior; no route changes.
- Email validated before sending → Invalid formats blocked; unit tests cover edge cases.
- Rate-limited CV send → Second request within 60s returns 429-equivalent message; daily cap enforced.
- Responsive design → Layout verified at 360px, 768px, 1024px, 1440px.
- No inline styles → Grep confirms no style= usage; ESLint rule disallows.
- Bundle <100KB → Build report shows ≤100KB gzipped for initial JS+CSS; images excluded.
- Lighthouse > 90 → CI report or manual screenshot stored in docs/.
- A11y baseline → axe has no serious violations; keyboard navigation success.
- SEO meta present → Meta tags rendered and validated.
 - Favicon & title → Browser tab shows the favicon from `/assets/favicon.ico` and the website name.
 - Theme toggle → Default to dark; toggling sets/removes `dark` class on `<html>`; light mode results in bg `#fff` and text `#111`.
 - CV link → Email contains a link to `/assets/cv.pdf`.

## 9. Security & Abuse Mitigation
- Validate inputs server-side; never trust client-only checks.
- Rate limiter with exponential backoff messaging.
- Avoid sending attachments (spam risk); send signed, expiring link (if provider supports) or public link with no PII in query.
- Hide API keys via env vars; never commit.
- Optional CAPTCHA/Turnstile if public endpoint is abused.

## 10. CI/CD Plan
- GitHub Actions/Vercel CI:
  - jobs: lint, test, build, (optional) Lighthouse CI against preview.
  - Require checks to pass on PRs to main.
  - Artifact: build size report and Lighthouse summary.

## 11. Risks & Mitigations
- Email deliverability issues → Gmail SMTP via App Password can be rate-limited or flagged; consider domain-based provider (Resend) for production deliverability. Avoid attachments; send links. Configure SPF/DKIM if sending from a custom domain.
- Bundle bloat → Enforce budget; monitor dependencies; avoid large UI libs.
- A11y regressions → Add ESLint a11y rules, periodic axe scans in CI.
- Rate limit storage unavailability → Fallback to in-memory with low limits; document constraints.
- Image quality/perf tradeoffs → Provide srcSet; test on real devices.

## 12.a Security Notes for SMTP
- Never commit real SMTP credentials. Use environment variables only. Rotate App Passwords if leaked.
- Validate and sanitize inputs on the server. Return generic error messages; do not leak provider responses to clients in production.

## 12. Timeline (Indicative, 1 dev)
- Week 1: Phases 0–2
- Week 2: Phases 3–4
- Week 3: Phases 5–7
- Week 4: Phases 8–9 and polish; start Future items as time allows

## 13. Tracking Checklist
- [ ] Tailwind external CSS only enforced
- [ ] Sections complete and responsive
- [ ] Contact email validation
- [ ] CV send wired and rate-limited
- [ ] Perf budget met
- [ ] Lighthouse targets met
- [ ] A11y checks pass
- [ ] SEO meta present
- [ ] CI/CD running
- [ ] README/Docs updated
