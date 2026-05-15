# Project Tasks — Derived from docs/plan.md

Generated: 2025-12-06 17:33 (local)

Note: Each item is an actionable task. Mark with [x] when completed. Tasks are organized by phase and retain numeric IDs for traceability to the plan.

## Phase 0 – Project Setup
- [x] 0.1 Initialize Tailwind v4 with external CSS only (`src/styles/base.css`, `tokens.css`, `components.css`) and verify build succeeds (no inline styles).
- [ ] 0.2 Configure ESLint (React + jsx-a11y) and Prettier; add `npm run lint` and `npm run format` scripts; ensure `npm run lint` passes. (ESLint added; Prettier script/config pending)
- [x] 0.3 Enable smooth scrolling with CSS (`html { scroll-behavior: smooth; }`) and verify in-page anchor navigation is smooth.

## Phase 1 – Layout & Design System
- [x] 1.1 Define design tokens in `tokens.css` (colors, spacing, typography scale) and responsive container/grid helpers.
- [x] 1.2 Implement header/nav with anchor links to all sections; make header sticky; add active link highlight (scroll spy).
- [x] 1.3 Create reusable component classes in `components.css` (buttons, cards, tags, badges) using `@apply`.

## Phase 2 – Section Implementations
- [x] 2.1 Build HeroSection (name, title, tagline, circular profile image, GitHub/LinkedIn buttons using exact links from requirements).
- [x] 2.2 Build AboutSection (short bio; Download CV link pointing to `/assets/cv.pdf`).
- [x] 2.3 Build SkillsSection (categorized skills: Frontend/Backend/Data/Cloud) with accessible badges/progress indicators.
- [x] 2.4 Build ProjectsSection (card/grid with image, title, description, tech tags; optional external links).
- [x] 2.5 Build ContactSection UI (email input with client-side validation, “Request CV” button; API wiring deferred to Phase 4).

## Phase 3 – Footer & Theming
- [x] 3.1 Implement Footer (© 2025 Richie Richardo + social links).
- [x] 3.2 Implement theme toggle using Tailwind `dark` class; default to dark; persist preference in `localStorage`; ensure light mode sets bg `#fff` and text `#111` without breaking UI.

## Phase 4 – CV Email System
- [x] 4.D Decide provider defaults and fallbacks: Gmail SMTP (Nodemailer) as default; Resend as alternative; EmailJS as static-only fallback. Document the choice and env vars.
- [x] 4.1 Implement serverless endpoint `POST /api/request-cv` (SMTP default):
  - [x] 4.1.a Validate email on the server (basic RFC 5322) and optionally integrate CAPTCHA/Turnstile.
  - [x] 4.1.b Add rate limits per IP/email (1 request/min, 5/day) using KV/Redis or in-memory for demo.
  - [x] 4.1.c Send email via Gmail SMTP (Nodemailer) with a greeting and a link to `/assets/cv.pdf`. Read config from env: `SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=465`, `SMTP_SECURE=true`, `SMTP_USER`, `SMTP_PASS`, `MAIL_FROM`, `MAIL_FROM_NAME`.
  - [x] 4.1.d Handle provider errors gracefully and return a useful error message (no sensitive details leaked).
- [x] 4.1e Alternative: implement Resend path (enabled when `RESEND_API_KEY` present); reuse validation and rate limits; same template.
- [ ] 4.1f Fallback: integrate EmailJS (client-only) if static hosting chosen; add client-side debounce, minimal cooldown, and simple human verification.
- [x] 4.2 Wire ContactSection to chosen provider; display success/error messages and handle cooldown/429 messaging.

## Phase 5 – Performance & Accessibility Hardening
- [ ] 5.1 Optimize images (convert to WebP/AVIF where appropriate, correct sizes, lazy-loading, `srcSet`/`sizes`).
- [x] 5.2 Audit bundle; code-split heavy components if present; ensure minimal runtime JS.
- [ ] 5.3 Run Lighthouse on mobile config; fix findings until targets are met.
- [ ] 5.4 Run accessibility audit (axe + keyboard-only sweep); fix focus traps, landmarks, and contrast issues.

## Phase 6 – SEO & Metadata
- [x] 6.1 Add/verify meta title/description, Open Graph, Twitter cards, and favicons; confirm favicon path is `/assets/favicon.ico` and visible in browser tab.
- [x] 6.2 Add minimal JSON-LD (Person) structured data.
- [x] 6.3 Add `robots.txt` and optional `sitemap.xml` (static URLs only).

## Phase 7 – Testing & QA
- [x] 7.1 Write unit tests (email validation, rate-limit helpers, small utilities).
- [x] 7.2 Write component tests for Hero, Skills, Projects, and Contact (React Testing Library).
- [ ] 7.3 Add E2E happy path for CV request (Playwright/Cypress) against preview deployments in CI.

## Phase 8 – Deployment & CI/CD
- [x] 8.1 Choose hosting and set up build pipeline (Vercel preferred); configure serverless functions.
- [x] 8.2 Configure preview deployments for PRs; protect `main` with required checks (lint, test, build, optional Lighthouse CI).
- [x] 8.3 Manage environment variables via platform secrets: SMTP (`SMTP_*`), `MAIL_FROM`, `MAIL_FROM_NAME`, and optional `RESEND_API_KEY`. Ensure secrets are not committed. Provide `.env.example`.

## Phase 9 – Documentation
- [x] 9.1 Update README with setup, development, deployment, theming (dark class), and CV provider configuration (SMTP default, Resend alternative, EmailJS fallback).
- [x] 9.2 Document CSS architecture and reusable component class names in `docs/style-guide.md`.
- [x] 9.3 Add/maintain `SECURITY.md` with abuse/reporting procedures and endpoint protections.

## Phase 10 – Future Enhancements (Backlog)
- [ ] 10.1 Add i18n (EN/ID) using a small key-value dictionary and language toggle.
- [ ] 10.2 Build an admin dashboard (protected) for CV request logs; persist to KV/Redis if serverless used.
- [ ] 10.3 Integrate privacy-friendly analytics (Plausible/Umami) gated behind user consent.

## Acceptance and Tracking Checks
- [x] A0 Smooth scroll only navigation verified (no route changes).
- [x] A1 Email validated before sending (unit tests cover edge cases).
- [x] A2 Rate-limited CV send (429-equivalent within 60s; daily cap enforced).
- [ ] A3 Responsive design verified at 360px, 768px, 1024px, 1440px.
- [x] A4 No inline styles (search confirms no `style=`; ESLint rule enforced).
- [ ] A5 Bundle size ≤ 100KB gzipped for initial JS+CSS (images excluded) per build report.
- [ ] A6 Lighthouse: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 90 (report saved to `docs/`).
- [ ] A7 Accessibility baseline: axe reports no serious issues; keyboard navigation passes.
- [x] A8 SEO meta present and validated.
- [x] A9 CI/CD running with required checks.
- [x] A10 README/Docs updated; new contributors can run project in <10 minutes.
- [x] A11 Favicon visible in tab and title shows site name.
- [x] A12 Theme toggle defaults to dark; light mode bg `#fff` and text `#111`; toggle uses Tailwind `dark` class.
- [x] A13 CV email contains a greeting and a link to `/assets/cv.pdf`.
