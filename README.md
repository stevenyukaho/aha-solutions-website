# AHA Solutions Website

Next.js 16 website for AHA Solutions — AI systems for SMB founders.

## Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + custom CSS design system (CSS variables)
- **Fonts:** Inter, JetBrains Mono, Instrument Serif (via `next/font/google`)

## Design System

Colors, typography, and component styles are defined in:
- `app/globals.css` — CSS custom properties + base styles (ported from `hifi/styles.css`)
- `tailwind.config.ts` — Tailwind theme extensions

## Structure

```
website/
├── app/
│   ├── layout.tsx          # Root layout (Nav + Footer + fonts + metadata)
│   ├── globals.css         # Design system CSS
│   └── page.tsx            # Homepage (placeholder — built by Phase 2a)
├── components/
│   ├── layout/
│   │   ├── nav.tsx             # Site navigation
│   │   ├── footer.tsx          # Site footer
│   │   └── newsletter-form.tsx # Client component for newsletter form
│   └── primitives/
│       ├── icon.tsx        # SVG icon system
│       ├── node.tsx        # Flow diagram node
│       ├── arrow.tsx       # Flow diagram arrow
│       ├── eyebrow.tsx     # Uppercase label
│       ├── btn-primary.tsx # Yellow CTA button
│       ├── btn-ghost.tsx   # Outline ghost button
│       └── index.ts        # Barrel export
├── lib/
│   ├── constants.ts        # BOOKING_URL, SITE_URL
│   └── data.ts             # All static content for all 4 pages
└── public/
    ├── steven-yu.png           # Founder portrait (square)
    └── steven-yu-hero.png     # Founder portrait (yellow bg)
```

## Pages

| Page | Route | Status |
|------|-------|--------|
| Homepage | `/` | Done |
| Systems | `/systems` | Done |
| About | `/about` | Done |
| Case Studies | `/case-studies` | Done |
| Book a Call | `/book` | Done (GHL booking embed) |

## Dev

```bash
npm run dev     # start dev server
npm run build   # production build
npm run lint    # lint
```

## TODO

- Confirm `SITE_URL` domain in `lib/constants.ts`
- Add Facebook page URL in `components/layout/footer.tsx` (currently disabled placeholder)
