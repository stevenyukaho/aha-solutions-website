import type { Metadata } from 'next';
import { getDictionary } from '@/lib/dictionaries';
import { getLocalizedData } from '@/lib/data-i18n';
import { Hero } from '@/components/home/hero';
import { MetricsStrip } from '@/components/home/metrics-strip';
import { FiveSystems } from '@/components/home/five-systems';
import { HowItWorks } from '@/components/home/how-it-works';
import { FlowsSection } from '@/components/home/flows-section';
import { CaseStudy } from '@/components/home/case-study';
import { LogosStrip } from '@/components/home/logos-strip';
import { FounderBlock } from '@/components/home/founder-block';
import { FinalCTA } from '@/components/home/final-cta';

export const metadata: Metadata = {
  title: 'AHA Solutions — 停止增员。开始运行系统。',
  description: 'AI 系统自动获取潜在客户、即时跟进、管理运营。',
};

export default async function ZhCNHomePage() {
  const dict = await getDictionary('zh-CN');
  const data = getLocalizedData('zh-CN');

  return (
    <>
      {/* 1. HOOK — what this is */}
      <Hero dict={dict.home.hero} common={dict.common} heroDiagramLabels={data.heroDiagram} />

      {/* 2. CLARITY — what you get */}
      <LogosStrip dict={dict.home.logosStrip} />
      <FiveSystems dict={dict.home.fiveSystems} cards={data.fiveSystemCards} />
      <HowItWorks dict={dict.home.howItWorks} steps={data.howItWorksSteps} />
      <FlowsSection dict={dict.home.flowsSection} flows={data.flowsData} />

      {/* 3. TRUST — proof */}
      <div className="wrap">
        <MetricsStrip items={data.metricsItems} />
      </div>
      <CaseStudy dict={dict.home.caseStudy} before={data.caseStudyBefore} after={data.caseStudyAfter} testimonials={data.testimonials} />
      <FounderBlock dict={dict.home.founderBlock} stats={data.founderStats} />

      {/* 4. ACTION + 5. REASSURANCE */}
      <FinalCTA dict={dict.home.finalCta} common={dict.common} />
    </>
  );
}
