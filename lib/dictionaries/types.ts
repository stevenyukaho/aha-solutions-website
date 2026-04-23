/**
 * Dictionary type — the shared contract between the dictionaries agent
 * and the components agent.
 *
 * Every key is REQUIRED (no `string | undefined`).
 * Usage in JSX: dict.home.hero.h1Line1, dict.nav.systems, etc.
 */

export interface NavDict {
  systems: string;
  caseStudies: string;
  about: string;
  cta: string;
}

export interface FooterDict {
  brandDescription: string;
  /** Section titles rendered as uppercase column headers */
  sectionSystems: string;
  sectionResources: string;
  sectionCompany: string;
  /** Footer nav item labels */
  leadSystems: string;
  salesSystems: string;
  operationsSystems: string;
  aiSystems: string;
  caseStudies: string;
  bookACall: string;
  about: string;
  ourProcess: string;
  contact: string;
  /** Contact row */
  whatsappLabel: string;
  /** Bottom bar */
  copyright: string;
  privacyPolicy: string;
  termsAndConditions: string;
}

export interface CommonDict {
  bookAuditCta: string;
  auditSubtext: string;
}

// ── Home page dictionaries ────────────────────────────────────────────────────

export interface HeroDict {
  chip: string;
  h1Line1: string;
  h1Line2: string;
  h1Underline: string;
  h1Line2End: string;
  subtitle: string;
  ctaPrimary: string;
  ctaGhost: string;
  ctaSub: string;
  /** Proof strip items — 3 entries */
  proof1: string;
  proof2: string;
  proof3: string;
}

export interface FiveSystemsDict {
  eyebrow: string;
  h2: string;
  cta: string;
}

export interface HowItWorksDict {
  eyebrow: string;
  /** The three phase labels rendered as: Map → Build → Run */
  phaseMap: string;
  phaseSeparator: string;
  phaseBuild: string;
  phaseRun: string;
}

export interface FlowsSectionDict {
  eyebrow: string;
  h2: string;
  bottomMono: string;
}

export interface CaseStudyDict {
  eyebrow: string;
  h2: string;
  beforeLabel: string;
  afterLabel: string;
  stat: string;
  statLabel: string;
  testimonialsEyebrow: string;
  testimonialsH2: string;
}

export interface FounderBlockDict {
  eyebrow: string;
  h2: string;
  bio1: string;
  bio2: string;
}

export interface FinalCtaDict {
  h2: string;
  description: string;
  cta: string;
  mono: string;
}

export interface LogosStripDict {
  eyebrow: string;
  partnershipLabel: string;
  partnershipName: string;
}

export interface HomeDict {
  hero: HeroDict;
  fiveSystems: FiveSystemsDict;
  howItWorks: HowItWorksDict;
  flowsSection: FlowsSectionDict;
  caseStudy: CaseStudyDict;
  founderBlock: FounderBlockDict;
  finalCta: FinalCtaDict;
  logosStrip: LogosStripDict;
}

// ── Top-level Dictionary (merged from home + common files) ────────────────────

export interface Dictionary {
  nav: NavDict;
  footer: FooterDict;
  common: CommonDict;
  home: HomeDict;
}
