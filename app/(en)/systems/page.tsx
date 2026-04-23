import type { Metadata } from 'next';
import { systemsFaqItems, systemBlocks } from '@/lib/data';
import { SystemsHero } from '@/components/systems/systems-hero';
import { SystemsNav } from '@/components/systems/systems-nav';
import { SystemBlock } from '@/components/systems/system-block';
import { PatternInterrupt } from '@/components/systems/pattern-interrupt';
import { MidProofBar } from '@/components/systems/mid-proof-bar';
import { FounderInject } from '@/components/systems/founder-inject';
import { SystemsProof } from '@/components/systems/systems-proof';
import { SystemsFAQ } from '@/components/systems/systems-faq';
import { SystemsFinalCTA } from '@/components/systems/systems-final-cta';

export const metadata: Metadata = {
  title: 'Systems We Build',
  description:
    'AI systems that capture leads, follow up instantly, automate operations, and help SMB teams scale without adding headcount.',
};

export default function SystemsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: systemsFaqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="wrap">
        <SystemsHero />
      </div>
      <SystemsNav />
      <SystemBlock {...systemBlocks[0]} />
      <SystemBlock {...systemBlocks[1]} />
      <PatternInterrupt />
      <SystemBlock {...systemBlocks[2]} />
      <MidProofBar />
      <SystemBlock {...systemBlocks[3]} />
      <FounderInject />
      <SystemBlock {...systemBlocks[4]} />
      <SystemsProof />
      <SystemsFAQ />
      <SystemsFinalCTA />
    </>
  );
}
