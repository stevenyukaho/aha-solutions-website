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
  SystemBlockData,
  FaqItem,
  ShiftRow,
  HowIThinkItem,
  FounderProofItem,
  DifferentItem,
  CaseFilter,
  CaseStudyData,
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
// SYSTEMS PAGE DATA (locale-aware)
// ============================================================

const enSystemBlocks: SystemBlockData[] = [
  {
    id: 's1', n: '01', subtitle: 'Lead Capture & Response',
    title: 'Never miss a lead again',
    desc: 'Instantly captures and responds to inbound leads from your site, ads, or forms — in under a minute, every time.',
    popular: true, emphasis: true, flowTag: 'Typical service business pipeline',
    flow: [
      { icon: 'lightning', label: 'Ad' }, { icon: 'globe', label: 'Landing Page' },
      { icon: 'sparkle', label: 'AI Chat', accent: true, sub: '60s' },
      { icon: 'check', label: 'Qualify' }, { icon: 'calendar', label: 'Calendar' },
      { icon: 'user', label: 'Discovery Call' },
    ],
    replaces: ['Leads sitting untouched for hours while they shop around', 'Ad-spend you already paid for going to the floor', 'Prospects going cold before anyone on your team sees them'],
    outcomes: ['Replies in under 60 seconds — 24/7', 'Zero inbound leads left unqualified', 'More booked calls without adding a BDR'],
  },
  {
    id: 's2', n: '02', subtitle: 'Sales Follow-up System',
    title: 'Turn more leads into customers', emphasis: true,
    desc: "Automates the follow-up sequence so warm leads keep moving instead of going cold in someone's inbox.",
    flow: [
      { icon: 'user', label: 'Lead' }, { icon: 'envelope', label: 'Sequence', accent: true },
      { icon: 'bell', label: 'Reminder' }, { icon: 'calendar', label: 'Book Call' },
      { icon: 'cash', label: 'Close' },
    ],
    replaces: ['"I\'ll follow up tomorrow" that turns into next week', 'Warm leads going dark because no one chased them', 'Reps re-pitching the same person from scratch'],
    outcomes: ['3–5x more replies on stalled conversations', 'Meetings booked while your team sleeps', 'A pipeline that moves without constant nudging'],
  },
  {
    id: 's3', n: '03', subtitle: 'Operations Automation',
    title: 'Eliminate repetitive admin work',
    desc: 'Automates repetitive internal tasks so your team spends less time on busywork and more on actual work.',
    flow: [
      { icon: 'lightning', label: 'Trigger' }, { icon: 'settings', label: 'Workflow', accent: true },
      { icon: 'docs', label: 'Update' }, { icon: 'bell', label: 'Notify' },
      { icon: 'check', label: 'Done' },
    ],
    replaces: ['Hours of copy-paste between tools every week', 'Manual status updates that break the second someone forgets', 'Tiny errors that turn into big refunds'],
    outcomes: ['10–20 hours/week back per team member', 'Clean handoffs — no "who owns this?" slack threads', 'Fewer errors, faster turnaround'],
  },
  {
    id: 's4', n: '04', subtitle: 'Client Onboarding System',
    title: 'Onboard clients automatically',
    desc: 'Delivers a smooth onboarding experience from payment to kickoff — without the manual hand-holding.',
    flow: [
      { icon: 'cash', label: 'Payment' }, { icon: 'envelope', label: 'Welcome', accent: true },
      { icon: 'docs', label: 'Intake' }, { icon: 'key', label: 'Account Setup' },
      { icon: 'rocket', label: 'Kickoff' },
    ],
    replaces: ['New clients waiting 3–5 days to hear back after paying', 'Intake info scattered across emails, forms, and DMs', 'Kickoff calls where nothing is actually ready'],
    outcomes: ['Same-day welcome, same-week kickoff', 'Every intake in one place your team can actually use', 'First impressions that match what you sold'],
  },
  {
    id: 's5', n: '05', subtitle: 'End-to-End Growth System',
    title: 'Run your whole pipeline on systems',
    desc: 'Connects lead capture, sales, onboarding, and delivery into one operating flow you can actually see end-to-end.',
    flow: [
      { icon: 'user', label: 'Lead' }, { icon: 'check', label: 'Qualify' },
      { icon: 'calendar', label: 'Book' }, { icon: 'cash', label: 'Close', accent: true },
      { icon: 'briefcase', label: 'Onboard' }, { icon: 'rocket', label: 'Deliver' },
    ],
    replaces: ['Five disconnected tools held together by a spreadsheet', 'Handoffs that die between sales and delivery', 'A pipeline only your ops lead understands'],
    outcomes: ['Full visibility from first click to delivered work', 'Scaling without hiring another ops person', "A business that runs the same on the owner's day off"],
  },
];

const enSystemsFaqItems: FaqItem[] = [
  { q: 'Will this replace my team?', a: 'No. It removes repetitive work so your team can focus on higher-value tasks.' },
  { q: 'How long does it take to launch?', a: 'Most systems can go live in about 14 days, depending on scope.' },
  { q: 'What tools do you work with?', a: 'We build around your current stack where possible, including CRM, email, forms, and internal workflows.' },
  { q: 'Do I need everything at once?', a: 'No. Most clients start with one high-impact system and expand from there.' },
];

const enMidProofBarStats: StatItem[] = [
  { v: '40+', l: 'Systems shipped' }, { v: '80%', l: 'Faster response time' }, { v: '14d', l: 'Average time to go live' },
];

const enSystemsProofStats: StatItem[] = [
  { v: '80%', l: 'Faster response time' }, { v: '60s', l: 'Average AI reply' }, { v: '14d', l: 'Average time to go live' },
];

// zh-TW Systems
const zhTWSystemBlocks: SystemBlockData[] = [
  {
    id: 's1', n: '01', subtitle: '潛客捕捉與即時回覆',
    title: '不再錯失任何潛在客戶',
    desc: '自動捕捉並即時回應來自網站、廣告或表單的潛客——每次都在一分鐘內完成。',
    popular: true, emphasis: true, flowTag: '典型服務業務流程',
    flow: [
      { icon: 'lightning', label: '廣告' }, { icon: 'globe', label: '著陸頁' },
      { icon: 'sparkle', label: 'AI 對話', accent: true, sub: '60s' },
      { icon: 'check', label: '篩選' }, { icon: 'calendar', label: '日曆' },
      { icon: 'user', label: '探索通話' },
    ],
    replaces: ['潛客被擱置數小時，同時他們已在比較其他選項', '您已支付的廣告費白白浪費', '潛客在您團隊看到之前就已流失'],
    outcomes: ['全年無休，60 秒內回覆', '零潛客未被篩選', '無需增加 BDR 即可獲得更多預約通話'],
  },
  {
    id: 's2', n: '02', subtitle: '銷售跟進系統',
    title: '將更多潛客轉化為客戶', emphasis: true,
    desc: '自動化跟進序列，讓溫暖的潛客持續推進，而不是在某人的收件箱中冷卻。',
    flow: [
      { icon: 'user', label: '潛客' }, { icon: 'envelope', label: '序列', accent: true },
      { icon: 'bell', label: '提醒' }, { icon: 'calendar', label: '預約通話' },
      { icon: 'cash', label: '成交' },
    ],
    replaces: ['「明天跟進」變成下周', '溫暖的潛客因無人跟進而消失', '銷售人員從頭開始向同一個人推銷'],
    outcomes: ['停滯對話的回覆率提高 3-5 倍', '團隊休息時也能自動預約會議', '無需持續推動的自動流轉管道'],
  },
  {
    id: 's3', n: '03', subtitle: '營運自動化',
    title: '消除重複性行政工作',
    desc: '自動化重複性內部任務，讓您的團隊減少瑣碎工作，專注於真正重要的事。',
    flow: [
      { icon: 'lightning', label: '觸發' }, { icon: 'settings', label: '工作流', accent: true },
      { icon: 'docs', label: '更新' }, { icon: 'bell', label: '通知' },
      { icon: 'check', label: '完成' },
    ],
    replaces: ['每週數小時在工具之間複製貼上', '一旦有人忘記就會中斷的手動狀態更新', '小錯誤演變成大額退款'],
    outcomes: ['每位團隊成員每週節省 10-20 小時', '乾淨的交接——不再有「這是誰負責的？」的 Slack 討論串', '更少錯誤，更快周轉'],
  },
  {
    id: 's4', n: '04', subtitle: '客戶入職系統',
    title: '自動完成客戶入職',
    desc: '從付款到啟動，提供流暢的入職體驗——無需手動引導。',
    flow: [
      { icon: 'cash', label: '付款' }, { icon: 'envelope', label: '歡迎', accent: true },
      { icon: 'docs', label: '資料收集' }, { icon: 'key', label: '帳戶設置' },
      { icon: 'rocket', label: '啟動' },
    ],
    replaces: ['新客戶付款後 3-5 天才收到回覆', '入職資料散落在電郵、表單和私訊中', '啟動通話時什麼都還沒準備好'],
    outcomes: ['當天歡迎，一週內啟動', '所有入職資料集中在團隊可用的地方', '第一印象與您銷售時承諾的一致'],
  },
  {
    id: 's5', n: '05', subtitle: '端到端增長系統',
    title: '用系統管理整條業務流程',
    desc: '將潛客捕捉、銷售、入職和交付連結成一條端到端可視的營運流程。',
    flow: [
      { icon: 'user', label: '潛客' }, { icon: 'check', label: '篩選' },
      { icon: 'calendar', label: '預約' }, { icon: 'cash', label: '成交', accent: true },
      { icon: 'briefcase', label: '入職' }, { icon: 'rocket', label: '交付' },
    ],
    replaces: ['五個互不相連的工具靠一張試算表串聯', '銷售和交付之間的交接經常斷裂', '只有營運主管才懂的管道'],
    outcomes: ['從第一次點擊到交付工作的全面可視化', '無需再僱一個營運人員即可擴展', '老闆休假時業務照常運轉'],
  },
];

const zhTWSystemsFaqItems: FaqItem[] = [
  { q: '這會取代我的團隊嗎？', a: '不會。它消除重複性工作，讓您的團隊能專注於更高價值的任務。' },
  { q: '上線需要多長時間？', a: '大多數系統約 14 天即可上線，具體取決於範圍。' },
  { q: '你們使用什麼工具？', a: '我們盡量圍繞您現有的技術棧構建，包括 CRM、電郵、表單和內部工作流。' },
  { q: '需要一次全部部署嗎？', a: '不需要。大多數客戶從一個高影響力的系統開始，然後逐步擴展。' },
];

const zhTWMidProofBarStats: StatItem[] = [
  { v: '40+', l: '已交付系統' }, { v: '80%', l: '回覆速度提升' }, { v: '14d', l: '平均上線天數' },
];

const zhTWSystemsProofStats: StatItem[] = [
  { v: '80%', l: '回覆速度提升' }, { v: '60s', l: '平均 AI 回覆' }, { v: '14d', l: '平均上線天數' },
];

// zh-CN Systems
const zhCNSystemBlocks: SystemBlockData[] = [
  {
    id: 's1', n: '01', subtitle: '潜客捕获与即时回复',
    title: '不再错失任何潜在客户',
    desc: '自动捕获并即时回应来自网站、广告或表单的潜客——每次都在一分钟内完成。',
    popular: true, emphasis: true, flowTag: '典型服务业务流程',
    flow: [
      { icon: 'lightning', label: '广告' }, { icon: 'globe', label: '落地页' },
      { icon: 'sparkle', label: 'AI 对话', accent: true, sub: '60s' },
      { icon: 'check', label: '筛选' }, { icon: 'calendar', label: '日历' },
      { icon: 'user', label: '探索通话' },
    ],
    replaces: ['潜客被搁置数小时，同时他们已在比较其他选项', '您已支付的广告费白白浪费', '潜客在您团队看到之前就已流失'],
    outcomes: ['全年无休，60 秒内回复', '零潜客未被筛选', '无需增加 BDR 即可获得更多预约通话'],
  },
  {
    id: 's2', n: '02', subtitle: '销售跟进系统',
    title: '将更多潜客转化为客户', emphasis: true,
    desc: '自动化跟进序列，让温暖的潜客持续推进，而不是在某人的收件箱中冷却。',
    flow: [
      { icon: 'user', label: '潜客' }, { icon: 'envelope', label: '序列', accent: true },
      { icon: 'bell', label: '提醒' }, { icon: 'calendar', label: '预约通话' },
      { icon: 'cash', label: '成交' },
    ],
    replaces: ['「明天跟进」变成下周', '温暖的潜客因无人跟进而消失', '销售人员从头开始向同一个人推销'],
    outcomes: ['停滞对话的回复率提高 3-5 倍', '团队休息时也能自动预约会议', '无需持续推动的自动流转管道'],
  },
  {
    id: 's3', n: '03', subtitle: '运营自动化',
    title: '消除重复性行政工作',
    desc: '自动化重复性内部任务，让您的团队减少琐碎工作，专注于真正重要的事。',
    flow: [
      { icon: 'lightning', label: '触发' }, { icon: 'settings', label: '工作流', accent: true },
      { icon: 'docs', label: '更新' }, { icon: 'bell', label: '通知' },
      { icon: 'check', label: '完成' },
    ],
    replaces: ['每周数小时在工具之间复制粘贴', '一旦有人忘记就会中断的手动状态更新', '小错误演变成大额退款'],
    outcomes: ['每位团队成员每周节省 10-20 小时', '干净的交接——不再有「这是谁负责的？」的 Slack 讨论串', '更少错误，更快周转'],
  },
  {
    id: 's4', n: '04', subtitle: '客户入职系统',
    title: '自动完成客户入职',
    desc: '从付款到启动，提供流畅的入职体验——无需手动引导。',
    flow: [
      { icon: 'cash', label: '付款' }, { icon: 'envelope', label: '欢迎', accent: true },
      { icon: 'docs', label: '资料收集' }, { icon: 'key', label: '账户设置' },
      { icon: 'rocket', label: '启动' },
    ],
    replaces: ['新客户付款后 3-5 天才收到回复', '入职资料散落在邮件、表单和私信中', '启动通话时什么都还没准备好'],
    outcomes: ['当天欢迎，一周内启动', '所有入职资料集中在团队可用的地方', '第一印象与您销售时承诺的一致'],
  },
  {
    id: 's5', n: '05', subtitle: '端到端增长系统',
    title: '用系统管理整条业务流程',
    desc: '将潜客捕获、销售、入职和交付连接成一条端到端可视的运营流程。',
    flow: [
      { icon: 'user', label: '潜客' }, { icon: 'check', label: '筛选' },
      { icon: 'calendar', label: '预约' }, { icon: 'cash', label: '成交', accent: true },
      { icon: 'briefcase', label: '入职' }, { icon: 'rocket', label: '交付' },
    ],
    replaces: ['五个互不相连的工具靠一张电子表格串联', '销售和交付之间的交接经常断裂', '只有运营主管才懂的管道'],
    outcomes: ['从第一次点击到交付工作的全面可视化', '无需再雇一个运营人员即可扩展', '老板休假时业务照常运转'],
  },
];

const zhCNSystemsFaqItems: FaqItem[] = [
  { q: '这会取代我的团队吗？', a: '不会。它消除重复性工作，让您的团队能专注于更高价值的任务。' },
  { q: '上线需要多长时间？', a: '大多数系统约 14 天即可上线，具体取决于范围。' },
  { q: '你们使用什么工具？', a: '我们尽量围绕您现有的技术栈构建，包括 CRM、邮件、表单和内部工作流。' },
  { q: '需要一次全部部署吗？', a: '不需要。大多数客户从一个高影响力的系统开始，然后逐步扩展。' },
];

const zhCNMidProofBarStats: StatItem[] = [
  { v: '40+', l: '已交付系统' }, { v: '80%', l: '回复速度提升' }, { v: '14d', l: '平均上线天数' },
];

const zhCNSystemsProofStats: StatItem[] = [
  { v: '80%', l: '回复速度提升' }, { v: '60s', l: '平均 AI 回复' }, { v: '14d', l: '平均上线天数' },
];

// ============================================================
// ABOUT PAGE DATA (locale-aware)
// ============================================================

const enShiftRows: ShiftRow[] = [
  { icon: 'clock', title: 'Leads come in.', sub: 'But opportunities sit untouched.' },
  { icon: 'user', title: 'Follow-ups are delayed.', sub: 'Warm leads go cold before a reply.' },
  { icon: 'settings', title: 'Operations rely on people.', sub: "Not process. That's where systems fail." },
];

const enWhatAhaDoesItems: string[] = ['Capture every lead', 'Reply in under 60 seconds', 'Follow up automatically', 'Run operations in the background'];

const enHowIThinkItems: HowIThinkItem[] = [
  { icon: 'funnel', label: 'Where leads are lost' },
  { icon: 'clock', label: 'Where time is wasted' },
  { icon: 'settings', label: 'Where handoffs break' },
];

const enFounderProof: FounderProofItem[] = [
  { icon: 'briefcase', label: 'Former CEO', sub: 'public-listed company' },
  { icon: 'user', label: '15+ years', sub: 'operations & leadership' },
  { icon: 'rocket', label: '40+ systems', sub: 'shipped across industries' },
];

const enDifferentItems: DifferentItem[] = [
  { icon: 'lightning', title: 'Built from real operational experience', sub: 'Not theory.' },
  { icon: 'settings', title: 'Designed to replace work', sub: 'Not just assist it.' },
  { icon: 'check', title: 'Focused on outcomes', sub: 'Not features.' },
  { icon: 'rocket', title: 'Simple systems that actually get used', sub: 'By the whole team.' },
];

const enAboutProofStats: StatItem[] = [
  { v: '40+', l: 'systems shipped' }, { v: '80%', l: 'faster response time' }, { v: '14 days', l: 'to go live' },
];

const enWhoThisIsForBullets: string[] = [
  "You're getting leads but response is inconsistent",
  'Your team is buried in repetitive work',
  'Your operations feel messy or manual',
  'You want to scale without hiring more people',
];

// zh-TW About
const zhTWShiftRows: ShiftRow[] = [
  { icon: 'clock', title: '潛客進來了。', sub: '但機會一直未被處理。' },
  { icon: 'user', title: '跟進被延遲。', sub: '溫暖的潛客在回覆前就已流失。' },
  { icon: 'settings', title: '營運依賴人力。', sub: '而非流程。系統就是在這裡失敗的。' },
];

const zhTWWhatAhaDoesItems: string[] = ['捕捉每一個潛客', '60 秒內回覆', '自動跟進', '在背景運行營運'];

const zhTWHowIThinkItems: HowIThinkItem[] = [
  { icon: 'funnel', label: '潛客在哪裡流失' },
  { icon: 'clock', label: '時間在哪裡浪費' },
  { icon: 'settings', label: '交接在哪裡斷裂' },
];

const zhTWFounderProof: FounderProofItem[] = [
  { icon: 'briefcase', label: '前 CEO', sub: '上市公司' },
  { icon: 'user', label: '15+ 年', sub: '營運與領導經驗' },
  { icon: 'rocket', label: '40+ 套系統', sub: '跨行業交付' },
];

const zhTWDifferentItems: DifferentItem[] = [
  { icon: 'lightning', title: '源自真實營運經驗', sub: '不是理論。' },
  { icon: 'settings', title: '設計來取代工作', sub: '不只是輔助。' },
  { icon: 'check', title: '專注於成果', sub: '不是功能。' },
  { icon: 'rocket', title: '簡單的系統，全團隊都會用', sub: '真正被採用。' },
];

const zhTWAboutProofStats: StatItem[] = [
  { v: '40+', l: '已交付系統' }, { v: '80%', l: '回覆速度提升' }, { v: '14 天', l: '平均上線' },
];

const zhTWWhoThisIsForBullets: string[] = [
  '您有潛客進來，但回覆不一致',
  '您的團隊被重複性工作淹沒',
  '您的營運感覺混亂或依賴手動',
  '您想在不增加人手的情況下擴展',
];

// zh-CN About
const zhCNShiftRows: ShiftRow[] = [
  { icon: 'clock', title: '潜客进来了。', sub: '但机会一直未被处理。' },
  { icon: 'user', title: '跟进被延迟。', sub: '温暖的潜客在回复前就已流失。' },
  { icon: 'settings', title: '运营依赖人力。', sub: '而非流程。系统就是在这里失败的。' },
];

const zhCNWhatAhaDoesItems: string[] = ['捕获每一个潜客', '60 秒内回复', '自动跟进', '在后台运行运营'];

const zhCNHowIThinkItems: HowIThinkItem[] = [
  { icon: 'funnel', label: '潜客在哪里流失' },
  { icon: 'clock', label: '时间在哪里浪费' },
  { icon: 'settings', label: '交接在哪里断裂' },
];

const zhCNFounderProof: FounderProofItem[] = [
  { icon: 'briefcase', label: '前 CEO', sub: '上市公司' },
  { icon: 'user', label: '15+ 年', sub: '运营与领导经验' },
  { icon: 'rocket', label: '40+ 套系统', sub: '跨行业交付' },
];

const zhCNDifferentItems: DifferentItem[] = [
  { icon: 'lightning', title: '源自真实运营经验', sub: '不是理论。' },
  { icon: 'settings', title: '设计来取代工作', sub: '不只是辅助。' },
  { icon: 'check', title: '专注于成果', sub: '不是功能。' },
  { icon: 'rocket', title: '简单的系统，全团队都会用', sub: '真正被采用。' },
];

const zhCNAboutProofStats: StatItem[] = [
  { v: '40+', l: '已交付系统' }, { v: '80%', l: '回复速度提升' }, { v: '14 天', l: '平均上线' },
];

const zhCNWhoThisIsForBullets: string[] = [
  '您有潜客进来，但回复不一致',
  '您的团队被重复性工作淹没',
  '您的运营感觉混乱或依赖手动',
  '您想在不增加人手的情况下扩展',
];

// ============================================================
// CASES PAGE DATA (locale-aware)
// ============================================================

const enCasesHeroStats: MetricItem[] = [
  { icon: 'lightning', value: '80%', label: 'faster response time (avg)' },
  { icon: 'envelope', value: '60s', label: 'average AI reply speed' },
  { icon: 'calendar', value: '14 days', label: 'to go live' },
  { icon: 'rocket', value: '40+', label: 'systems shipped' },
];

const enCaseFilters: CaseFilter[] = [
  { id: 'all', label: 'All Case Studies' }, { id: 'lead', label: 'Lead Systems' },
  { id: 'sales', label: 'Sales Systems' }, { id: 'ops', label: 'Operations Systems' },
  { id: 'education', label: 'Education' }, { id: 'service', label: 'Service Businesses' },
];

const enCaseStudiesData: CaseStudyData[] = [
  {
    id: 'c1', category: 'lead', systemLabel: 'Lead Capture & Response System', cat: ['lead'],
    headline: 'From 24-hour replies to under 60 seconds.',
    context: 'An education consulting company with strong inbound lead volume but slow response times was losing high-intent prospects to faster competitors.',
    problems: ['Leads sitting untouched for hours', 'Prospects going cold before a reply', 'Paying for traffic that never converts'],
    meta: [{ k: 'Industry', v: 'Education Consulting' }, { k: 'Team Size', v: '15' }, { k: 'Timeline', v: '14 days' }],
    flow: [
      { icon: 'globe', label: 'Ad / Landing' }, { icon: 'sparkle', label: 'AI Chat', sub: '<60s', accent: true },
      { icon: 'check', label: 'Qualify' }, { icon: 'briefcase', label: 'CRM' }, { icon: 'calendar', label: 'Book Call' },
    ],
    results: [{ v: '80%', label: 'faster response time (24h → <60s)' }, { v: '2×', label: 'more booked calls (same traffic)' }, { v: '14 days', label: 'to go live' }],
    hero: true,
  },
  {
    id: 'c2', category: 'sales', systemLabel: 'Sales Follow-Up System', cat: ['sales'],
    headline: 'Stalled pipeline, now closing 2.3× more meetings.',
    context: 'An automotive services company had strong inquiry volume but lost most warm leads in the silent week after the first call.',
    problems: ['"I\'ll follow up tomorrow" turning into next week', "Warm leads going dark in someone's inbox", 'Reps re-pitching the same prospect from scratch'],
    meta: [{ k: 'Industry', v: 'Automotive Services' }, { k: 'Team Size', v: '22' }, { k: 'Timeline', v: '16 days' }],
    flow: [
      { icon: 'user', label: 'New Lead' }, { icon: 'envelope', label: 'Sequence', accent: true },
      { icon: 'bell', label: 'Reminder' }, { icon: 'calendar', label: 'Book Meeting' }, { icon: 'cash', label: 'Deal Won' },
    ],
    results: [{ v: '2.3×', label: 'more qualified meetings' }, { v: '43%', label: 'reply rate on stalled deals' }, { v: '70%', label: 'less manual follow-up work' }],
  },
  {
    id: 'c3', category: 'ops', systemLabel: 'Operations Automation System', cat: ['ops', 'service'],
    headline: "20+ hours a week, back in the team's calendar.",
    context: 'A retail and e-commerce company was burning a full workday per person on manual reporting, data pulls, and client updates.',
    problems: ['Same data re-entered across four tools every week', 'Reports built from scratch every Monday morning', 'Client questions sitting in inboxes for days'],
    meta: [{ k: 'Industry', v: 'Retail & E-commerce' }, { k: 'Team Size', v: '8' }, { k: 'Timeline', v: '10 days' }],
    flow: [
      { icon: 'docs', label: 'Data Sources', sub: 'GA4·Ads·CRM' }, { icon: 'settings', label: 'Auto Pull', accent: true },
      { icon: 'docs', label: 'Report Gen' }, { icon: 'briefcase', label: 'Dashboard' }, { icon: 'rocket', label: 'Auto Deliver' },
    ],
    results: [{ v: '20+', label: 'hours saved per week' }, { v: '100%', label: 'delivery on schedule' }, { v: '0', label: 'manual reports needed' }],
  },
];

const enMidProofCasesStats: StatItem[] = [
  { v: '40+', l: 'Systems shipped' }, { v: '80%', l: 'Faster response time' }, { v: '14d', l: 'Average time to go live' },
];

// zh-TW Cases
const zhTWCasesHeroStats: MetricItem[] = [
  { icon: 'lightning', value: '80%', label: '平均回覆速度提升' },
  { icon: 'envelope', value: '60s', label: '平均 AI 回覆速度' },
  { icon: 'calendar', value: '14 天', label: '即可上線' },
  { icon: 'rocket', value: '40+', label: '已交付系統' },
];

const zhTWCaseFilters: CaseFilter[] = [
  { id: 'all', label: '所有案例' }, { id: 'lead', label: '潛客系統' },
  { id: 'sales', label: '銷售系統' }, { id: 'ops', label: '營運系統' },
  { id: 'education', label: '教育' }, { id: 'service', label: '服務業' },
];

const zhTWCaseStudiesData: CaseStudyData[] = [
  {
    id: 'c1', category: 'lead', systemLabel: '潛客捕捉與回覆系統', cat: ['lead'],
    headline: '從 24 小時回覆縮短到 60 秒內。',
    context: '一家教育諮詢公司擁有強勁的入站潛客量，但回覆速度慢，高意向潛客正流失給更快的競爭對手。',
    problems: ['潛客被擱置數小時無人處理', '潛客在收到回覆前就已流失', '支付的流量費用無法轉化'],
    meta: [{ k: '行業', v: '教育諮詢' }, { k: '團隊規模', v: '15' }, { k: '時間線', v: '14 天' }],
    flow: [
      { icon: 'globe', label: '廣告/著陸頁' }, { icon: 'sparkle', label: 'AI 對話', sub: '<60s', accent: true },
      { icon: 'check', label: '篩選' }, { icon: 'briefcase', label: 'CRM' }, { icon: 'calendar', label: '預約通話' },
    ],
    results: [{ v: '80%', label: '回覆速度提升 (24h → <60s)' }, { v: '2×', label: '更多預約通話（相同流量）' }, { v: '14 天', label: '即可上線' }],
    hero: true,
  },
  {
    id: 'c2', category: 'sales', systemLabel: '銷售跟進系統', cat: ['sales'],
    headline: '停滯的管道，現在成交會議增加 2.3 倍。',
    context: '一家汽車服務公司有強勁的諮詢量，但在首次通話後的沉默一周內流失了大部分溫暖潛客。',
    problems: ['「明天跟進」變成下周', '溫暖的潛客在收件箱中消失', '銷售人員從頭向同一潛客推銷'],
    meta: [{ k: '行業', v: '汽車服務' }, { k: '團隊規模', v: '22' }, { k: '時間線', v: '16 天' }],
    flow: [
      { icon: 'user', label: '新潛客' }, { icon: 'envelope', label: '序列', accent: true },
      { icon: 'bell', label: '提醒' }, { icon: 'calendar', label: '預約會議' }, { icon: 'cash', label: '成交' },
    ],
    results: [{ v: '2.3×', label: '更多合格會議' }, { v: '43%', label: '停滯案件回覆率' }, { v: '70%', label: '減少手動跟進工作' }],
  },
  {
    id: 'c3', category: 'ops', systemLabel: '營運自動化系統', cat: ['ops', 'service'],
    headline: '每週省下 20+ 小時，回到團隊日曆中。',
    context: '一家零售和電商公司每人每天要花一整個工作日在手動報告、數據提取和客戶更新上。',
    problems: ['每週在四個工具中重複輸入同一數據', '每個週一早上從零開始建立報告', '客戶問題在收件箱中放置數天'],
    meta: [{ k: '行業', v: '零售與電商' }, { k: '團隊規模', v: '8' }, { k: '時間線', v: '10 天' }],
    flow: [
      { icon: 'docs', label: '數據來源', sub: 'GA4·Ads·CRM' }, { icon: 'settings', label: '自動提取', accent: true },
      { icon: 'docs', label: '報告生成' }, { icon: 'briefcase', label: '儀表板' }, { icon: 'rocket', label: '自動發送' },
    ],
    results: [{ v: '20+', label: '每週節省小時' }, { v: '100%', label: '按時交付' }, { v: '0', label: '手動報告' }],
  },
];

const zhTWMidProofCasesStats: StatItem[] = [
  { v: '40+', l: '已交付系統' }, { v: '80%', l: '回覆速度提升' }, { v: '14d', l: '平均上線天數' },
];

// zh-CN Cases
const zhCNCasesHeroStats: MetricItem[] = [
  { icon: 'lightning', value: '80%', label: '平均回复速度提升' },
  { icon: 'envelope', value: '60s', label: '平均 AI 回复速度' },
  { icon: 'calendar', value: '14 天', label: '即可上线' },
  { icon: 'rocket', value: '40+', label: '已交付系统' },
];

const zhCNCaseFilters: CaseFilter[] = [
  { id: 'all', label: '所有案例' }, { id: 'lead', label: '潜客系统' },
  { id: 'sales', label: '销售系统' }, { id: 'ops', label: '运营系统' },
  { id: 'education', label: '教育' }, { id: 'service', label: '服务业' },
];

const zhCNCaseStudiesData: CaseStudyData[] = [
  {
    id: 'c1', category: 'lead', systemLabel: '潜客捕获与回复系统', cat: ['lead'],
    headline: '从 24 小时回复缩短到 60 秒内。',
    context: '一家教育咨询公司拥有强劲的入站潜客量，但回复速度慢，高意向潜客正流失给更快的竞争对手。',
    problems: ['潜客被搁置数小时无人处理', '潜客在收到回复前就已流失', '支付的流量费用无法转化'],
    meta: [{ k: '行业', v: '教育咨询' }, { k: '团队规模', v: '15' }, { k: '时间线', v: '14 天' }],
    flow: [
      { icon: 'globe', label: '广告/落地页' }, { icon: 'sparkle', label: 'AI 对话', sub: '<60s', accent: true },
      { icon: 'check', label: '筛选' }, { icon: 'briefcase', label: 'CRM' }, { icon: 'calendar', label: '预约通话' },
    ],
    results: [{ v: '80%', label: '回复速度提升 (24h → <60s)' }, { v: '2×', label: '更多预约通话（相同流量）' }, { v: '14 天', label: '即可上线' }],
    hero: true,
  },
  {
    id: 'c2', category: 'sales', systemLabel: '销售跟进系统', cat: ['sales'],
    headline: '停滞的管道，现在成交会议增加 2.3 倍。',
    context: '一家汽车服务公司有强劲的咨询量，但在首次通话后的沉默一周内流失了大部分温暖潜客。',
    problems: ['「明天跟进」变成下周', '温暖的潜客在收件箱中消失', '销售人员从头向同一潜客推销'],
    meta: [{ k: '行业', v: '汽车服务' }, { k: '团队规模', v: '22' }, { k: '时间线', v: '16 天' }],
    flow: [
      { icon: 'user', label: '新潜客' }, { icon: 'envelope', label: '序列', accent: true },
      { icon: 'bell', label: '提醒' }, { icon: 'calendar', label: '预约会议' }, { icon: 'cash', label: '成交' },
    ],
    results: [{ v: '2.3×', label: '更多合格会议' }, { v: '43%', label: '停滞案件回复率' }, { v: '70%', label: '减少手动跟进工作' }],
  },
  {
    id: 'c3', category: 'ops', systemLabel: '运营自动化系统', cat: ['ops', 'service'],
    headline: '每周省下 20+ 小时，回到团队日历中。',
    context: '一家零售和电商公司每人每天要花一整个工作日在手动报告、数据提取和客户更新上。',
    problems: ['每周在四个工具中重复输入同一数据', '每个周一早上从零开始建立报告', '客户问题在收件箱中放置数天'],
    meta: [{ k: '行业', v: '零售与电商' }, { k: '团队规模', v: '8' }, { k: '时间线', v: '10 天' }],
    flow: [
      { icon: 'docs', label: '数据来源', sub: 'GA4·Ads·CRM' }, { icon: 'settings', label: '自动提取', accent: true },
      { icon: 'docs', label: '报告生成' }, { icon: 'briefcase', label: '仪表板' }, { icon: 'rocket', label: '自动发送' },
    ],
    results: [{ v: '20+', label: '每周节省小时' }, { v: '100%', label: '按时交付' }, { v: '0', label: '手动报告' }],
  },
];

const zhCNMidProofCasesStats: StatItem[] = [
  { v: '40+', l: '已交付系统' }, { v: '80%', l: '回复速度提升' }, { v: '14d', l: '平均上线天数' },
];

// ============================================================
// BOOK PAGE DATA (locale-aware)
// ============================================================

const enBookFaqItems: FaqItem[] = [
  { q: 'What happens on the call?', a: "We'll review your workflow, identify friction points, and show you what to automate first." },
  { q: 'Is this a sales call?', a: "No. It's a practical workflow audit." },
  { q: 'Do I need anything prepared?', a: 'Just bring your current process or biggest bottleneck.' },
];

const zhTWBookFaqItems: FaqItem[] = [
  { q: '通話中會做什麼？', a: '我們會審查您的工作流程，找出摩擦點，並告訴您優先自動化什麼。' },
  { q: '這是銷售電話嗎？', a: '不是。這是一次實用的流程審查。' },
  { q: '需要準備什麼嗎？', a: '只需帶上您目前的流程或最大的瓶頸即可。' },
];

const zhCNBookFaqItems: FaqItem[] = [
  { q: '通话中会做什么？', a: '我们会审查您的工作流程，找出摩擦点，并告诉您优先自动化什么。' },
  { q: '这是销售电话吗？', a: '不是。这是一次实用的流程审查。' },
  { q: '需要准备什么吗？', a: '只需带上您目前的流程或最大的瓶颈即可。' },
];

// ============================================================
// LOCALISED DATA BUNDLE
// ============================================================

export interface LocalizedData {
  // Homepage
  metricsItems: MetricItem[];
  fiveSystemCards: FiveSystemCard[];
  howItWorksSteps: HowItWorksStep[];
  flowsData: Record<FlowTabKey, FlowTabConfig>;
  caseStudyBefore: string[];
  caseStudyAfter: string[];
  testimonials: Testimonial[];
  founderStats: StatItem[];
  heroDiagram: HeroDiagramLabels;
  // Systems page
  systemBlocks: SystemBlockData[];
  systemsFaqItems: FaqItem[];
  midProofBarStats: StatItem[];
  systemsProofStats: StatItem[];
  // About page
  shiftRows: ShiftRow[];
  whatAhaDoesItems: string[];
  howIThinkItems: HowIThinkItem[];
  founderProof: FounderProofItem[];
  differentItems: DifferentItem[];
  aboutProofStats: StatItem[];
  whoThisIsForBullets: string[];
  // Cases page
  casesHeroStats: MetricItem[];
  caseFilters: CaseFilter[];
  caseStudies: CaseStudyData[];
  midProofCasesStats: StatItem[];
  // Book page
  bookFaqItems: FaqItem[];
}

export function getLocalizedData(locale: Locale): LocalizedData {
  if (locale === 'zh-TW') {
    return {
      metricsItems: zhTWMetricsItems, fiveSystemCards: zhTWFiveSystemCards,
      howItWorksSteps: zhTWHowItWorksSteps, flowsData: zhTWFlowsData,
      caseStudyBefore: zhTWCaseStudyBefore, caseStudyAfter: zhTWCaseStudyAfter,
      testimonials: zhTWTestimonials, founderStats: zhTWFounderStats,
      heroDiagram: zhTWHeroDiagramLabels,
      systemBlocks: zhTWSystemBlocks, systemsFaqItems: zhTWSystemsFaqItems,
      midProofBarStats: zhTWMidProofBarStats, systemsProofStats: zhTWSystemsProofStats,
      shiftRows: zhTWShiftRows, whatAhaDoesItems: zhTWWhatAhaDoesItems,
      howIThinkItems: zhTWHowIThinkItems, founderProof: zhTWFounderProof,
      differentItems: zhTWDifferentItems, aboutProofStats: zhTWAboutProofStats,
      whoThisIsForBullets: zhTWWhoThisIsForBullets,
      casesHeroStats: zhTWCasesHeroStats, caseFilters: zhTWCaseFilters,
      caseStudies: zhTWCaseStudiesData, midProofCasesStats: zhTWMidProofCasesStats,
      bookFaqItems: zhTWBookFaqItems,
    };
  }

  if (locale === 'zh-CN') {
    return {
      metricsItems: zhCNMetricsItems, fiveSystemCards: zhCNFiveSystemCards,
      howItWorksSteps: zhCNHowItWorksSteps, flowsData: zhCNFlowsData,
      caseStudyBefore: zhCNCaseStudyBefore, caseStudyAfter: zhCNCaseStudyAfter,
      testimonials: zhCNTestimonials, founderStats: zhCNFounderStats,
      heroDiagram: zhCNHeroDiagramLabels,
      systemBlocks: zhCNSystemBlocks, systemsFaqItems: zhCNSystemsFaqItems,
      midProofBarStats: zhCNMidProofBarStats, systemsProofStats: zhCNSystemsProofStats,
      shiftRows: zhCNShiftRows, whatAhaDoesItems: zhCNWhatAhaDoesItems,
      howIThinkItems: zhCNHowIThinkItems, founderProof: zhCNFounderProof,
      differentItems: zhCNDifferentItems, aboutProofStats: zhCNAboutProofStats,
      whoThisIsForBullets: zhCNWhoThisIsForBullets,
      casesHeroStats: zhCNCasesHeroStats, caseFilters: zhCNCaseFilters,
      caseStudies: zhCNCaseStudiesData, midProofCasesStats: zhCNMidProofCasesStats,
      bookFaqItems: zhCNBookFaqItems,
    };
  }

  // Default: English
  return {
    metricsItems: enMetricsItems, fiveSystemCards: enFiveSystemCards,
    howItWorksSteps: enHowItWorksSteps, flowsData: enFlowsData,
    caseStudyBefore: enCaseStudyBefore, caseStudyAfter: enCaseStudyAfter,
    testimonials: enTestimonials, founderStats: enFounderStats,
    heroDiagram: enHeroDiagramLabels,
    systemBlocks: enSystemBlocks, systemsFaqItems: enSystemsFaqItems,
    midProofBarStats: enMidProofBarStats, systemsProofStats: enSystemsProofStats,
    shiftRows: enShiftRows, whatAhaDoesItems: enWhatAhaDoesItems,
    howIThinkItems: enHowIThinkItems, founderProof: enFounderProof,
    differentItems: enDifferentItems, aboutProofStats: enAboutProofStats,
    whoThisIsForBullets: enWhoThisIsForBullets,
    casesHeroStats: enCasesHeroStats, caseFilters: enCaseFilters,
    caseStudies: enCaseStudiesData, midProofCasesStats: enMidProofCasesStats,
    bookFaqItems: enBookFaqItems,
  };
}
