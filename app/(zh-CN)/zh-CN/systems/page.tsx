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
  title: '我们构建的系统 — AHA Solutions',
  description:
    'AI 系统自动捕获潜在客户、即时跟进、自动化运营，助中小企团队无需增加人手即可扩展业务。',
  alternates: {
    languages: {
      'en': '/systems',
      'zh-Hant': '/zh-TW/systems',
      'zh-Hans': '/zh-CN/systems',
    },
  },
};

export default async function ZhCNSystemsPage() {
  const dict = await getDictionary('zh-CN');
  const data = getLocalizedData('zh-CN');
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
