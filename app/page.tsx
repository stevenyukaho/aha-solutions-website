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
      {/* 1. HOOK — what this is */}
      <div className="wrap">
        <Hero />
      </div>

      {/* 2. CLARITY — what you get */}
      <LogosStrip />
      <FiveSystems />
      <HowItWorks />
      <FlowsSection />

      {/* 3. TRUST — proof */}
      <div className="wrap">
        <MetricsStrip />
      </div>
      <CaseStudy />
      <FounderBlock />

      {/* 4. ACTION + 5. REASSURANCE */}
      <FinalCTA />
    </>
  );
}
