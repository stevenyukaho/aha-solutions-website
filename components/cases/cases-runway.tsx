'use client';

import { useState } from 'react';
import type { CaseStudyData, CaseFilter, StatItem } from '@/lib/data';
import type { CasesDict } from '@/lib/dictionaries/types';
import { CaseFilters } from './case-filters';
import { CaseCard } from './case-card';
import { InsightBlock } from './insight-block';
import { MidProof } from './mid-proof';
import { PatternStrip } from './pattern-strip';
import { FounderLine } from './founder-line';
import { CasesFinalCTA } from './cases-final-cta';

interface CasesRunwayProps {
  dict: CasesDict;
  caseStudies: CaseStudyData[];
  caseFilters: CaseFilter[];
  midProofStats: StatItem[];
}

export function CasesRunway({ dict, caseStudies, caseFilters, midProofStats }: CasesRunwayProps) {
  const [filter, setFilter] = useState<string>('all');

  const filtered = filter === 'all' ? caseStudies : caseStudies.filter((c) => c.cat.includes(filter));

  const blocks: React.ReactNode[] = [];
  filtered.forEach((c, i) => {
    blocks.push(<CaseCard key={c.id} c={c} dict={dict.card} hero={c.hero} reverse={i === 1} />);
    if (filter === 'all' && i === 0) {
      blocks.push(<InsightBlock key="insight" dict={dict.insight} />);
    }
    if (filter === 'all' && i === 1) {
      blocks.push(<MidProof key="midproof" stats={midProofStats} />);
    }
  });

  return (
    <>
      <CaseFilters filters={caseFilters} active={filter} onChange={setFilter} />
      {blocks}
      {filter === 'all' && <PatternStrip dict={dict.pattern} />}
      {filter === 'all' && <FounderLine dict={dict.founderLine} />}
      {filtered.length === 0 && (
        <div className="card" style={{ padding: 40, textAlign: 'center', color: 'var(--text-3)' }}>
          {dict.runway.emptyState}<span style={{ color: 'var(--accent)' }}>{dict.runway.emptyLink}</span>{dict.runway.emptyEnd}
        </div>
      )}
      <CasesFinalCTA dict={dict.finalCta} />
    </>
  );
}
