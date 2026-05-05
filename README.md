# Op. Dr. Kaan Işık — Modern

A modern, multilingual single-page site for a fictional cardiac surgeon, built
as a frontend portfolio piece. Warm editorial aesthetic — cream `#faf8f4`
background, dark ink `#0f1f2e`, coral `#d97757` accent, Fraunces italic
emphasis on Inter body, JetBrains Mono eyebrows.

> **Disclaimer.** Op. Dr. Kaan Işık is a fictional persona. All copy,
> statistics, blog posts, likes and view counts are visual only — there is no
> backend, no real medical practice, and no real identity behind any name on
> this site.

## Features

- **Multilingual** — Turkish (default), English, German with locale-prefixed
  routes (`/`, `/en`, `/de`) and per-namespace translation bundles.
- **Editorial home page** — hero video, doctor bio, animated stats, services
  grid, trust signals, FAQ, contact form, scroll-reveal throughout.
- **Blog** — listing + post detail with reading-progress bar, like storage,
  motion-driven page transitions.
- **Virtual clinic tour** — scene-based walk-through with floor map, info
  cards, and transition videos.
- **Polish** — scroll progress bar, reduced-motion respect, lazy-loaded
  routes, deep-link-safe routing, SEO-friendly per-route meta.

## Stack

| Layer     | Choice                                                       |
| --------- | ------------------------------------------------------------ |
| Build     | Vite 8                                                       |
| Framework | React 19 + TypeScript                                        |
| Routing   | react-router-dom 7 (`createBrowserRouter`, locale prefixes)  |
| i18n      | react-i18next + custom Vite glob backend                     |
| Styling   | Tailwind 4 (`@theme` tokens) + scoped CSS files              |
| Motion    | `motion` (Framer Motion successor)                           |
| Icons     | Inline SVG (`components/ui/Icon.tsx`, `tour/TourIcon.tsx`)   |

## Getting started

Requires Node ≥ 20.19 (or 22.x — see `.nvmrc`).

```bash
npm install
npm run dev          # http://localhost:5173
npm run typecheck
npm run lint
npm run build        # tsc -b && vite build → dist/
npm run preview      # serve built dist/
```

## Project layout

```
src/
├── main.tsx                 entry: i18n bootstrap → render <App>
├── App.tsx                  routes (locale branches) + <RouterProvider>
├── routes/                  Home, Blog, BlogPost, ClinicTour, NotFound
├── components/
│   ├── layout/              Header, Footer, SiteLayout, LocaleRoute,
│   │                        LanguageSwitcher, WhatsAppFloat
│   ├── home/                HeroVideo, DoctorSection, StatsGrid,
│   │                        ServicesSection, TrustSection, FAQSection,
│   │                        ContactSection, PortfolioPopup
│   ├── blog/                BlogList, BlogCard, PostBody
│   ├── tour/                Scene, FloorMap, InfoCard, Rail,
│   │                        TransitionVideo, TourIcon
│   └── ui/                  Icon, HashLink
├── data/                    blogPosts.ts, tourPoints.ts (locale-independent)
├── locales/                 tr/ en/ de/ (one JSON per namespace)
├── lib/
│   ├── i18n.ts              namespaces + Vite glob backend
│   ├── utils.ts             cn(), formatDate()
│   └── hooks/               useReveal, useCountUp, useScrollPastHero,
│                            useLocaleRoute, useDebouncedValue,
│                            useReadProgress, useLikeStorage,
│                            useDocumentMeta
└── styles/
    ├── tokens.css           @theme + :root design tokens
    ├── styles.css           prototype global styles
    ├── blog.css             blog styles
    ├── tour.css             tour styles
    └── globals.css          imports the above
```

The unmodified prototype lives at `_reference/` for diffing during tweaks.

## Routing & i18n

- `/` → Turkish (default, no prefix)
- `/en/...` → English
- `/de/...` → German

Each branch wraps `LocaleRoute` (sets `i18n.language`,
`localStorage['locale']`, `<html lang>`) → `SiteLayout` (chooses chrome by
route — home transparent header, blog always solid, tour bare).
Translations are split by namespace (`common`, `home`, `services`, `trust`,
`faq`, `contact`, `blog`, `tour`) and loaded via `import.meta.glob`, so each
locale becomes its own bundle chunk.

## Deployment (Cloudflare Pages)

This repo ships ready for Cloudflare Pages:

- `public/_redirects` — `/* /index.html 200` SPA fallback so deep links work
  with `createBrowserRouter`.
- `.nvmrc` — pins Node 22 for the Pages build runtime.

In the Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to
Git**, then:

| Setting                | Value           |
| ---------------------- | --------------- |
| Framework preset       | Vite (or None)  |
| Build command          | `npm run build` |
| Build output directory | `dist`          |
| Root directory         | *(empty)*       |

No environment variables required.

## Author

Created by **Emre Can Karataş** — [emrecankaratas.com](https://emrecankaratas.com)
