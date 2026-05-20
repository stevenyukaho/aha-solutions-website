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
