import type { Metadata } from 'next';
import { CasesHero } from '@/components/cases/cases-hero';
import { CasesRunway } from '@/components/cases/cases-runway';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Real systems. Real results. See how AI systems replace follow-ups, admin work, and slow operations.',
};

export default function CaseStudiesPage() {
  return (
    <div className="wrap">
      <CasesHero />
      <CasesRunway />
    </div>
  );
}
