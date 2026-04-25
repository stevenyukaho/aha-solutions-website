import type { Metadata } from 'next';
import { getDictionary } from '@/lib/dictionaries';
import { getLocalizedData } from '@/lib/data-i18n';
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
  alternates: {
    languages: {
      'en': '/systems',
      'zh-Hant': '/zh-TW/systems',
      'zh-Hans': '/zh-CN/systems',
    },
  },
};

export default async function SystemsPage() {
  const dict = await getDictionary('en');
  const data = getLocalizedData('en');
  const sys = dict.systems!;

  const navItems = data.systemBlocks.map((b) => ({
    id: b.id,
    label: `${b.n} · ${b.subtitle}`,
  }));

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.systemsFaqItems.map((item) => ({
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
      <SystemsHero dict={sys.hero} />
      <SystemsNav dict={sys.nav} items={navItems} />
      <SystemBlock dict={sys.blockLabels} {...data.systemBlocks[0]} />
      <SystemBlock dict={sys.blockLabels} {...data.systemBlocks[1]} />
      <PatternInterrupt dict={sys.patternInterrupt} />
      <SystemBlock dict={sys.blockLabels} {...data.systemBlocks[2]} />
      <MidProofBar stats={data.midProofBarStats} />
      <SystemBlock dict={sys.blockLabels} {...data.systemBlocks[3]} />
      <FounderInject dict={sys.founderInject} />
      <SystemBlock dict={sys.blockLabels} {...data.systemBlocks[4]} />
      <SystemsProof dict={sys.proof} stats={data.systemsProofStats} />
      <SystemsFAQ dict={sys.faq} items={data.systemsFaqItems} />
      <SystemsFinalCTA dict={sys.finalCta} />
    </>
  );
}
