/**
 * lib/data.ts
 * All static content data for all 4 pages.
 * Extracted from hifi/*.jsx source files.
 */

import type { IconName } from '@/components/primitives/icon';

// ============================================================
// SHARED TYPES
// ============================================================

export interface FlowNode {
  icon: IconName;
  label: string;
  sub?: string;
  accent?: boolean;
}

export interface MetricItem {
  icon: IconName;
  value: string;
  label: string;
}

export interface StatItem {
  v: string;
  l: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

// ============================================================
// HOMEPAGE DATA (from hifi/systems.jsx, hifi/sections.jsx)
// ============================================================

// MetricsStrip
export const metricsItems: MetricItem[] = [
  { icon: 'lightning', value: '80%', label: 'Faster response time (avg)' },
  { icon: 'clock', value: '60s', label: 'Average reply speed' },
  { icon: 'rocket', value: '14d', label: 'Average time to go live' },
  { icon: 'check', value: '40+', label: 'Systems shipped' },
];

// FiveSystems cards
export interface FiveSystemCard {
  n: string;
  title: string;
  sub: string;
  flow: FlowNode[];
}

export const fiveSystemCards: FiveSystemCard[] = [
  {
    n: '01',
    title: 'Never miss a lead again',
    sub: 'Lead Capture & Response',
    flow: [
      { icon: 'user', label: 'Lead' },
      { icon: 'sparkle', label: 'AI Reply', accent: true, sub: '60s' },
      { icon: 'briefcase', label: 'CRM' },
      { icon: 'calendar', label: 'Booking' },
    ],
  },
  {
    n: '02',
    title: 'Turn more leads into customers',
    sub: 'Sales Follow-up System',
    flow: [
      { icon: 'user', label: 'Lead' },
      { icon: 'envelope', label: 'Sequence', accent: true },
      { icon: 'bell', label: 'Follow-up' },
      { icon: 'cash', label: 'Conversion' },
    ],
  },
  {
    n: '03',
    title: 'Eliminate repetitive admin work',
    sub: 'Operations Automation',
    flow: [
      { icon: 'lightning', label: 'Trigger' },
      { icon: 'settings', label: 'Process', accent: true },
      { icon: 'sparkle', label: 'Automation' },
      { icon: 'check', label: 'Done' },
    ],
  },
  {
    n: '04',
    title: 'Onboard clients automatically',
    sub: 'Client Onboarding System',
    flow: [
      { icon: 'cash', label: 'Payment' },
      { icon: 'envelope', label: 'Welcome', accent: true },
      { icon: 'key', label: 'Portal' },
      { icon: 'rocket', label: 'Delivery' },
    ],
  },
  {
    n: '05',
    title: 'Run your entire pipeline on systems',
    sub: 'End-to-End Growth System',
    flow: [
      { icon: 'user', label: 'Lead' },
      { icon: 'cash', label: 'Close', accent: true },
      { icon: 'rocket', label: 'Deliver' },
      { icon: 'sparkle', label: 'Retain' },
    ],
  },
];

// FlowsSection tabs (from sections.jsx)
export interface FlowTabConfig {
  label: string;
  icon: IconName;
  nodes: FlowNode[];
}

export type FlowTabKey = 'lead' | 'sales' | 'ops';

export const flowsData: Record<FlowTabKey, FlowTabConfig> = {
  lead: {
    label: 'Lead System',
    icon: 'funnel',
    nodes: [
      { icon: 'globe', label: 'Ad' },
      { icon: 'docs', label: 'Landing Page' },
      { icon: 'sparkle', label: 'AI Chat', accent: true, sub: '60s' },
      { icon: 'briefcase', label: 'CRM' },
      { icon: 'calendar', label: 'Booking' },
    ],
  },
  sales: {
    label: 'Sales System',
    icon: 'cash',
    nodes: [
      { icon: 'user', label: 'Lead' },
      { icon: 'check', label: 'Qualification' },
      { icon: 'envelope', label: 'Follow-up', accent: true },
      { icon: 'bell', label: 'Nurture' },
      { icon: 'cash', label: 'Close' },
    ],
  },
  ops: {
    label: 'Ops System',
    icon: 'settings',
    nodes: [
      { icon: 'lightning', label: 'Trigger' },
      { icon: 'docs', label: 'Task' },
      { icon: 'settings', label: 'Automation', accent: true },
      { icon: 'sparkle', label: 'Process' },
      { icon: 'check', label: 'Completion' },
    ],
  },
};

// CaseStudy before/after (from sections.jsx)
export const caseStudyBefore: string[] = [
  'Manual replies took 24+ hours',
  'Leads went cold',
  'Lost revenue and trust',
];

export const caseStudyAfter: string[] = [
  'AI replies in under 60 seconds',
  'Leads nurtured automatically',
  'More bookings. Higher conversion.',
];

// Testimonials
export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  initial: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: 'Our content creation costs have dropped significantly. The system generates multilingual content while maintaining our brand voice, and the AI templates for educational consulting enhance our workflow efficiency.',
    name: 'Maggie Chan',
    title: 'CEO',
    company: 'Maple Study Link',
    initial: 'M',
  },
  {
    quote: 'The AI system delivered immediate results for our local marketing efforts. With automated SEO optimization and multi-platform content distribution, we\'re reaching more potential customers than ever.',
    name: 'Kenet Chan',
    title: 'Founder',
    company: 'Tint Wrap Auto',
    initial: 'K',
  },
  {
    quote: 'The system has transformed our lead generation workflow completely. What used to take days now happens automatically across all our platforms.',
    name: 'Benjamin Chau',
    title: 'Business Owner',
    company: 'Wine Century HK',
    initial: 'B',
  },
];

// HowItWorks steps (from sections.jsx)
export interface HowItWorksStep {
  n: string;
  label: string;
  icon: IconName;
  title: string;
  desc: string;
}

export const howItWorksSteps: HowItWorksStep[] = [
  {
    n: '01',
    label: 'Map',
    icon: 'funnel',
    title: 'We map your workflow',
    desc: 'We analyze your current workflow and find where leads and time are being lost.',
  },
  {
    n: '02',
    label: 'Build',
    icon: 'settings',
    title: 'We build your systems',
    desc: 'We design and implement your automation systems — tested, documented, live in ~14 days.',
  },
  {
    n: '03',
    label: 'Run',
    icon: 'rocket',
    title: 'Your business runs itself',
    desc: 'Your business operates with minimal manual input. We monitor, refine, and optimize over time.',
  },
];

// FounderBlock stats (from sections.jsx)
export const founderStats: StatItem[] = [
  { v: '15+', l: 'Years leadership' },
  { v: '40+', l: 'Systems shipped' },
  { v: '1', l: 'Public CEO role' },
];

// LogosStrip (from sections.jsx)
export const logosData: string[] = [
  'GoHighLevel', 'Airtable', 'Make', 'N8N', 'Claude', 'WordPress', 'Wix', 'HeyGen', 'Zapier',
];

// ============================================================
// SYSTEMS PAGE DATA (from hifi/systems-page.jsx)
// ============================================================

export interface SystemBlockData {
  id: string;
  n: string;
  title: string;
  subtitle: string;
  desc: string;
  flow: FlowNode[];
  flowTag?: string;
  replaces: string[];
  outcomes: string[];
  popular?: boolean;
  emphasis?: boolean;
}

export const systemBlocks: SystemBlockData[] = [
  {
    id: 's1',
    n: '01',
    subtitle: 'Lead Capture & Response',
    title: 'Never miss a lead again',
    desc: 'Instantly captures and responds to inbound leads from your site, ads, or forms — in under a minute, every time.',
    popular: true,
    emphasis: true,
    flowTag: 'Typical service business pipeline',
    flow: [
      { icon: 'lightning', label: 'Ad' },
      { icon: 'globe', label: 'Landing Page' },
      { icon: 'sparkle', label: 'AI Chat', accent: true, sub: '60s' },
      { icon: 'check', label: 'Qualify' },
      { icon: 'calendar', label: 'Calendar' },
      { icon: 'user', label: 'Discovery Call' },
    ],
    replaces: [
      'Leads sitting untouched for hours while they shop around',
      'Ad-spend you already paid for going to the floor',
      'Prospects going cold before anyone on your team sees them',
    ],
    outcomes: [
      'Replies in under 60 seconds — 24/7',
      'Zero inbound leads left unqualified',
      'More booked calls without adding a BDR',
    ],
  },
  {
    id: 's2',
    n: '02',
    subtitle: 'Sales Follow-up System',
    title: 'Turn more leads into customers',
    emphasis: true,
    desc: "Automates the follow-up sequence so warm leads keep moving instead of going cold in someone's inbox.",
    flow: [
      { icon: 'user', label: 'Lead' },
      { icon: 'envelope', label: 'Sequence', accent: true },
      { icon: 'bell', label: 'Reminder' },
      { icon: 'calendar', label: 'Book Call' },
      { icon: 'cash', label: 'Close' },
    ],
    replaces: [
      '"I\'ll follow up tomorrow" that turns into next week',
      'Warm leads going dark because no one chased them',
      'Reps re-pitching the same person from scratch',
    ],
    outcomes: [
      '3–5x more replies on stalled conversations',
      'Meetings booked while your team sleeps',
      'A pipeline that moves without constant nudging',
    ],
  },
  {
    id: 's3',
    n: '03',
    subtitle: 'Operations Automation',
    title: 'Eliminate repetitive admin work',
    desc: 'Automates repetitive internal tasks so your team spends less time on busywork and more on actual work.',
    flow: [
      { icon: 'lightning', label: 'Trigger' },
      { icon: 'settings', label: 'Workflow', accent: true },
      { icon: 'docs', label: 'Update' },
      { icon: 'bell', label: 'Notify' },
      { icon: 'check', label: 'Done' },
    ],
    replaces: [
      'Hours of copy-paste between tools every week',
      'Manual status updates that break the second someone forgets',
      'Tiny errors that turn into big refunds',
    ],
    outcomes: [
      '10–20 hours/week back per team member',
      'Clean handoffs — no "who owns this?" slack threads',
      'Fewer errors, faster turnaround',
    ],
  },
  {
    id: 's4',
    n: '04',
    subtitle: 'Client Onboarding System',
    title: 'Onboard clients automatically',
    desc: 'Delivers a smooth onboarding experience from payment to kickoff — without the manual hand-holding.',
    flow: [
      { icon: 'cash', label: 'Payment' },
      { icon: 'envelope', label: 'Welcome', accent: true },
      { icon: 'docs', label: 'Intake' },
      { icon: 'key', label: 'Account Setup' },
      { icon: 'rocket', label: 'Kickoff' },
    ],
    replaces: [
      'New clients waiting 3–5 days to hear back after paying',
      'Intake info scattered across emails, forms, and DMs',
      'Kickoff calls where nothing is actually ready',
    ],
    outcomes: [
      'Same-day welcome, same-week kickoff',
      'Every intake in one place your team can actually use',
      'First impressions that match what you sold',
    ],
  },
  {
    id: 's5',
    n: '05',
    subtitle: 'End-to-End Growth System',
    title: 'Run your whole pipeline on systems',
    desc: 'Connects lead capture, sales, onboarding, and delivery into one operating flow you can actually see end-to-end.',
    flow: [
      { icon: 'user', label: 'Lead' },
      { icon: 'check', label: 'Qualify' },
      { icon: 'calendar', label: 'Book' },
      { icon: 'cash', label: 'Close', accent: true },
      { icon: 'briefcase', label: 'Onboard' },
      { icon: 'rocket', label: 'Deliver' },
    ],
    replaces: [
      'Five disconnected tools held together by a spreadsheet',
      'Handoffs that die between sales and delivery',
      'A pipeline only your ops lead understands',
    ],
    outcomes: [
      'Full visibility from first click to delivered work',
      'Scaling without hiring another ops person',
      "A business that runs the same on the owner's day off",
    ],
  },
];

// Systems FAQ
export const systemsFaqItems: FaqItem[] = [
  {
    q: 'Will this replace my team?',
    a: 'No. It removes repetitive work so your team can focus on higher-value tasks.',
  },
  {
    q: 'How long does it take to launch?',
    a: 'Most systems can go live in about 14 days, depending on scope.',
  },
  {
    q: 'What tools do you work with?',
    a: 'We build around your current stack where possible, including CRM, email, forms, and internal workflows.',
  },
  {
    q: 'Do I need everything at once?',
    a: 'No. Most clients start with one high-impact system and expand from there.',
  },
];

// Systems proof stats (SystemsProof section)
export const systemsProofStats: StatItem[] = [
  { v: '80%', l: 'Faster response time' },
  { v: '60s', l: 'Average AI reply' },
  { v: '14d', l: 'Average time to go live' },
];

// Mid-page proof bar stats (MidProofBar)
export const midProofBarStats: StatItem[] = [
  { v: '40+', l: 'Systems shipped' },
  { v: '80%', l: 'Faster response time' },
  { v: '14d', l: 'Average time to go live' },
];

// ============================================================
// ABOUT PAGE DATA (from hifi/about-page.jsx)
// ============================================================

export interface ShiftRow {
  icon: IconName;
  title: string;
  sub: string;
}

export const shiftRows: ShiftRow[] = [
  { icon: 'clock', title: 'Leads come in.', sub: 'But opportunities sit untouched.' },
  { icon: 'user', title: 'Follow-ups are delayed.', sub: 'Warm leads go cold before a reply.' },
  { icon: 'settings', title: 'Operations rely on people.', sub: "Not process. That's where systems fail." },
];

export const whatAhaDoesItems: string[] = [
  'Capture every lead',
  'Reply in under 60 seconds',
  'Follow up automatically',
  'Run operations in the background',
];

export interface HowIThinkItem {
  icon: IconName;
  label: string;
}

export const howIThinkItems: HowIThinkItem[] = [
  { icon: 'funnel', label: 'Where leads are lost' },
  { icon: 'clock', label: 'Where time is wasted' },
  { icon: 'settings', label: 'Where handoffs break' },
];

export interface FounderProofItem {
  icon: IconName;
  label: string;
  sub: string;
}

export const founderProof: FounderProofItem[] = [
  { icon: 'briefcase', label: 'Former CEO', sub: 'public-listed company' },
  { icon: 'user', label: '15+ years', sub: 'operations & leadership' },
  { icon: 'rocket', label: '40+ systems', sub: 'shipped across industries' },
];

export interface DifferentItem {
  icon: IconName;
  title: string;
  sub: string;
}

export const differentItems: DifferentItem[] = [
  {
    icon: 'lightning',
    title: 'Built from real operational experience',
    sub: 'Not theory.',
  },
  {
    icon: 'settings',
    title: 'Designed to replace work',
    sub: 'Not just assist it.',
  },
  {
    icon: 'check',
    title: 'Focused on outcomes',
    sub: 'Not features.',
  },
  {
    icon: 'rocket',
    title: 'Simple systems that actually get used',
    sub: 'By the whole team.',
  },
];

export const aboutProofStats: StatItem[] = [
  { v: '40+', l: 'systems shipped' },
  { v: '80%', l: 'faster response time' },
  { v: '14 days', l: 'to go live' },
];

export const whoThisIsForBullets: string[] = [
  "You're getting leads but response is inconsistent",
  'Your team is buried in repetitive work',
  'Your operations feel messy or manual',
  'You want to scale without hiring more people',
];

// ============================================================
// CASE STUDIES PAGE DATA (from hifi/cases-page.jsx)
// ============================================================

export const casesHeroStats: MetricItem[] = [
  { icon: 'lightning', value: '80%', label: 'faster response time (avg)' },
  { icon: 'envelope', value: '60s', label: 'average AI reply speed' },
  { icon: 'calendar', value: '14 days', label: 'to go live' },
  { icon: 'rocket', value: '40+', label: 'systems shipped' },
];

export interface CaseFilter {
  id: string;
  label: string;
}

export const caseFilters: CaseFilter[] = [
  { id: 'all', label: 'All Case Studies' },
  { id: 'lead', label: 'Lead Systems' },
  { id: 'sales', label: 'Sales Systems' },
  { id: 'ops', label: 'Operations Systems' },
  { id: 'education', label: 'Education' },
  { id: 'service', label: 'Service Businesses' },
];

export interface CaseResult {
  v: string;
  label: string;
}

export interface CaseMeta {
  k: string;
  v: string;
}

export interface CaseStudyData {
  id: string;
  category: string;
  systemLabel: string;
  cat: string[];
  headline: string;
  context: string;
  problems: string[];
  meta: CaseMeta[];
  flow: FlowNode[];
  results: CaseResult[];
  hero?: boolean;
}

export const caseStudies: CaseStudyData[] = [
  {
    id: 'c1',
    category: 'lead',
    systemLabel: 'Lead Capture & Response System',
    cat: ['lead'],
    headline: 'From 24-hour replies to under 60 seconds.',
    context:
      'An education consulting company with strong inbound lead volume but slow response times was losing high-intent prospects to faster competitors.',
    problems: [
      'Leads sitting untouched for hours',
      'Prospects going cold before a reply',
      'Paying for traffic that never converts',
    ],
    meta: [
      { k: 'Industry', v: 'Education Consulting' },
      { k: 'Team Size', v: '15' },
      { k: 'Timeline', v: '14 days' },
    ],
    flow: [
      { icon: 'globe', label: 'Ad / Landing' },
      { icon: 'sparkle', label: 'AI Chat', sub: '<60s', accent: true },
      { icon: 'check', label: 'Qualify' },
      { icon: 'briefcase', label: 'CRM' },
      { icon: 'calendar', label: 'Book Call' },
    ],
    results: [
      { v: '80%', label: 'faster response time (24h → <60s)' },
      { v: '2×', label: 'more booked calls (same traffic)' },
      { v: '14 days', label: 'to go live' },
    ],
    hero: true,
  },
  {
    id: 'c2',
    category: 'sales',
    systemLabel: 'Sales Follow-Up System',
    cat: ['sales'],
    headline: 'Stalled pipeline, now closing 2.3× more meetings.',
    context:
      'An automotive services company had strong inquiry volume but lost most warm leads in the silent week after the first call.',
    problems: [
      '"I\'ll follow up tomorrow" turning into next week',
      "Warm leads going dark in someone's inbox",
      'Reps re-pitching the same prospect from scratch',
    ],
    meta: [
      { k: 'Industry', v: 'Automotive Services' },
      { k: 'Team Size', v: '22' },
      { k: 'Timeline', v: '16 days' },
    ],
    flow: [
      { icon: 'user', label: 'New Lead' },
      { icon: 'envelope', label: 'Sequence', accent: true },
      { icon: 'bell', label: 'Reminder' },
      { icon: 'calendar', label: 'Book Meeting' },
      { icon: 'cash', label: 'Deal Won' },
    ],
    results: [
      { v: '2.3×', label: 'more qualified meetings' },
      { v: '43%', label: 'reply rate on stalled deals' },
      { v: '70%', label: 'less manual follow-up work' },
    ],
  },
  {
    id: 'c3',
    category: 'ops',
    systemLabel: 'Operations Automation System',
    cat: ['ops', 'service'],
    headline: "20+ hours a week, back in the team's calendar.",
    context:
      'A retail and e-commerce company was burning a full workday per person on manual reporting, data pulls, and client updates.',
    problems: [
      'Same data re-entered across four tools every week',
      'Reports built from scratch every Monday morning',
      'Client questions sitting in inboxes for days',
    ],
    meta: [
      { k: 'Industry', v: 'Retail & E-commerce' },
      { k: 'Team Size', v: '8' },
      { k: 'Timeline', v: '10 days' },
    ],
    flow: [
      { icon: 'docs', label: 'Data Sources', sub: 'GA4·Ads·CRM' },
      { icon: 'settings', label: 'Auto Pull', accent: true },
      { icon: 'docs', label: 'Report Gen' },
      { icon: 'briefcase', label: 'Dashboard' },
      { icon: 'rocket', label: 'Auto Deliver' },
    ],
    results: [
      { v: '20+', label: 'hours saved per week' },
      { v: '100%', label: 'delivery on schedule' },
      { v: '0', label: 'manual reports needed' },
    ],
  },
];
