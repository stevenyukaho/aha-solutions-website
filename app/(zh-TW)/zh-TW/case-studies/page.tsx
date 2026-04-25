import type { Metadata } from 'next';
import { getDictionary } from '@/lib/dictionaries';
import { getLocalizedData } from '@/lib/data-i18n';
import { CasesHero } from '@/components/cases/cases-hero';
import { CasesRunway } from '@/components/cases/cases-runway';

export const metadata: Metadata = {
  title: '案例研究',
  description: '真實系統，真實成果。了解 AI 系統如何取代跟進、行政工作和低效營運。',
  alternates: {
    languages: {
      'en': '/case-studies',
      'zh-Hant': '/zh-TW/case-studies',
      'zh-Hans': '/zh-CN/case-studies',
    },
  },
};

export default async function ZhTWCaseStudiesPage() {
  const dict = await getDictionary('zh-TW');
  const data = getLocalizedData('zh-TW');
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
