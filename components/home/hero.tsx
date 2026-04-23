import { BtnPrimary, BtnGhost } from '@/components/primitives';
import { HeroDiagram } from './hero-diagram';
import type { HeroDict, CommonDict } from '@/lib/dictionaries/types';
import type { HeroDiagramLabels } from '@/lib/data-i18n';

interface HeroProps {
  dict?: HeroDict;
  common?: CommonDict;
  heroDiagramLabels?: HeroDiagramLabels;
}

const defaultDict: HeroDict = {
  chip: 'Built for SMB founders & lean teams who need to scale without hiring',
  h1Line1: 'Stop hiring.',
  h1Line2: 'Start',
  h1Underline: 'running',
  h1Line2End: 'systems.',
  subtitle: 'AI systems that capture leads, follow up instantly, and run your operations — so you can scale without adding headcount.',
  ctaPrimary: 'Book a free workflow audit',
  ctaGhost: 'See how it works',
  ctaSub: 'Free 30-min audit. No pitch. No pressure.',
  proof1: '40+ SYSTEMS SHIPPED',
  proof2: 'EDUCATION · AUTOMOTIVE · RETAIL · SERVICES',
  proof3: 'BUILT BY EX-CEO (PUBLIC CO.)',
};

export function Hero({ dict = defaultDict, heroDiagramLabels }: HeroProps) {
  return (
    <section style={{ padding: '24px 0 64px' }}>
      <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 48, alignItems: 'center', marginTop: 56 }}>
        <div>
          <div className="chip" style={{ marginBottom: 24 }}>
            <span className="dot" />
            {dict.chip}
          </div>
          <h1 style={{ marginBottom: 22 }}>
            {dict.h1Line1}<br />
            {dict.h1Line2} <span className="under">{dict.h1Underline}</span> {dict.h1Line2End}
          </h1>
          <p style={{ color: 'var(--text-2)', fontSize: 16, maxWidth: 460, marginBottom: 28 }}>
            {dict.subtitle}
          </p>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            <BtnPrimary>{dict.ctaPrimary}</BtnPrimary>
            <BtnGhost href="#how-it-works">{dict.ctaGhost}</BtnGhost>
          </div>
          <div style={{ marginTop: 12, fontSize: 12.5, color: 'var(--text-3)' }}>
            {dict.ctaSub}
          </div>
          <div className="mono" style={{ marginTop: 22, fontSize: 10.5, color: 'var(--text-3)', letterSpacing: 1.4, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <span>{dict.proof1}</span>
            <span>·</span>
            <span>{dict.proof2}</span>
            <span>·</span>
            <span>{dict.proof3}</span>
          </div>
        </div>

        <HeroDiagram labels={heroDiagramLabels} />
      </div>
    </section>
  );
}
