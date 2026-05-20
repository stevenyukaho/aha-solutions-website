# AHA Solutions — Phase 1 AEO Retrofit — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make ahasolutions.ca cite-able by ChatGPT / Claude / Perplexity by adding `llms.txt`, an AI-bot allowlist in `robots.ts`, a coordinated JSON-LD `@graph` (Organization + WebSite + Person), a Service `ItemList` on /systems, a `ProfilePage` on /about, a new homepage FAQ section + FAQPage schema, and surgical semantic-HTML upgrades to the homepage components.

**Architecture:** Next.js 16 App Router; all edits are in TypeScript. Site is trilingual but Phase 1 ships **EN only** — only files under `app/(en)/` and the `en` dictionary/data slice change. The existing FAQ pattern from `/systems` and `/book` (FaqItem[] in `lib/data-i18n.ts` + dict.faq labels + `FAQPage` JSON-LD built via `.map`) is reused verbatim for the new homepage FAQ. Visual design is unchanged; this is a markup + content + schema layer.

**Tech Stack:** Next.js 16.x (App Router, Turbopack), TypeScript, file-based `robots.ts` / `sitemap.ts` via `MetadataRoute`, JSON-LD injected via `<script type="application/ld+json" dangerouslySetInnerHTML>`. No test framework, and `npm run lint` is currently broken on this repo (Next 16 removed the built-in `next lint`; the package script wasn't migrated to standalone ESLint). Verification is therefore `npm run build` + curl + browser inspection + external validators (schema.org, Google Rich Results Test, Lighthouse).

**Spec reference:** `/Users/steven/.claude/plans/i-have-read-this-splendid-melody.md`

**Repo:** `github.com/stevenyukaho/aha-solutions-website`
**Local path (all subsequent paths relative to this):** `/Users/steven/Downloads/Documents_MacBook_Pro_7349/GitHub/AHA_Agency_Workspace/Clients/0.AHA_Solutions/23_AHA_Solutions_Website_revamp/website/`

---

## File Structure

| File | New / Modify | Responsibility |
|------|--------------|----------------|
| `app/llms.txt/route.ts` | **NEW** | Route Handler — serves `/llms.txt` as `text/markdown` |
| `app/robots.ts` | Modify | Add 7 named AI-bot rules above the wildcard rule |
| `app/(en)/layout.tsx` | Modify | Replace `organizationSchema` with `siteGraph` (`@graph` of Organization + WebSite + Person) |
| `app/(en)/systems/page.tsx` | Modify | Add `serviceListSchema` (ItemList of 5 Service) alongside the existing FAQPage |
| `app/(en)/about/page.tsx` | Modify | Add `profilePageSchema` referencing the Person `@id` from layout |
| `app/(en)/page.tsx` | Modify | Mount `<FaqSection>`; emit `faqPageSchema` for the homepage FAQ |
| `components/home/faq-section.tsx` | **NEW** | Disclosure-pattern FAQ component (button + region per item) |
| `components/home/five-systems.tsx` | Modify | Wrap in `<section aria-labelledby="systems-we-build">` |
| `components/home/how-it-works.tsx` | Modify | Wrap in `<section aria-labelledby="process">` |
| `components/home/flows-section.tsx` | Modify | Wrap in `<section aria-labelledby="system-overview">` + flow nodes → `<ol>` |
| `components/home/case-study.tsx` | Modify | Split into two `<section>` elements: `aria-labelledby="case-study"` (80% panel) + `aria-labelledby="testimonials"` (testimonials block) + testimonials → `<article><blockquote>` |
| `components/home/founder-block.tsx` | Modify | Wrap in `<section aria-labelledby="founder">` |
| `components/home/final-cta.tsx` | Modify | Wrap in `<section aria-labelledby="cta">` |
| `components/home/logos-strip.tsx` | Modify | Tool list → `<ul role="list">` + `aria-label` |
| `components/home/metrics-strip.tsx` | Modify | Stats → `<dl><dt><dd>` |
| `lib/data-i18n.ts` | Modify | Add `homeFaqItems: FaqItem[]` to `LocalizedData` interface + EN/zh-TW/zh-CN getters (zh values stubbed to en for Phase 1) |
| `lib/dictionaries/en/<home dict>` | Modify | Add `home.faq` block with heading + sectionId |

---

## Tasks

### Task 0: Branch + canonical host + smoke test

**Files:** `lib/constants.ts` (modify in Step 4)

- [ ] **Step 1: Confirm clean working tree**

```bash
cd /Users/steven/Downloads/Documents_MacBook_Pro_7349/GitHub/AHA_Agency_Workspace/Clients/0.AHA_Solutions/23_AHA_Solutions_Website_revamp/website
git status
```
Expected: working tree clean (or only expected workspace-level untracked files). If dirty inside this repo, stop and ask Steven.

- [ ] **Step 2: Create feature branch off main**

```bash
git checkout main
git pull origin main
git checkout -b feature/aeo-phase-1
```
Expected: `Switched to a new branch 'feature/aeo-phase-1'`.

- [ ] **Step 3: Install + smoke-test dev server**

```bash
npm install
npm run dev    # Turbopack
```
Open `http://localhost:3000/` in browser. Confirm homepage renders end-to-end (hero, marquee, systems, metrics, founder, CTA). Kill the dev server (Ctrl-C).

- [ ] **Step 4: Update canonical host to include `www`**

Open `lib/constants.ts` and update `SITE_URL`:

```ts
// Before
export const SITE_URL = 'https://ahasolutions.ca';

// After
export const SITE_URL = 'https://www.ahasolutions.ca';
```

This is foundational: every schema `@id`, sitemap entry, robots sitemap reference, and OG/Twitter canonical URL the rest of the plan emits derives from this constant. The spec hard-codes `https://www.ahasolutions.ca` throughout, and once `@id`s ship to production they become entity identifiers consumed by search engines / AI crawlers — changing them later breaks entity continuity.

Verify (against production, before the change ships):

```bash
curl -sI https://ahasolutions.ca | grep -iE 'location|^HTTP'
curl -sI https://www.ahasolutions.ca | grep -iE 'location|^HTTP'
```

Expected: one of the two returns `200`, the other returns `301`/`308` to the canonical. Confirm `www` is (or will be) the destination. If the apex serves canonical and the host should be apex (no www), revert this step and update the spec instead.

Restart dev server, then:

```bash
curl -sL http://localhost:3000/sitemap.xml | head -5
curl -sL http://localhost:3000/robots.txt
```

Expected: sitemap URLs use `https://www.ahasolutions.ca`; robots sitemap reference does too.

- [ ] **Step 5: Confirm starting JSON-LD count**

```bash
curl -sL http://localhost:3000/ | grep -c 'application/ld+json'
```
Expected: `1` (just the existing Organization in layout.tsx).

- [ ] **Step 6: Confirm /llms.txt returns 404**

```bash
curl -sI http://localhost:3000/llms.txt | head -1
```
Expected: `HTTP/1.1 404 Not Found`. This is the starting state we'll change in Task 1.

---

### Task 1: Add `app/llms.txt/route.ts`

**Files:**
- Create: `app/llms.txt/route.ts`

- [ ] **Step 1: Create the Route Handler**

```ts
// app/llms.txt/route.ts
import { SITE_URL } from '@/lib/constants';

export const dynamic = 'force-static';
export const revalidate = 3600;

const body = `# AHA Solutions & Systems Inc.

> AHA Solutions builds Growth Systems — AI + automation infrastructure that
> captures leads, replies under 60 seconds, runs follow-up sequences, and
> automates operations for SMB founders and lean teams who need to scale
> without adding headcount.

Based in Canada (ventureLAB partner). Serving clients across Canada and Hong
Kong. Founded by Steven Yu, former CEO of a publicly-listed company. 40+
systems shipped across education, automotive, retail, and services.

## Systems we build

- [Lead Capture & Response](${SITE_URL}/systems): Never miss a lead. AI replies in under 60 seconds via SMS, email, or chat.
- [Sales Follow-up System](${SITE_URL}/systems): Automated nurture sequences that turn more leads into customers.
- [Operations Automation](${SITE_URL}/systems): Eliminate repetitive admin work — invoicing, scheduling, data entry.
- [Client Onboarding System](${SITE_URL}/systems): Automate payment → welcome → portal → delivery flow.
- [End-to-End Growth System](${SITE_URL}/systems): Run the full pipeline — lead, close, deliver, retain — on automation.

## How we work

Map → Build → Run. We map your workflow, build the system in ~14 days, then run / monitor / refine.

## Results

40+ systems shipped. Average 80% faster response time. Average 60-second AI reply speed. Average 14-day delivery.

## Get started

[Book a free 30-minute audit](${SITE_URL}/book) — no pitch, no pressure.

## Optional

- [About Steven Yu](${SITE_URL}/about)
- [Case studies](${SITE_URL}/case-studies)
- [繁體中文 (Traditional Chinese)](${SITE_URL}/zh-TW)
- [简体中文 (Simplified Chinese)](${SITE_URL}/zh-CN)
`;

export function GET() {
  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
```

- [ ] **Step 2: Verify dev server serves it**

```bash
npm run dev   # in another terminal if not still running
curl -sI http://localhost:3000/llms.txt | head -3
curl -sL http://localhost:3000/llms.txt | head -10
```
Expected: `HTTP/1.1 200 OK`, `Content-Type: text/markdown; charset=utf-8`, then the first 10 lines of the Markdown body starting with `# AHA Solutions & Systems Inc.`.

- [ ] **Step 3: Commit**

```bash
git add app/llms.txt/route.ts
git commit -m "feat(aeo): add /llms.txt route handler for AI agent discovery"
```

---

### Task 2: Update `app/robots.ts` with AI-bot allowlist

**Files:**
- Modify: `app/robots.ts`

- [ ] **Step 1: Confirm current state**

```bash
cat app/robots.ts
```
Expected: returns one rules object with `userAgent: '*'` + `allow: '/'` + the sitemap URL.

```bash
curl -sL http://localhost:3000/robots.txt
```
Expected: emits `User-agent: *` + `Allow: /` + `Sitemap: …/sitemap.xml`. No AI-bot blocks.

- [ ] **Step 2: Replace `rules` with an array**

Replace the entire body of `app/robots.ts` with:

```ts
import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
  // Explicit allowlist for AI crawlers. Default-allow for everyone else.
  // Listed individually (rather than relying on the wildcard) so the
  // allowlist is visible to anyone inspecting robots.txt — signal as
  // well as function. AHA Solutions is an AI agency; this is on-brand.
  return {
    rules: [
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
      { userAgent: '*', allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
```

- [ ] **Step 3: Verify**

```bash
curl -sL http://localhost:3000/robots.txt
```
Expected: 8 `User-agent` blocks (one per bot + wildcard), each followed by `Allow: /`, then `Sitemap: …/sitemap.xml`.

- [ ] **Step 4: Commit**

```bash
git add app/robots.ts
git commit -m "feat(aeo): explicit allowlist for AI crawlers in robots.ts"
```

---

### Task 3: Replace site-wide `organizationSchema` with `siteGraph`

**Files:**
- Modify: `app/(en)/layout.tsx`

- [ ] **Step 1: Locate the existing block**

In `app/(en)/layout.tsx`, find this block (currently above `RootLayout`):

```ts
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AHA Solutions",
  url: SITE_URL,
  description:
    "AI systems that capture leads, follow up instantly, and run your operations — so you can scale without adding headcount.",
  founder: {
    "@type": "Person",
    name: "Steven Yu",
  },
};
```

And the corresponding `<script>` injection further down inside `<head>`:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
/>
```

- [ ] **Step 2: Replace the const with `siteGraph`**

Replace `organizationSchema` with this (use the same surrounding imports — `SITE_URL` is already imported):

```ts
const siteGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'AHA Solutions & Systems Inc.',
      alternateName: 'AHA Solutions',
      url: SITE_URL,
      logo: `${SITE_URL}/aha-logo-full.png`,
      description:
        'AI systems that capture leads, follow up instantly, and run your operations — so you can scale without adding headcount.',
      founder: { '@id': `${SITE_URL}/about#steven-yu` },
      areaServed: ['CA', 'HK'],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        url: `${SITE_URL}/book`,
      },
      // address and sameAs are intentionally omitted — Steven fills these
      // in Task 19 before production deploy.
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'AHA Solutions',
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: ['en', 'zh-TW', 'zh-CN'],
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/about#steven-yu`,
      name: 'Steven Yu',
      jobTitle: 'Founder & CEO',
      worksFor: { '@id': `${SITE_URL}/#organization` },
      description:
        'Former CEO of a publicly-listed company. 15+ years leadership experience. Has shipped 40+ automation systems for SMB founders.',
      image: `${SITE_URL}/steven-yu.png`,
      url: `${SITE_URL}/about`,
    },
  ],
};
```

- [ ] **Step 3: Update the `<script>` injection**

Change the `dangerouslySetInnerHTML` reference from `organizationSchema` to `siteGraph`:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(siteGraph) }}
/>
```

- [ ] **Step 4: Verify dev render**

Restart the dev server if needed, then:

```bash
curl -sL http://localhost:3000/ | python3 -c "import sys, re, json; \
b = re.findall(r'<script[^>]*ld\+json[^>]*>(.*?)</script>', sys.stdin.read(), re.DOTALL); \
print('Blocks:', len(b)); \
g = json.loads(b[0]); \
print('Graph types:', [n.get(\"@type\") for n in g.get(\"@graph\", [])])"
```
Expected:
```
Blocks: 1
Graph types: ['Organization', 'WebSite', 'Person']
```

- [ ] **Step 5: Commit**

```bash
git add app/\(en\)/layout.tsx
git commit -m "feat(aeo): expand site-wide JSON-LD to @graph (Org + WebSite + Person)"
```

---

### Task 4: Add `serviceListSchema` to `/systems`

**Files:**
- Modify: `app/(en)/systems/page.tsx`

The existing FAQ schema in this file stays. We add an `ItemList` of 5 `Service` alongside it.

- [ ] **Step 1: Add `serviceListSchema` const**

Inside the page component, immediately above `const faqSchema = …`, add:

```ts
const serviceListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'Service',
      position: 1,
      name: 'Lead Capture & Response',
      description:
        'AI-powered lead intake that replies in under 60 seconds via SMS, email, or chat. Captures into CRM and books calls automatically.',
      provider: { '@id': `${SITE_URL}/#organization` },
      serviceType: 'Marketing automation',
    },
    {
      '@type': 'Service',
      position: 2,
      name: 'Sales Follow-up System',
      description:
        'Automated nurture sequences across email and SMS that turn more leads into customers without manual chasing.',
      provider: { '@id': `${SITE_URL}/#organization` },
      serviceType: 'Sales automation',
    },
    {
      '@type': 'Service',
      position: 3,
      name: 'Operations Automation',
      description:
        'Eliminate repetitive admin work — invoicing, scheduling, data entry, internal notifications — across your existing tools.',
      provider: { '@id': `${SITE_URL}/#organization` },
      serviceType: 'Business process automation',
    },
    {
      '@type': 'Service',
      position: 4,
      name: 'Client Onboarding System',
      description:
        'Automate the full payment → welcome → portal → delivery flow so every new client gets a consistent, on-brand experience.',
      provider: { '@id': `${SITE_URL}/#organization` },
      serviceType: 'Customer onboarding',
    },
    {
      '@type': 'Service',
      position: 5,
      name: 'End-to-End Growth System',
      description:
        'Run the entire pipeline — lead, close, deliver, retain — on a single integrated automation stack.',
      provider: { '@id': `${SITE_URL}/#organization` },
      serviceType: 'Growth operations',
    },
  ],
};
```

Make sure `SITE_URL` is imported at the top of the file (it may already be). If not:

```ts
import { SITE_URL } from '@/lib/constants';
```

- [ ] **Step 2: Inject the schema**

In the page's `return ( <> … </> )`, add a second `<script>` immediately after the existing FAQ script:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
/>
```

(Leave the existing `<script>` with `faqSchema` untouched.)

- [ ] **Step 3: Verify**

```bash
curl -sL http://localhost:3000/systems | python3 -c "import sys, re, json; \
b = re.findall(r'<script[^>]*ld\+json[^>]*>(.*?)</script>', sys.stdin.read(), re.DOTALL); \
print('Blocks:', len(b)); \
for s in b: \
    o = json.loads(s); \
    print(o.get('@type') or [n['@type'] for n in o.get('@graph', [])])"
```
Expected (after Task 3 layered the site-wide `@graph` onto every page in this route group):
```
Blocks: 3
['Organization', 'WebSite', 'Person']
FAQPage
ItemList
```

- [ ] **Step 4: Commit**

```bash
git add app/\(en\)/systems/page.tsx
git commit -m "feat(aeo): add Service ItemList JSON-LD on /systems"
```

---

### Task 5: Add `profilePageSchema` to `/about`

**Files:**
- Modify: `app/(en)/about/page.tsx`

- [ ] **Step 1: Add the schema**

Inside the page component, before the `return ( <> … </> )`:

```ts
const profilePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: { '@id': `${SITE_URL}/about#steven-yu` },
};
```

Add `SITE_URL` import if not already present:

```ts
import { SITE_URL } from '@/lib/constants';
```

- [ ] **Step 2: Inject the schema**

Inside the `return` fragment, add as the first child:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
/>
```

- [ ] **Step 3: Verify**

```bash
curl -sL http://localhost:3000/about | python3 -c "import sys, re, json; \
b = re.findall(r'<script[^>]*ld\+json[^>]*>(.*?)</script>', sys.stdin.read(), re.DOTALL); \
print('Blocks:', len(b)); \
for s in b: \
    o = json.loads(s); \
    print(o.get('@type') or [n['@type'] for n in o.get('@graph', [])])"
```
Expected:
```
Blocks: 2
['Organization', 'WebSite', 'Person']
ProfilePage
```
(The first block is the site-wide `@graph` from layout; it has no top-level `@type`, only an `@graph` array — the parser flattens that to the inner `@type` list.)

- [ ] **Step 4: Commit**

```bash
git add app/\(en\)/about/page.tsx
git commit -m "feat(aeo): add ProfilePage JSON-LD on /about"
```

---

### Task 6: Wrap each home component's H2 block in `<section aria-labelledby>`

**Files:**
- Modify: `components/home/five-systems.tsx`, `components/home/how-it-works.tsx`, `components/home/flows-section.tsx`, `components/home/case-study.tsx`, `components/home/founder-block.tsx`, `components/home/final-cta.tsx`

For each component, the change is the same shape: the existing top-level wrapper (often `<section className="section">` or `<div>`) needs `aria-labelledby` pointing at an `id` on the H2 inside it. If the wrapper is currently `<div>`, switch to `<section>`. Visual class names stay the same. Hero (`hero.tsx`) is intentionally NOT wrapped — its H1 already serves as the page-level landmark per spec.

- [ ] **Step 1: five-systems.tsx** — `aria-labelledby="systems-we-build"`, H2 id `systems-we-build`.

- [ ] **Step 2: how-it-works.tsx** — `aria-labelledby="process"`, H2 id `process`.

- [ ] **Step 3: flows-section.tsx** — `aria-labelledby="system-overview"`, H2 id `system-overview`.

- [ ] **Step 4: case-study.tsx (80% panel) — `aria-labelledby="case-study"`**

`case-study.tsx` currently has ONE outer `<section className="section">` (line 32) wrapping both the 80% BEFORE/STAT/AFTER panel (lines 33-73) AND the testimonials block (lines 75-110). The spec requires TWO distinct labelled landmarks. Restructure as follows:

Replace the outer `<section className="section">…</section>` with a fragment `<>…</>` and split the inner content into two sibling `<section>` elements:

```tsx
return (
  <>
    <section className="section" aria-labelledby="case-study">
      <div className="wrap">
        <Eyebrow style={{ marginBottom: 12 }}>{dict.eyebrow}</Eyebrow>
        <h2 id="case-study" style={{ marginBottom: 32, maxWidth: 820 }}>{dict.h2}</h2>
        {/* ... BEFORE/STAT/AFTER grid (lines 37-73 in the current source) ... */}
      </div>
    </section>

    <section className="section" aria-labelledby="testimonials">
      <div className="wrap">
        <Eyebrow style={{ marginBottom: 12 }}>{dict.testimonialsEyebrow}</Eyebrow>
        <h2 id="testimonials" style={{ marginBottom: 32 }}>{dict.testimonialsH2}</h2>
        {/* ... testimonials grid (lines 80-109 in the current source) ... */}
      </div>
    </section>
  </>
);
```

Note: the `marginTop: 80` div that currently separates the testimonials from the 80% panel (line 76) can be removed — the new outer `<section className="section">` already provides vertical spacing via the `.section` class.

- [ ] **Step 5: case-study.tsx (testimonials section)** — covered by Step 4 above (single file, two sibling sections).

- [ ] **Step 6: founder-block.tsx** — `aria-labelledby="founder"`, H2 id `founder`.

- [ ] **Step 7: final-cta.tsx** — `aria-labelledby="cta"`, H2 id `cta` (the "Book the audit. Ship the system." H2).

- [ ] **Step 8: Verify**

```bash
curl -sL http://localhost:3000/ | grep -oE '<section[^>]*aria-labelledby="[^"]*"' | sort -u
```
Expected: 7 unique lines, one per labelled section (`systems-we-build`, `process`, `system-overview`, `case-study`, `testimonials`, `founder`, `cta`).

```bash
curl -sL http://localhost:3000/ | grep -oE 'id="(systems-we-build|process|system-overview|case-study|testimonials|founder|cta)"' | sort -u
```
Expected: 7 unique id matches.

- [ ] **Step 9: Run build**

```bash
npm run build
```
Expected: clean build. No new TS errors. (`npm run lint` is broken on this repo — see Tech Stack note in the plan header.)

- [ ] **Step 10: Commit**

```bash
git add components/home/{five-systems,how-it-works,flows-section,case-study,founder-block,final-cta}.tsx
git commit -m "refactor(aeo): wrap home sections with aria-labelledby landmarks"
```

---

### Task 7: `logos-strip.tsx` — tool marquee → `<ul role="list">`

**Files:**
- Modify: `components/home/logos-strip.tsx`

- [ ] **Step 1: Confirm current shape**

```bash
grep -nE "(map\(|tools|logos)" components/home/logos-strip.tsx | head -10
```
Identify the tool name list (likely a `tools.map(…)` or similar) currently rendered as inline spans or a continuous track.

- [ ] **Step 2: Refactor render to `<ul>`**

Replace whatever renders the tool list with:

```tsx
<ul role="list" aria-label="Tools and platforms we build with" className="logos-strip-list">
  {tools.map((t) => (
    <li key={t.name}>{t.name}</li>
  ))}
</ul>
```

(Keep the existing CSS-driven marquee animation. If the marquee duplicates items for an infinite scroll, render the duplicates inside the same `<ul>` — agents read the DOM, animation is irrelevant. The duplicate `<li>` entries are fine for assistive tech.)

If `logos-strip.tsx` uses `dict` for the section heading, leave that markup as-is.

- [ ] **Step 3: Verify**

```bash
curl -sL http://localhost:3000/ | grep -oE '<ul[^>]*logos-strip-list[^>]*>' | head -1
curl -sL http://localhost:3000/ | grep -oE 'aria-label="Tools and platforms we build with"' | head -1
```
Expected: one match each.

Also visually open `http://localhost:3000/` in browser; confirm marquee still animates identically.

- [ ] **Step 4: Commit**

```bash
git add components/home/logos-strip.tsx
git commit -m "refactor(aeo): tool marquee → <ul role=list> for agent-readable tool list"
```

---

### Task 8: `metrics-strip.tsx` — stats → `<dl><dt><dd>`

**Files:**
- Modify: `components/home/metrics-strip.tsx`

- [ ] **Step 1: Refactor**

Convert the four-stat strip (80% / 60s / 14d / 40+) into a `<dl>`. Replace the existing render with:

```tsx
<dl className="metrics-strip">
  {items.map((it) => (
    <div className="metric" key={it.label}>
      <dt>{it.label}</dt>
      <dd>{it.value}</dd>
    </div>
  ))}
</dl>
```

(Keep the existing CSS class names on the wrappers if they exist. If the existing styling targets `.metric .value` / `.metric .label`, rename CSS selectors to `.metric dt` / `.metric dd` in `globals.css` or the component's CSS module.)

- [ ] **Step 2: Verify markup**

```bash
curl -sL http://localhost:3000/ | grep -oE '<dl[^>]*metrics-strip[^>]*>' | head -1
curl -sL http://localhost:3000/ | grep -oE '<dt>[^<]+</dt>' | head -4
curl -sL http://localhost:3000/ | grep -oE '<dd>[^<]+</dd>' | head -4
```
Expected: 1 `<dl>` opener, 4 `<dt>` (labels), 4 `<dd>` (values).

- [ ] **Step 3: Visual check**

Open `http://localhost:3000/` and confirm stats still display in the same visual layout as before.

- [ ] **Step 4: Commit**

```bash
git add components/home/metrics-strip.tsx
# include the CSS file if you renamed selectors
git commit -m "refactor(aeo): metrics strip → <dl> for value↔label binding"
```

---

### Task 9: `flows-section.tsx` — flow nodes → `<ol>`

**Files:**
- Modify: `components/home/flows-section.tsx`

The "What your system actually looks like" section shows tabbed flow diagrams (Ad → Landing Page → AI Chat → CRM → Booking). Each tab's flow is an ordered sequence — should be `<ol>`.

- [ ] **Step 1: Refactor each flow render**

For each tab's flow render, replace the existing node list with:

```tsx
<ol className="flow-nodes" aria-label={`${tab.name} flow`}>
  {tab.nodes.map((n) => (
    <li key={n.label}>
      <span className="flow-node-label">{n.label}</span>
      {n.subtext && <span className="flow-node-sub">{n.subtext}</span>}
    </li>
  ))}
</ol>
```

(If the existing markup uses arrows as separate `<span>` elements between nodes, remove them — the `<ol>` order is already semantic; arrows can be rendered via CSS `::before`/`::after` on `<li>` if needed visually.)

- [ ] **Step 2: Verify**

```bash
curl -sL http://localhost:3000/ | grep -oE '<ol[^>]*flow-nodes[^>]*aria-label="[^"]*"' | sort -u
```
Expected: one or more `<ol>` matches, each with a unique `aria-label`.

- [ ] **Step 3: Visual check**

Open `http://localhost:3000/` and confirm each flow tab still renders identically.

- [ ] **Step 4: Commit**

```bash
git add components/home/flows-section.tsx
# include the CSS file if arrows moved into CSS pseudo-elements
git commit -m "refactor(aeo): flow nodes → <ol aria-label> for sequence semantics"
```

---

### Task 10: `case-study.tsx` — testimonials → `<article><blockquote>`

**Files:**
- Modify: `components/home/case-study.tsx`

The testimonials inside this component (Maggie Chan, Kenet Chan, Benjamin Chau) currently render as styled `<div>`s. Convert each to `<article><blockquote>`.

- [ ] **Step 1: Refactor the testimonial render**

Replace the testimonial map (find by quote text e.g. "content creation costs") with:

```tsx
{testimonials.map((t) => (
  <article className="testimonial" key={t.name}>
    <blockquote>
      <p>{t.quote}</p>
    </blockquote>
    <footer>
      <cite>
        <span className="testimonial-name">{t.name}</span>
        <span className="testimonial-role">, {t.role}</span>
      </cite>
    </footer>
  </article>
))}
```

(Match existing class names to preserve visual styling. If the data shape uses `t.title` instead of `t.role`, adjust accordingly.)

- [ ] **Step 2: Verify**

```bash
curl -sL http://localhost:3000/ | grep -cE '<article[^>]*testimonial'
curl -sL http://localhost:3000/ | grep -cE '<blockquote>'
```
Expected: 3 articles (one per testimonial), 3 `<blockquote>` openers.

- [ ] **Step 3: Visual check**

Open `http://localhost:3000/` and confirm testimonials look identical to before.

- [ ] **Step 4: Commit**

```bash
git add components/home/case-study.tsx
git commit -m "refactor(aeo): testimonials → <article><blockquote> per quote"
```

---

### Task 11: Add `homeFaqItems` to `lib/data-i18n.ts`

**Files:**
- Modify: `lib/data-i18n.ts`

- [ ] **Step 1: Add `homeFaqItems` to the `LocalizedData` interface**

Find the `LocalizedData` interface in `lib/data-i18n.ts`. Add `homeFaqItems: FaqItem[];` near the other FAQ fields (e.g. immediately above `systemsFaqItems` or `bookFaqItems`):

```ts
interface LocalizedData {
  // … existing fields …
  homeFaqItems: FaqItem[];       // <-- ADD THIS LINE
  // … existing fields like systemsFaqItems, bookFaqItems …
}
```

- [ ] **Step 2: Define the EN home FAQ items**

Above the `getLocalizedData` function, add a new exported const for the EN values:

```ts
export const enHomeFaqItems: FaqItem[] = [
  {
    q: 'What does AHA Solutions actually build?',
    a: "We build Growth Systems — combinations of AI agents, automation workflows, and CRM integrations that capture leads, respond in under 60 seconds, follow up on autopilot, and handle repetitive operations. We don't sell software; we install the system that runs inside your business. Five core systems: Lead Capture & Response, Sales Follow-up, Operations Automation, Client Onboarding, and End-to-End Growth.",
  },
  {
    q: 'Who is this for?',
    a: "SMB founders and lean teams (typically 1–20 people) who are losing leads to slow response times, drowning in repetitive admin, or hitting a hiring ceiling. We're a fit if you can't or don't want to add headcount but still need to scale outreach, follow-up, and operations.",
  },
  {
    q: 'How is this different from hiring a VA or another agency?',
    a: "A VA does the work; we build a system that does the work — without sick days, training cycles, or context loss. Versus other agencies: we don't sell deliverables, we install operational infrastructure you own. Average go-live is 14 days, and the system keeps running long after the project ends.",
  },
  {
    q: 'How fast can a system go live?',
    a: 'Around 14 days from kickoff to live system. The Map → Build → Run process: (1) we map your workflow and find where leads and time are leaking; (2) we design and ship the system with documentation; (3) it runs with minimal manual input — we monitor and refine over time.',
  },
  {
    q: 'What tools and platforms do you use?',
    a: "We pick from a stable stack — Airtable, Make, n8n, Claude, Gemini, ChatGPT, GoHighLevel, Next.js, WordPress, Wix, HeyGen, Zapier — based on what you already use and what the system needs to do. We integrate; we don't force you onto our tools.",
  },
  {
    q: 'What does it cost?',
    a: 'Pricing depends on system scope and complexity. The 30-minute audit is free and includes a written assessment with no obligation. We quote after we understand your workflow.',
  },
  {
    q: 'Do you work with HK or Canada clients?',
    a: 'Both. AHA Solutions is based in Canada (ventureLAB partner). Steven Yu was previously CEO of a publicly-listed company in Hong Kong, so we know both markets. Current client work spans both — examples include Maple Study Link (Canada), Tint Wrap Auto (Canada), and Wine Century (HK).',
  },
  {
    q: "What if I don't know what to automate yet?",
    a: "That's exactly what the free 30-minute audit is for. We don't expect you to arrive with a spec. The audit identifies where leads and time are leaking and what's most worth automating first. No pitch. No pressure.",
  },
];
```

- [ ] **Step 3: Wire `homeFaqItems` into the three locale returns**

Inside `getLocalizedData`:
- The `'en'` return adds `homeFaqItems: enHomeFaqItems,`
- The `'zh-TW'` return adds `homeFaqItems: enHomeFaqItems,` *(Phase 1b will replace with `zhTWHomeFaqItems` — for now we stub to en so the type checks)*
- The `'zh-CN'` return adds `homeFaqItems: enHomeFaqItems,` *(same stub strategy)*

Add a comment above each zh return explaining the stub:
```ts
// homeFaqItems intentionally stubbed to en for Phase 1; translated in Phase 1b
```

- [ ] **Step 4: Type-check**

```bash
npm run build
```
Expected: clean build. If TS complains that `homeFaqItems` is missing from a return, find the locale and add the stubbed line.

- [ ] **Step 5: Commit**

```bash
git add lib/data-i18n.ts
git commit -m "feat(aeo): add homeFaqItems to LocalizedData (en filled, zh stubbed)"
```

---

### Task 12: Add `home.faq` to the EN dictionary

**Files:**
- Modify: `lib/dictionaries/en/<whichever file holds dict.home>`

- [ ] **Step 1: Locate the home dict file**

```bash
grep -rln '"home"\|home:' lib/dictionaries/en/ | head -5
```
Expected: a `home.json` (or `home.ts`) or a single `index.ts` exporting `home: { … }`. Open that file.

- [ ] **Step 2: Add the `faq` block alongside the existing `home.hero`, `home.fiveSystems`, etc.**

If the dict is JSON:

```json
"home": {
  …,
  "faq": {
    "heading": "Questions founders ask",
    "sectionId": "faq"
  }
}
```

If the dict is TS (object literal):

```ts
home: {
  …,
  faq: {
    heading: 'Questions founders ask',
    sectionId: 'faq',
  },
},
```

- [ ] **Step 3: Add `FaqSectionDict` to `types.ts` and extend `HomeDict` (required)**

Open `lib/dictionaries/types.ts`. `HomeDict` (line ~115) currently lists 8 sub-dicts (`hero`, `fiveSystems`, `howItWorks`, `flowsSection`, `caseStudy`, `founderBlock`, `finalCta`, `logosStrip`) — none with `faq`. Without this extension, `npm run build` will fail on the new `dict.home.faq` reference in Task 14.

Add a new interface above `HomeDict`:

```ts
export interface FaqSectionDict {
  heading: string;
  sectionId: string;
}
```

Then add `faq: FaqSectionDict;` as a new field inside `HomeDict`:

```ts
export interface HomeDict {
  hero: HeroDict;
  fiveSystems: FiveSystemsDict;
  howItWorks: HowItWorksDict;
  flowsSection: FlowsSectionDict;
  caseStudy: CaseStudyDict;
  founderBlock: FounderBlockDict;
  finalCta: FinalCtaDict;
  logosStrip: LogosStripDict;
  faq: FaqSectionDict;   // <-- ADD THIS LINE
}
```

- [ ] **Step 4: Add stub entries to zh-TW and zh-CN dicts**

In `lib/dictionaries/zh-TW/<home>` and `lib/dictionaries/zh-CN/<home>`, add the same `faq` block with identical English values (Phase 1b translates).

- [ ] **Step 5: Type-check**

```bash
npm run build
```
Expected: clean.

- [ ] **Step 6: Commit**

```bash
git add lib/dictionaries/
git commit -m "feat(aeo): add dict.home.faq block (en filled, zh stubbed)"
```

---

### Task 13: Create `components/home/faq-section.tsx`

**Files:**
- Create: `components/home/faq-section.tsx`

The component renders a disclosure-pattern FAQ. Mirror the UX of the existing FAQ implementations on `/systems` and `/book`. Type/prop names should match the conventions of other `components/home/*` files.

- [ ] **Step 1: Create the file**

```tsx
// components/home/faq-section.tsx
// 'use client' is required because the disclosure pattern uses useState;
// matches the existing SystemsFAQ / BookFAQ components.
'use client';

import { useState } from 'react';
import type { FaqItem } from '@/lib/data';

interface Dict {
  heading: string;
  sectionId: string;
}

interface Props {
  dict: Dict;
  items: FaqItem[];
}

export function FaqSection({ dict, items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="section faq-section"
      aria-labelledby={dict.sectionId}
    >
      <div className="wrap">
        <h2 id={dict.sectionId} className="faq-heading">
          {dict.heading}
        </h2>

        <ul className="faq-list" role="list">
          {items.map((it, i) => {
            const isOpen = openIndex === i;
            const buttonId = `faq-q-${i}`;
            const regionId = `faq-a-${i}`;
            return (
              <li key={it.q} className="faq-item">
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={regionId}
                  className="faq-question"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="faq-q-text">{it.q}</span>
                  <span className="faq-q-icon" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div
                  id={regionId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="faq-answer"
                >
                  <p>{it.a}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add CSS**

Open the home-section CSS (likely `app/globals.css`). Append:

```css
.faq-section { padding: 80px 0; }
.faq-section .faq-heading { font-size: 32px; margin-bottom: 32px; }
.faq-list { list-style: none; padding: 0; margin: 0; }
.faq-item { border-bottom: 1px solid var(--border, rgba(255,255,255,0.1)); }
.faq-question {
  width: 100%; padding: 22px 4px; display: flex;
  justify-content: space-between; align-items: center;
  background: transparent; border: 0; cursor: pointer;
  font: inherit; color: inherit; text-align: left;
}
.faq-q-icon { font-size: 24px; margin-left: 16px; }
.faq-answer { padding: 0 4px 22px; max-width: 760px; line-height: 1.6; }
.faq-answer p { margin: 0; }
```

(If the project uses a CSS module pattern instead, create `faq-section.module.css` next to the component and `import styles from …`.)

- [ ] **Step 3: Type-check**

```bash
npm run build
```
Expected: clean.

- [ ] **Step 4: Commit**

```bash
git add components/home/faq-section.tsx app/globals.css
git commit -m "feat(aeo): new FaqSection component with accessible disclosure pattern"
```

---

### Task 14: Mount FAQ + emit FAQPage JSON-LD on homepage

**Files:**
- Modify: `app/(en)/page.tsx`

- [ ] **Step 1: Import the new component + add the schema**

At the top of `app/(en)/page.tsx`, add:

```ts
import { FaqSection } from '@/components/home/faq-section';
```

Inside `HomePage` (the async function body), before `return ( <> … </> )`, add:

```ts
const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: data.homeFaqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
};
```

- [ ] **Step 2: Mount the section + emit the script**

Inside the JSX `return`, place the `<script>` first (immediately inside the fragment), and the new `<FaqSection>` between `<FounderBlock>` and `<FinalCTA>`:

```tsx
return (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
    />

    {/* 1. HOOK */}
    <Hero … />

    {/* 2. CLARITY */}
    <LogosStrip … />
    <FiveSystems … />
    <HowItWorks … />
    <FlowsSection … />

    {/* 3. TRUST */}
    <div className="wrap"><MetricsStrip … /></div>
    <CaseStudy … />
    <FounderBlock … />

    {/* 3.5. ANSWER ENGINE — Questions founders ask */}
    <FaqSection dict={dict.home.faq} items={data.homeFaqItems} />

    {/* 4. ACTION + 5. REASSURANCE */}
    <FinalCTA … />
  </>
);
```

(Leave existing props on the other components untouched.)

- [ ] **Step 3: Verify dev render**

```bash
curl -sL http://localhost:3000/ | python3 -c "import sys, re, json; \
b = re.findall(r'<script[^>]*ld\+json[^>]*>(.*?)</script>', sys.stdin.read(), re.DOTALL); \
print('Blocks:', len(b)); \
for s in b: \
    o = json.loads(s); \
    print(o.get('@type') or [n['@type'] for n in o.get('@graph', [])])"
```
Expected:
```
Blocks: 2
['Organization', 'WebSite', 'Person']
FAQPage
```

Then visually open `http://localhost:3000/`, scroll to the FAQ section. Confirm:
- 8 question rows visible, each starts with `+`
- Click each row → expands, `+` becomes `−`
- Click again → collapses
- Tab through with keyboard; `aria-expanded` updates correctly

- [ ] **Step 4: Verbatim-match check**

The FAQPage schema requires the rendered answer text to match the JSON-LD text. Spot-check:

```bash
curl -sL http://localhost:3000/ | grep -c "That's exactly what the free 30-minute audit"
```
Expected: at least `2` (once in visible HTML, once in JSON-LD body — though JSON-LD escapes apostrophes, so this may grep to 1; if so, also check `grep -c "free 30-minute audit"` which should be ≥ 2).

- [ ] **Step 5: Commit**

```bash
git add app/\(en\)/page.tsx
git commit -m "feat(aeo): mount FAQ section + FAQPage JSON-LD on homepage"
```

---

### Task 15: Full build + lint pass

**Files:** none

- [ ] **Step 1: Build**

```bash
npm run build
```
Expected: build succeeds, no TS errors, no warnings about missing properties. Look especially for any `Property 'homeFaqItems' is missing` or `Property 'faq' is missing` errors — those mean Tasks 11/12 left a locale unstubbed.

- [ ] **Step 2: Confirm production build output**

```bash
npm start &
SERVER_PID=$!
sleep 5
curl -sI http://localhost:3000/llms.txt | head -2
curl -sL http://localhost:3000/robots.txt
curl -sL http://localhost:3000/ | grep -c 'application/ld+json'
kill "$SERVER_PID"
```
Expected: llms.txt = 200 / text/markdown; robots.txt shows 8 user-agent blocks; homepage = 2 ld+json blocks.

- [ ] **Step 3: No commit (build artifacts only)**

---

### Task 16: External validation (schema.org + Lighthouse local)

**Files:** none (manual checks against running dev server or production build)

- [ ] **Step 1: Validate each JSON-LD block in schema.org Validator**

For each of the following pages, fetch the page, extract each `<script type="application/ld+json">` body, paste it into <https://validator.schema.org/>, and confirm zero errors:

- `/` → site `@graph` + `FAQPage`
- `/systems` → site `@graph` + existing `FAQPage` + new `ItemList`
- `/about` → site `@graph` + new `ProfilePage`
- `/book` → site `@graph` + existing `FAQPage`

Extraction helper:
```bash
curl -sL http://localhost:3000/<path> | python3 -c "import sys, re; \
for b in re.findall(r'<script[^>]*ld\+json[^>]*>(.*?)</script>', sys.stdin.read(), re.DOTALL): \
    print('---'); print(b)"
```

- [ ] **Step 2: Run Lighthouse on homepage**

In Chrome DevTools → Lighthouse → Mobile + Desktop, run against `http://localhost:3000/`.

Expected:
- SEO ≥ 100
- Accessibility ≥ 95 (drop from current baseline is unexpected; investigate if so)
- Performance: not a Phase 1 goal — record baseline only

- [ ] **Step 3: Record results in `docs/superpowers/plans/2026-05-19-ahasolutions-aeo-phase-1.md`**

Append a `## Verification log` section at the bottom of THIS plan file with:
- Schema.org Validator: ✅ / ❌ per page
- Lighthouse SEO score: number
- Date + git SHA of the verified build

- [ ] **Step 4: Commit the verification log**

```bash
git add docs/superpowers/plans/2026-05-19-ahasolutions-aeo-phase-1.md
git commit -m "docs(aeo): record Phase 1 local verification log"
```

---

### Task 17: Push branch + open preview deploy (Vercel)

**Files:** none

- [ ] **Step 1: Push the branch**

```bash
git push -u origin feature/aeo-phase-1
```

- [ ] **Step 2: Wait for Vercel preview deploy**

Vercel auto-deploys branch pushes. Wait for the preview URL (e.g. `aha-solutions-website-git-feature-aeo-phase-1-stevenyukaho.vercel.app`).

- [ ] **Step 3: Confirm preview surfaces**

```bash
PREV=https://<your-preview-url>
curl -sI $PREV/llms.txt | head -2
curl -sL $PREV/robots.txt | head -25
curl -sL $PREV/ | grep -c 'application/ld+json'
```
Expected: same as local production build.

- [ ] **Step 4: Run Google Rich Results Test against preview homepage**

Paste `<preview>/` into <https://search.google.com/test/rich-results>. Expected: FAQ detected (8 items). No critical errors.

Repeat for `<preview>/systems` (existing FAQ + new ItemList; ItemList is not a Rich Result type but should still parse), `<preview>/about` (ProfilePage), `<preview>/book` (existing FAQ).

- [ ] **Step 5: No commit (verification only)**

---

### Task 18: Resolve open items from spec — `address`, `sameAs`, optional FAQ voice pass

**Files:**
- Modify: `app/(en)/layout.tsx` (Organization schema)
- Modify: `lib/data-i18n.ts` (if Steven edits FAQ answers)

This task is a **gate**: Steven supplies the missing values from the spec's "Open items needing Steven input before deploy" before production deploy. The implementer should pause here and surface the gate.

- [ ] **Step 0: Confirm Phase 1b timing**

The plan ships EN only and stubs `zh-TW` / `zh-CN` values to en (Tasks 11 + 12). Phase 1b translates `llms.txt`, `enHomeFaqItems`, `dict.home.faq`, and JSON-LD descriptions into zh-TW + zh-CN. Ask Steven:

- (a) Ship Phase 1b immediately after Phase 1 lands?
- (b) Defer to a quarterly milestone (specify when)?
- (c) Defer indefinitely until traffic warrants?

Default if unanswered: (a). Record the decision in the `## Verification log` section at the bottom of THIS plan file (Task 16 created that section) so the next session knows the cadence.

- [ ] **Step 1: Collect inputs from Steven**

Required:
- Organization `address`: full street/city/region/postal OR confirmation to omit.
- Organization `sameAs`: array of LinkedIn / X / YouTube URLs OR confirmation to omit any/all.

Optional:
- FAQ answer voice pass: Steven may edit the 8 answers in `lib/data-i18n.ts` (`enHomeFaqItems`). **Critical:** whatever lands in `enHomeFaqItems[i].a` is what the schema emits — the rendered text and schema text must match exactly. Don't edit the schema separately.

- [ ] **Step 2: Apply the values**

If `address` provided, add to the Organization in `siteGraph` (in `app/(en)/layout.tsx`):
```ts
address: {
  '@type': 'PostalAddress',
  streetAddress: '<value>',
  addressLocality: '<value>',
  addressRegion: '<value>',
  postalCode: '<value>',
  addressCountry: 'CA',
},
```

If `sameAs` provided, add:
```ts
sameAs: [
  'https://www.linkedin.com/company/<…>',
  'https://x.com/<…>',
  // … etc.
],
```

If any field is to be omitted entirely, leave it absent — don't emit empty strings or null.

- [ ] **Step 3: Re-build + re-validate**

```bash
npm run build
curl -sL http://localhost:3000/ | python3 -c "import sys, re, json; \
b = re.findall(r'<script[^>]*ld\+json[^>]*>(.*?)</script>', sys.stdin.read(), re.DOTALL); \
org = next(n for n in json.loads(b[0])['@graph'] if n.get('@type') == 'Organization'); \
print(json.dumps(org, indent=2))"
```
Inspect output — confirm new fields present, no empty strings.

Re-paste into schema.org Validator. Expected: 0 errors.

- [ ] **Step 4: Commit**

```bash
git add app/\(en\)/layout.tsx lib/data-i18n.ts
git commit -m "chore(aeo): apply Organization address/sameAs + FAQ voice pass"
```

- [ ] **Step 5: Push**

```bash
git push
```

---

### Task 19: Merge + production deploy

**Files:** none (git + Vercel)

- [ ] **Step 1: Open PR**

```bash
gh pr create --title "Phase 1 AEO retrofit — llms.txt, JSON-LD bundle, semantic refactors, homepage FAQ" --body "$(cat <<'EOF'
## Summary
- New: `/llms.txt` route + 7-bot allowlist in `robots.ts`
- JSON-LD: site-wide `@graph` (Organization + WebSite + Person); ItemList of 5 Service on /systems; ProfilePage on /about; FAQPage on /
- Semantic refactors in `components/home/`: section landmarks, marquee → `<ul>`, stats → `<dl>`, flows → `<ol>`, testimonials → `<article><blockquote>`
- New homepage FAQ section + content (en; zh-TW/zh-CN stubbed for Phase 1b)

## Verification
- Schema.org Validator: ✅ all pages
- Google Rich Results Test: ✅ FAQ detected on /
- Lighthouse SEO: 100
- Manual visual diff: no regressions

## Test plan
- [ ] Curl /llms.txt → 200, text/markdown
- [ ] Curl /robots.txt → 8 user-agent blocks
- [ ] View homepage source → 2 ld+json blocks (site @graph + FAQPage)
- [ ] Open FAQ on homepage → 8 items expand/collapse correctly

Spec: `~/.claude/plans/i-have-read-this-splendid-melody.md`
Plan: `docs/superpowers/plans/2026-05-19-ahasolutions-aeo-phase-1.md`

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```

- [ ] **Step 2: Get Steven's review + approval**

Wait for Steven's review on the PR. Address any feedback inline (push additional commits).

- [ ] **Step 3: Merge to main**

```bash
gh pr merge --squash --delete-branch
```

(Or via the GitHub UI — Steven's preference.)

- [ ] **Step 4: Confirm production deploy**

Vercel auto-deploys main. Wait for production deploy, then:

```bash
curl -sI https://www.ahasolutions.ca/llms.txt | head -2
curl -sL https://www.ahasolutions.ca/robots.txt | head -25
curl -sL https://www.ahasolutions.ca/ | python3 -c "import sys, re, json; \
b = re.findall(r'<script[^>]*ld\+json[^>]*>(.*?)</script>', sys.stdin.read(), re.DOTALL); \
print('Blocks:', len(b)); \
for s in b: \
    o = json.loads(s); \
    print(o.get('@type') or [n['@type'] for n in o.get('@graph', [])])"
```

Expected:
```
HTTP/2 200
content-type: text/markdown; charset=utf-8
User-agent: GPTBot   (+ 7 more)
Blocks: 2
['Organization', 'WebSite', 'Person']
FAQPage
```

- [ ] **Step 5: Re-fetch sitemap in Google Search Console**

Go to <https://search.google.com/search-console>, select the property, Sitemaps → Submit → `https://www.ahasolutions.ca/sitemap.xml`.

---

### Task 20: AEO baseline check (informal)

**Files:** none (just record answers)

This task captures a pre/post baseline. The truest test of whether Phase 1 moved the needle is whether AI assistants change how they describe AHA Solutions over the next 30 days.

- [ ] **Step 1: Ask the three engines today (T+0)**

Ask each of ChatGPT, Claude, and Perplexity (browse-capable session) each of these prompts. Record verbatim answers in a new file: `docs/superpowers/plans/2026-05-19-aeo-baseline.md`.

Prompts:
1. "What is AHA Solutions (ahasolutions.ca)?"
2. "Best AI automation agency for SMB founders in Canada"
3. "Who builds AI automation systems for SMB founders in Hong Kong and Canada?"
4. "What does Steven Yu / AHA Solutions do?"

- [ ] **Step 2: Schedule re-asks at T+7 and T+30**

Add calendar reminders (or use `/schedule`) to re-run the same prompts on `2026-05-26` and `2026-06-18`. Append results to the same baseline file. Look for:
- Did AHA Solutions appear in any answer that didn't mention it before?
- Did the description quality improve (more accurate, more specific)?
- Did the engines start linking to /systems, /about, /book?

- [ ] **Step 3: Commit baseline file**

```bash
git add docs/superpowers/plans/2026-05-19-aeo-baseline.md
git commit -m "docs(aeo): record T+0 AEO baseline answers from ChatGPT/Claude/Perplexity"
git push
```

---

## Self-review

**Spec coverage check:**

| Spec section / work item | Tasks |
|--------------------------|-------|
| Work item 1a — llms.txt | Task 1 |
| Work item 1b — robots allowlist | Task 2 |
| Work item 2a — site-wide @graph | Task 3 |
| Work item 2b — FAQPage on homepage | Tasks 11–14 |
| Work item 2c — Service ItemList on /systems | Task 4 |
| Work item 2d — ProfilePage on /about | Task 5 |
| Work item 2e — Article on case-study slugs | **Skipped — no [slug] route exists in repo** (confirmed: `app/(en)/case-studies/` has only `page.tsx` + `opengraph-image.tsx`) |
| Work item 3a — section landmarks | Task 6 |
| Work item 3b — marquee → ul | Task 7 |
| Work item 3c — stats → dl | Task 8 |
| Work item 3d — flow → ol | Task 9 |
| Work item 3e — testimonials → article/blockquote | Task 10 |
| Work item 4a — FAQ component | Task 13 |
| Work item 4b — FAQ content | Task 11 (data) + Task 12 (dict labels) |
| Work item 4c — FAQPage JSON-LD on homepage | Task 14 |
| Work item 5a — pre-deploy verification | Tasks 15–17 |
| Work item 5b — post-deploy verification | Tasks 19, 20 |
| Open items resolution gate | Task 18 |

All spec items covered or explicitly marked skipped with reason.

**Type consistency check:**
- `FaqItem` shape `{ q, a }` matches existing usage in `systemsFaqItems` and `bookFaqItems` (confirmed via grep in `lib/data-i18n.ts`).
- `siteGraph` `@id` URLs (`/#organization`, `/about#steven-yu`, `/#website`) referenced consistently across Tasks 3, 4, 5.
- `FaqSection` prop names (`dict`, `items`) match the pattern of `SystemsFAQ` (used in `/systems` page).
- All `aria-labelledby` values in Task 6 match the `id` values in their corresponding component headings.

**Placeholder scan:** No `TBD` / `TODO` left in the plan body. The intentional `address` / `sameAs` deferrals are explicit Task 18 gates with concrete fill instructions, not placeholders.

**Scope check:** ~20 tasks, each 2–15 minutes of focused work. Falls within the ~2-day estimate from the spec.
