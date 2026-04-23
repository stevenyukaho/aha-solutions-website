import type { Metadata } from 'next';
import { getDictionary } from '@/lib/dictionaries';
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

  return (
    <>
      {/* 1. HOOK — what this is */}
      <div className="wrap">
        <Hero dict={dict.home.hero} common={dict.common} />
      </div>

      {/* 2. CLARITY — what you get */}
      <LogosStrip dict={dict.home.logosStrip} />
      <FiveSystems dict={dict.home.fiveSystems} />
      <HowItWorks dict={dict.home.howItWorks} />
      <FlowsSection dict={dict.home.flowsSection} />

      {/* 3. TRUST — proof */}
      <div className="wrap">
        <MetricsStrip />
      </div>
      <CaseStudy dict={dict.home.caseStudy} />
      <FounderBlock dict={dict.home.founderBlock} />

      {/* 4. ACTION + 5. REASSURANCE */}
      <FinalCTA dict={dict.home.finalCta} common={dict.common} />
    </>
  );
}
