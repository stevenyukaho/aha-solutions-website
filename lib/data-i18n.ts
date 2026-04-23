/**
 * lib/data-i18n.ts
 * Locale-aware data arrays for homepage components.
 * Returns translated versions of all data arrays from lib/data.ts.
 */

import type { Locale } from './i18n';
import type {
  MetricItem,
  FiveSystemCard,
  FlowTabConfig,
  FlowTabKey,
  Testimonial,
  StatItem,
  HowItWorksStep,
} from './data';

// ============================================================
// ENGLISH DATA (mirrors lib/data.ts exactly)
// ============================================================

const enMetricsItems: MetricItem[] = [
  { icon: 'lightning', value: '80%', label: 'Faster response time (avg)' },
  { icon: 'clock', value: '60s', label: 'Average reply speed' },
  { icon: 'rocket', value: '14d', label: 'Average time to go live' },
  { icon: 'check', value: '40+', label: 'Systems shipped' },
];

const enFiveSystemCards: FiveSystemCard[] = [
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

const enHowItWorksSteps: HowItWorksStep[] = [
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

const enFlowsData: Record<FlowTabKey, FlowTabConfig> = {
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

const enCaseStudyBefore: string[] = [
  'Manual replies took 24+ hours',
  'Leads went cold',
  'Lost revenue and trust',
];

const enCaseStudyAfter: string[] = [
  'AI replies in under 60 seconds',
  'Leads nurtured automatically',
  'More bookings. Higher conversion.',
];

const enTestimonials: Testimonial[] = [
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

const enFounderStats: StatItem[] = [
  { v: '15+', l: 'Years leadership' },
  { v: '40+', l: 'Systems shipped' },
  { v: '1', l: 'Public CEO role' },
];

// ============================================================
// TRADITIONAL CHINESE DATA (zh-TW) — Hong Kong style
// ============================================================

const zhTWMetricsItems: MetricItem[] = [
  { icon: 'lightning', value: '80%', label: '平均回覆速度提升' },
  { icon: 'clock', value: '60s', label: '平均回覆時間' },
  { icon: 'rocket', value: '14d', label: '平均上線天數' },
  { icon: 'check', value: '40+', label: '已部署系統數量' },
];

const zhTWFiveSystemCards: FiveSystemCard[] = [
  {
    n: '01',
    title: '不再錯失任何潛在客戶',
    sub: '潛客捕捉與即時回覆',
    flow: [
      { icon: 'user', label: '潛客' },
      { icon: 'sparkle', label: 'AI 回覆', accent: true, sub: '60s' },
      { icon: 'briefcase', label: 'CRM' },
      { icon: 'calendar', label: '預約' },
    ],
  },
  {
    n: '02',
    title: '將更多潛客轉化為客戶',
    sub: '銷售跟進系統',
    flow: [
      { icon: 'user', label: '潛客' },
      { icon: 'envelope', label: '序列', accent: true },
      { icon: 'bell', label: '跟進' },
      { icon: 'cash', label: '成交' },
    ],
  },
  {
    n: '03',
    title: '消除重複性行政工作',
    sub: '營運自動化',
    flow: [
      { icon: 'lightning', label: '觸發' },
      { icon: 'settings', label: '流程', accent: true },
      { icon: 'sparkle', label: '自動化' },
      { icon: 'check', label: '完成' },
    ],
  },
  {
    n: '04',
    title: '自動完成客戶入職',
    sub: '客戶入職系統',
    flow: [
      { icon: 'cash', label: '付款' },
      { icon: 'envelope', label: '歡迎', accent: true },
      { icon: 'key', label: '入口' },
      { icon: 'rocket', label: '交付' },
    ],
  },
  {
    n: '05',
    title: '用系統管理整個業務流程',
    sub: '端到端增長系統',
    flow: [
      { icon: 'user', label: '潛客' },
      { icon: 'cash', label: '成交', accent: true },
      { icon: 'rocket', label: '交付' },
      { icon: 'sparkle', label: '留存' },
    ],
  },
];

const zhTWHowItWorksSteps: HowItWorksStep[] = [
  {
    n: '01',
    label: '分析',
    icon: 'funnel',
    title: '我們分析您的工作流程',
    desc: '深入了解您現有的業務流程，找出潛客流失及時間浪費的關鍵環節。',
  },
  {
    n: '02',
    label: '建立',
    icon: 'settings',
    title: '我們為您建立系統',
    desc: '設計並實施您的自動化系統——經過測試、完整記錄，約 14 天內正式上線。',
  },
  {
    n: '03',
    label: '運行',
    icon: 'rocket',
    title: '您的業務自動運轉',
    desc: '業務以最少人工介入持續運作，我們持續監控、優化並改善系統表現。',
  },
];

const zhTWFlowsData: Record<FlowTabKey, FlowTabConfig> = {
  lead: {
    label: '潛客系統',
    icon: 'funnel',
    nodes: [
      { icon: 'globe', label: '廣告' },
      { icon: 'docs', label: '著陸頁' },
      { icon: 'sparkle', label: 'AI 對話', accent: true, sub: '60s' },
      { icon: 'briefcase', label: 'CRM' },
      { icon: 'calendar', label: '預約' },
    ],
  },
  sales: {
    label: '銷售系統',
    icon: 'cash',
    nodes: [
      { icon: 'user', label: '潛客' },
      { icon: 'check', label: '資格審核' },
      { icon: 'envelope', label: '跟進', accent: true },
      { icon: 'bell', label: '培育' },
      { icon: 'cash', label: '成交' },
    ],
  },
  ops: {
    label: '營運系統',
    icon: 'settings',
    nodes: [
      { icon: 'lightning', label: '觸發' },
      { icon: 'docs', label: '任務' },
      { icon: 'settings', label: '自動化', accent: true },
      { icon: 'sparkle', label: '流程' },
      { icon: 'check', label: '完成' },
    ],
  },
};

const zhTWCaseStudyBefore: string[] = [
  '人工回覆需時 24 小時以上',
  '潛客因等待而流失',
  '損失收入及客戶信任',
];

const zhTWCaseStudyAfter: string[] = [
  'AI 在 60 秒內自動回覆',
  '潛客自動進行培育',
  '更多預約，更高轉化率',
];

const zhTWTestimonials: Testimonial[] = [
  {
    quote: '我們的內容製作成本大幅下降。系統在保持品牌聲音的同時生成多語言內容，AI 模板也顯著提升了教育諮詢的工作效率。',
    name: 'Maggie Chan',
    title: 'CEO',
    company: 'Maple Study Link',
    initial: 'M',
  },
  {
    quote: 'AI 系統為我們的本地行銷帶來了立竿見影的成效。透過自動化 SEO 優化及多平台內容分發，我們觸及的潛在客戶比以往任何時候都多。',
    name: 'Kenet Chan',
    title: 'Founder',
    company: 'Tint Wrap Auto',
    initial: 'K',
  },
  {
    quote: '系統徹底改變了我們的潛客生成流程。以往需要數天才能完成的事，現在在所有平台上自動完成。',
    name: 'Benjamin Chau',
    title: 'Business Owner',
    company: 'Wine Century HK',
    initial: 'B',
  },
];

const zhTWFounderStats: StatItem[] = [
  { v: '15+', l: '年領導經驗' },
  { v: '40+', l: '已部署系統' },
  { v: '1', l: '上市公司行政總裁' },
];

// ============================================================
// SIMPLIFIED CHINESE DATA (zh-CN) — Mainland style
// ============================================================

const zhCNMetricsItems: MetricItem[] = [
  { icon: 'lightning', value: '80%', label: '平均响应速度提升' },
  { icon: 'clock', value: '60s', label: '平均回复时间' },
  { icon: 'rocket', value: '14d', label: '平均上线天数' },
  { icon: 'check', value: '40+', label: '已部署系统数量' },
];

const zhCNFiveSystemCards: FiveSystemCard[] = [
  {
    n: '01',
    title: '不再错失任何潜在客户',
    sub: '潜客捕获与即时回复',
    flow: [
      { icon: 'user', label: '潜客' },
      { icon: 'sparkle', label: 'AI 回复', accent: true, sub: '60s' },
      { icon: 'briefcase', label: 'CRM' },
      { icon: 'calendar', label: '预约' },
    ],
  },
  {
    n: '02',
    title: '将更多潜客转化为客户',
    sub: '销售跟进系统',
    flow: [
      { icon: 'user', label: '潜客' },
      { icon: 'envelope', label: '序列', accent: true },
      { icon: 'bell', label: '跟进' },
      { icon: 'cash', label: '成交' },
    ],
  },
  {
    n: '03',
    title: '消除重复性行政工作',
    sub: '运营自动化',
    flow: [
      { icon: 'lightning', label: '触发' },
      { icon: 'settings', label: '流程', accent: true },
      { icon: 'sparkle', label: '自动化' },
      { icon: 'check', label: '完成' },
    ],
  },
  {
    n: '04',
    title: '自动完成客户入职',
    sub: '客户入职系统',
    flow: [
      { icon: 'cash', label: '付款' },
      { icon: 'envelope', label: '欢迎', accent: true },
      { icon: 'key', label: '门户' },
      { icon: 'rocket', label: '交付' },
    ],
  },
  {
    n: '05',
    title: '用系统管理整个业务流程',
    sub: '端到端增长系统',
    flow: [
      { icon: 'user', label: '潜客' },
      { icon: 'cash', label: '成交', accent: true },
      { icon: 'rocket', label: '交付' },
      { icon: 'sparkle', label: '留存' },
    ],
  },
];

const zhCNHowItWorksSteps: HowItWorksStep[] = [
  {
    n: '01',
    label: '分析',
    icon: 'funnel',
    title: '我们分析您的工作流程',
    desc: '深入了解您现有的业务流程，找出潜客流失及时间浪费的关键环节。',
  },
  {
    n: '02',
    label: '建立',
    icon: 'settings',
    title: '我们为您建立系统',
    desc: '设计并实施您的自动化系统——经过测试、完整记录，约 14 天内正式上线。',
  },
  {
    n: '03',
    label: '运行',
    icon: 'rocket',
    title: '您的业务自动运转',
    desc: '业务以最少人工介入持续运作，我们持续监控、优化并改善系统表现。',
  },
];

const zhCNFlowsData: Record<FlowTabKey, FlowTabConfig> = {
  lead: {
    label: '潜客系统',
    icon: 'funnel',
    nodes: [
      { icon: 'globe', label: '广告' },
      { icon: 'docs', label: '落地页' },
      { icon: 'sparkle', label: 'AI 对话', accent: true, sub: '60s' },
      { icon: 'briefcase', label: 'CRM' },
      { icon: 'calendar', label: '预约' },
    ],
  },
  sales: {
    label: '销售系统',
    icon: 'cash',
    nodes: [
      { icon: 'user', label: '潜客' },
      { icon: 'check', label: '资格审核' },
      { icon: 'envelope', label: '跟进', accent: true },
      { icon: 'bell', label: '培育' },
      { icon: 'cash', label: '成交' },
    ],
  },
  ops: {
    label: '运营系统',
    icon: 'settings',
    nodes: [
      { icon: 'lightning', label: '触发' },
      { icon: 'docs', label: '任务' },
      { icon: 'settings', label: '自动化', accent: true },
      { icon: 'sparkle', label: '流程' },
      { icon: 'check', label: '完成' },
    ],
  },
};

const zhCNCaseStudyBefore: string[] = [
  '人工回复需时 24 小时以上',
  '潜客因等待而流失',
  '损失收入及客户信任',
];

const zhCNCaseStudyAfter: string[] = [
  'AI 在 60 秒内自动回复',
  '潜客自动进行培育',
  '更多预约，更高转化率',
];

const zhCNTestimonials: Testimonial[] = [
  {
    quote: '我们的内容制作成本大幅下降。系统在保持品牌声音的同时生成多语言内容，AI 模板也显著提升了教育咨询的工作效率。',
    name: 'Maggie Chan',
    title: 'CEO',
    company: 'Maple Study Link',
    initial: 'M',
  },
  {
    quote: 'AI 系统为我们的本地营销带来了立竿见影的成效。通过自动化 SEO 优化及多平台内容分发，我们触达的潜在客户比以往任何时候都多。',
    name: 'Kenet Chan',
    title: 'Founder',
    company: 'Tint Wrap Auto',
    initial: 'K',
  },
  {
    quote: '系统彻底改变了我们的潜客生成流程。以往需要数天才能完成的事，现在在所有平台上自动完成。',
    name: 'Benjamin Chau',
    title: 'Business Owner',
    company: 'Wine Century HK',
    initial: 'B',
  },
];

const zhCNFounderStats: StatItem[] = [
  { v: '15+', l: '年领导经验' },
  { v: '40+', l: '已部署系统' },
  { v: '1', l: '上市公司首席执行官' },
];

// ============================================================
// HERO DIAGRAM LABELS
// ============================================================

export interface HeroDiagramLabels {
  liveSystem: string;
  online: string;
  adWebsite: string;
  leadSub: string;
  aiAgent: string;
  aiAgentSub: string;
  customer: string;
  returnSub: string;
  crm: string;
  captureSub: string;
  bookedCall: string;
  demoSub: string;
  automatedFollowUp: string;
  emailSmsSub: string;
}

const enHeroDiagramLabels: HeroDiagramLabels = {
  liveSystem: 'LIVE SYSTEM · AHA-ROUTER',
  online: '● ONLINE',
  adWebsite: 'Ad / Website',
  leadSub: 'LEAD',
  aiAgent: 'AI Agent',
  aiAgentSub: 'INSTANT REPLY · <60s',
  customer: 'Customer',
  returnSub: 'RETURN',
  crm: 'CRM',
  captureSub: 'CAPTURE',
  bookedCall: 'Booked Call',
  demoSub: 'DEMO',
  automatedFollowUp: 'Automated Follow-up',
  emailSmsSub: 'EMAIL · SMS',
};

const zhTWHeroDiagramLabels: HeroDiagramLabels = {
  liveSystem: '即時系統 · AHA-ROUTER',
  online: '● 運行中',
  adWebsite: '廣告 / 網站',
  leadSub: '潛客',
  aiAgent: 'AI 智能助手',
  aiAgentSub: '即時回覆 · <60s',
  customer: '客戶',
  returnSub: '回訪',
  crm: 'CRM',
  captureSub: '記錄',
  bookedCall: '已預約通話',
  demoSub: '示範',
  automatedFollowUp: '自動跟進',
  emailSmsSub: '電郵 · SMS',
};

const zhCNHeroDiagramLabels: HeroDiagramLabels = {
  liveSystem: '实时系统 · AHA-ROUTER',
  online: '● 运行中',
  adWebsite: '广告 / 网站',
  leadSub: '潜客',
  aiAgent: 'AI 智能助手',
  aiAgentSub: '即时回复 · <60s',
  customer: '客户',
  returnSub: '回访',
  crm: 'CRM',
  captureSub: '记录',
  bookedCall: '已预约通话',
  demoSub: '示范',
  automatedFollowUp: '自动跟进',
  emailSmsSub: '邮件 · SMS',
};

// ============================================================
// LOCALISED DATA BUNDLE
// ============================================================

export interface LocalizedData {
  metricsItems: MetricItem[];
  fiveSystemCards: FiveSystemCard[];
  howItWorksSteps: HowItWorksStep[];
  flowsData: Record<FlowTabKey, FlowTabConfig>;
  caseStudyBefore: string[];
  caseStudyAfter: string[];
  testimonials: Testimonial[];
  founderStats: StatItem[];
  heroDiagram: HeroDiagramLabels;
}

export function getLocalizedData(locale: Locale): LocalizedData {
  if (locale === 'zh-TW') {
    return {
      metricsItems: zhTWMetricsItems,
      fiveSystemCards: zhTWFiveSystemCards,
      howItWorksSteps: zhTWHowItWorksSteps,
      flowsData: zhTWFlowsData,
      caseStudyBefore: zhTWCaseStudyBefore,
      caseStudyAfter: zhTWCaseStudyAfter,
      testimonials: zhTWTestimonials,
      founderStats: zhTWFounderStats,
      heroDiagram: zhTWHeroDiagramLabels,
    };
  }

  if (locale === 'zh-CN') {
    return {
      metricsItems: zhCNMetricsItems,
      fiveSystemCards: zhCNFiveSystemCards,
      howItWorksSteps: zhCNHowItWorksSteps,
      flowsData: zhCNFlowsData,
      caseStudyBefore: zhCNCaseStudyBefore,
      caseStudyAfter: zhCNCaseStudyAfter,
      testimonials: zhCNTestimonials,
      founderStats: zhCNFounderStats,
      heroDiagram: zhCNHeroDiagramLabels,
    };
  }

  // Default: English
  return {
    metricsItems: enMetricsItems,
    fiveSystemCards: enFiveSystemCards,
    howItWorksSteps: enHowItWorksSteps,
    flowsData: enFlowsData,
    caseStudyBefore: enCaseStudyBefore,
    caseStudyAfter: enCaseStudyAfter,
    testimonials: enTestimonials,
    founderStats: enFounderStats,
    heroDiagram: enHeroDiagramLabels,
  };
}
