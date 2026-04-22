'use client';

import { useState } from 'react';
import { caseStudies, caseFilters } from '@/lib/data';
import { CaseFilters } from './case-filters';
import { CaseCard } from './case-card';
import { InsightBlock } from './insight-block';
import { MidProof } from './mid-proof';
import { PatternStrip } from './pattern-strip';
import { FounderLine } from './founder-line';
import { CasesFinalCTA } from './cases-final-cta';

export function CasesRunway() {
  const [filter, setFilter] = useState<string>('all');

  const filtered = filter === 'all' ? caseStudies : caseStudies.filter((c) => c.cat.includes(filter));

  const blocks: React.ReactNode[] = [];
  filtered.forEach((c, i) => {
    blocks.push(<CaseCard key={c.id} c={c} hero={c.hero} reverse={i === 1} />);
    if (filter === 'all' && i === 0) {
      blocks.push(<InsightBlock key="insight" />);
    }
    if (filter === 'all' && i === 1) {
      blocks.push(<MidProof key="midproof" />);
    }
  });

  return (
    <>
      <CaseFilters filters={caseFilters} active={filter} onChange={setFilter} />
      {blocks}
      {filter === 'all' && <PatternStrip />}
      {filter === 'all' && <FounderLine />}
      {filtered.length === 0 && (
        <div className="card" style={{ padding: 40, textAlign: 'center', color: 'var(--text-3)' }}>
          No case studies in this category yet — <span style={{ color: 'var(--accent)' }}>book an audit</span> and yours could be next.
        </div>
      )}
      <CasesFinalCTA />
    </>
  );
}
