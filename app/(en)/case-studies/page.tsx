import type { Metadata } from 'next';
import { getDictionary } from '@/lib/dictionaries';
import { getLocalizedData } from '@/lib/data-i18n';
import { CasesHero } from '@/components/cases/cases-hero';
import { CasesRunway } from '@/components/cases/cases-runway';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Real systems. Real results. See how AI systems replace follow-ups, admin work, and slow operations.',
  alternates: {
    languages: {
      'en': '/case-studies',
      'zh-Hant': '/zh-TW/case-studies',
      'zh-Hans': '/zh-CN/case-studies',
    },
  },
};

export default async function CaseStudiesPage() {
  const dict = await getDictionary('en');
  const data = getLocalizedData('en');
  const cases = dict.cases!;

  return (
    <>
      <CasesHero dict={cases.hero} stats={data.casesHeroStats} />
      <div className="wrap">
        <CasesRunway
          dict={cases}
          caseStudies={data.caseStudies}
          caseFilters={data.caseFilters}
          midProofStats={data.midProofCasesStats}
        />
      </div>
    </>
  );
}
