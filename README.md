# Portfolio — Mostafa Ead

Personal portfolio site. Static, single-page, zero AI APIs, zero recurring cost.

## Stack

- [Astro 5](https://astro.build) — static site generator
- [Tailwind CSS 4](https://tailwindcss.com)
- TypeScript
- Hosted on GitHub Pages (free)

## Develop

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # → dist/
npm run preview      # preview the production build
```

## Architecture

Single route ([src/pages/index.astro](src/pages/index.astro)) composes section components in order: Hero → Summary → Experience → Projects → Skills → Education → Contact → Footer.

```
src/
├── pages/index.astro      # the only route
├── layouts/BaseLayout.astro  # <head>, SEO, JSON-LD, dark-mode pre-paint
├── components/            # one .astro file per section + small UI bits
├── data/                  # typed content modules — edit these, not components
└── styles/global.css      # Tailwind 4 + theme tokens
```

Components are thin renderers over `src/data/*.ts`. Add a section by creating a data module + component and importing it into `index.astro`. Dark mode is class-based (`.dark` on `<html>`), set pre-paint in `BaseLayout.astro` to avoid FOUC.

## Editing content

All content lives in typed data files — edit these, not the components:

- [src/data/site.ts](src/data/site.ts) — name, title, contact, summary
- [src/data/experience.ts](src/data/experience.ts) — work history
- [src/data/projects.ts](src/data/projects.ts) — projects + store/repo links (replace `"#"` placeholders with real URLs)
- [src/data/skills.ts](src/data/skills.ts) — skill groupings
- [src/data/education.ts](src/data/education.ts) — certs and education

Replace [public/cv.pdf](public/cv.pdf) when the CV updates.

## Deploy

Pushed to `main` → [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and publishes to GitHub Pages.

One-time GitHub setup: repo Settings → Pages → Source: **GitHub Actions**.
