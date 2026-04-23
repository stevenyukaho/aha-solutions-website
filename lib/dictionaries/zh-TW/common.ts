import type { NavDict, FooterDict, CommonDict } from '../types';

const nav: NavDict = {
  systems: '系統',
  caseStudies: '案例研究',
  about: '關於我們',
  cta: '預約免費流程審查',
};

const footer: FooterDict = {
  brandDescription: '我們為需要在不增加人手的情況下擴展業務的創辦人構建 AI 系統，取代繁瑣工作。',
  sectionSystems: '系統',
  sectionResources: '資源',
  sectionCompany: '公司',
  leadSystems: '潛客系統',
  salesSystems: '銷售系統',
  operationsSystems: '營運系統',
  aiSystems: 'AI 系統',
  caseStudies: '案例研究',
  bookACall: '預約通話',
  about: '關於我們',
  ourProcess: '我們的流程',
  contact: '聯絡我們',
  whatsappLabel: 'WhatsApp（國際）',
  copyright: '© 2026 AHA Solutions Inc. 版權所有。',
  privacyPolicy: '隱私政策',
  termsAndConditions: '使用條款',
};

const common: CommonDict = {
  bookAuditCta: '預約免費流程審查',
  auditSubtext: '免費 30 分鐘審查。不推銷。沒有壓力。',
};

const zhTWCommon = { nav, footer, common };
export default zhTWCommon;
