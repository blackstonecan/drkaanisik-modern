# Modern — Op. Dr. Kaan Işık (portfolio site)

Sibling Vite app to `../classic/`. Same infrastructure (React 19 + TypeScript +
Vite + Tailwind 4 + react-router-dom + react-i18next), preserved visual
language: warm cream `#faf8f4` background, dark ink `#0f1f2e`, coral `#d97757`
accent, Fraunces italic emphasis, Inter body, JetBrains Mono eyebrows.

## Stack

| Layer | Choice |
|---|---|
| Build | Vite |
| Framework | React 19 + TypeScript |
| Routing | react-router-dom 7 (`/`, `/en`, `/de` prefixes) |
| i18n | react-i18next + custom Vite glob backend |
| Styling | Tailwind 4 (`@theme` tokens) + the prototype's CSS files |
| Icons | inline SVG (`components/ui/Icon.tsx` + `components/tour/TourIcon.tsx`) |

## Commands

```bash
npm install         # install
npm run dev         # http://localhost:5173
npm run typecheck
npm run lint
npm run build       # tsc -b && vite build
npm run preview     # serve built dist/
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
    ├── styles.css           prototype global styles (verbatim)
    ├── blog.css             prototype blog styles
    ├── tour.css             prototype tour styles
    └── globals.css          imports the above
```

The unmodified prototype lives at `_reference/` so the original CSS/JSX/data
remain available for diffing during future tweaks.

## Routing & i18n

- `/` → Turkish (default, no prefix)
- `/en/...` → English
- `/de/...` → German

Each branch wraps `LocaleRoute` (sets `i18n.language`, `localStorage['locale']`,
`<html lang>`) → `SiteLayout` (chooses chrome by route — home transparent
header, blog always solid, tour bare). Translations are split by namespace
(`common`, `home`, `services`, `trust`, `faq`, `contact`, `blog`, `tour`) and
loaded by Vite's `import.meta.glob` so each locale is its own bundle chunk.

## Disclaimer

Op. Dr. Kaan Işık is a fictional persona. All copy, statistics, blog posts,
likes and view counts are visual only — there is no backend.
