import type { Metadata } from 'next';
import { Hero } from '@/components/home/hero';
import { MetricsStrip } from '@/components/home/metrics-strip';
import { FiveSystems } from '@/components/home/five-systems';
import { HowItWorks } from '@/components/home/how-it-works';
import { FlowsSection } from '@/components/home/flows-section';
import { CaseStudy } from '@/components/home/case-study';
import { LogosStrip } from '@/components/home/logos-strip';
import { FounderBlock } from '@/components/home/founder-block';
import { FinalCTA } from '@/components/home/final-cta';
import { getDictionary } from '@/lib/dictionaries';
import { getLocalizedData } from '@/lib/data-i18n';

export const metadata: Metadata = {
  title: 'AHA Solutions — Stop hiring. Start running systems.',
  description: 'AI systems that capture leads, follow up instantly, and run your operations.',
};

export default async function HomePage() {
  const dict = await getDictionary('en');
  const data = getLocalizedData('en');

  return (
    <>
      {/* 1. HOOK — what this is */}
      <div className="wrap">
        <Hero dict={dict.home.hero} heroDiagramLabels={data.heroDiagram} />
      </div>

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
      <FinalCTA dict={dict.home.finalCta} />
    </>
  );
}
