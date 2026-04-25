import type { Metadata } from 'next';
import { getDictionary } from '@/lib/dictionaries';
import { getLocalizedData } from '@/lib/data-i18n';
import { CasesHero } from '@/components/cases/cases-hero';
import { CasesRunway } from '@/components/cases/cases-runway';

export const metadata: Metadata = {
  title: '案例研究',
  description: '真实系统，真实成果。了解 AI 系统如何取代跟进、行政工作和低效运营。',
  alternates: {
    languages: {
      'en': '/case-studies',
      'zh-Hant': '/zh-TW/case-studies',
      'zh-Hans': '/zh-CN/case-studies',
    },
  },
};

export default async function ZhCNCaseStudiesPage() {
  const dict = await getDictionary('zh-CN');
  const data = getLocalizedData('zh-CN');
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
