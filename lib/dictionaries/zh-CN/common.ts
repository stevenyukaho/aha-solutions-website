import type { NavDict, FooterDict, CommonDict } from '../types';

const nav: NavDict = {
  systems: '系统',
  caseStudies: '案例研究',
  about: '关于我们',
  cta: '预约免费流程审查',
};

const footer: FooterDict = {
  brandDescription: '我们为需要在不增加人手的情况下扩展业务的创始人构建 AI 系统，取代繁琐工作。',
  sectionSystems: '系统',
  sectionResources: '资源',
  sectionCompany: '公司',
  leadSystems: '潜客系统',
  salesSystems: '销售系统',
  operationsSystems: '运营系统',
  aiSystems: 'AI 系统',
  caseStudies: '案例研究',
  bookACall: '预约通话',
  about: '关于我们',
  ourProcess: '我们的流程',
  contact: '联系我们',
  whatsappLabel: 'WhatsApp（国际）',
  copyright: '© 2026 AHA Solutions Inc. 版权所有。',
  privacyPolicy: '隐私政策',
  termsAndConditions: '使用条款',
};

const common: CommonDict = {
  bookAuditCta: '预约免费流程审查',
  auditSubtext: '免费 30 分钟审查。不推销。没有压力。',
};

const zhCNCommon = { nav, footer, common };
export default zhCNCommon;
