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

export const metadata: Metadata = {
  title: 'AHA Solutions — Stop hiring. Start running systems.',
  description: 'AI systems that capture leads, follow up instantly, and run your operations.',
};

export default function HomePage() {
  return (
    <>
      <div className="wrap">
        <Hero />
        <MetricsStrip />
      </div>
      <FiveSystems />
      <HowItWorks />
      <FlowsSection />
      <CaseStudy />
      <FounderBlock />
      <LogosStrip />
      <FinalCTA />
    </>
  );
}
