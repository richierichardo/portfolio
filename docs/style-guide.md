# CSS Architecture & Reusable Classes

This project uses Tailwind v4 with an external CSS only approach. No inline styles are allowed. Styling is defined via CSS layers and component classes under `src/styles/`.

## Files and layers

- src/styles/base.css – imports Tailwind and project layers; sets global html smooth scrolling and body typography and theme colors using CSS variables.
- src/styles/tokens.css – design tokens and themes defined in `@layer theme`; light/dark themes via `data-theme` on `<html>`. Utility classes (e.g., `.container`, `.section`, `.section-title`, `.muted`) live under `@layer utilities`.
- src/styles/components.css – reusable component classes declared under `@layer components` using Tailwind `@apply`.

## Reusable classes

- `.btn`, `.btn-outline` – primary and outline buttons
- `.card` – surface wrapper with border/background/padding
- `.tag` – small pill for tech tags
- `.badge` – small status badge
- `.nav-link` and `.nav-link.is-active` – navigation link styles

Utilities:

- `.container` – width constraint and horizontal padding
- `.section` – vertical section spacing
- `.section-title` – section heading
- `.muted` – subdued foreground color

## Theming

The theme is controlled by the `data-theme` attribute on `<html>`. `ThemeToggle` sets it and persists the choice in `localStorage` while respecting `prefers-color-scheme` on first load. Tokens include `--color-bg`, `--color-fg`, `--color-muted`, `--color-accent`, and spacing/typography scales.
