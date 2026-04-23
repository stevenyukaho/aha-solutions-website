import type { NavDict, FooterDict, CommonDict } from '../types';

const nav: NavDict = {
  systems: 'Systems',
  caseStudies: 'Case Studies',
  about: 'About',
  cta: 'Book a free workflow audit',
};

const footer: FooterDict = {
  brandDescription:
    'We build AI systems that replace work for founders who need to scale without hiring.',
  sectionSystems: 'Systems',
  sectionResources: 'Resources',
  sectionCompany: 'Company',
  leadSystems: 'Lead Systems',
  salesSystems: 'Sales Systems',
  operationsSystems: 'Operations Systems',
  aiSystems: 'AI Systems',
  caseStudies: 'Case Studies',
  bookACall: 'Book a Call',
  about: 'About',
  ourProcess: 'Our Process',
  contact: 'Contact',
  whatsappLabel: "WhatsApp (Int'l)",
  copyright: '© 2026 AHA Solutions Inc. All rights reserved.',
  privacyPolicy: 'Privacy Policy',
  termsAndConditions: 'Terms & Conditions',
};

const common: CommonDict = {
  bookAuditCta: 'Book a free workflow audit',
  auditSubtext: 'Free 30-min audit. No pitch. No pressure.',
};

const enCommon = { nav, footer, common };
export default enCommon;
