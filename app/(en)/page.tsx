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

export const metadata: Metadata = {
  title: 'AHA Solutions — Stop hiring. Start running systems.',
  description: 'AI systems that capture leads, follow up instantly, and run your operations.',
};

export default async function HomePage() {
  const dict = await getDictionary('en');

  return (
    <>
      {/* 1. HOOK — what this is */}
      <div className="wrap">
        <Hero dict={dict.home.hero} />
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
      <FinalCTA dict={dict.home.finalCta} />
    </>
  );
}
