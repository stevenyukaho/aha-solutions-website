import { BtnPrimary } from '@/components/primitives';
import type { CasesFinalCtaDict } from '@/lib/dictionaries/types';

interface CasesFinalCTAProps {
  dict: CasesFinalCtaDict;
}

export function CasesFinalCTA({ dict }: CasesFinalCTAProps) {
  return (
    <div className="card" style={{ padding: '52px 32px', textAlign: 'center', marginBottom: 16, background: 'var(--bg-3)' }}>
      <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', lineHeight: 1.15, marginBottom: 12, maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}>
        {dict.h2}
      </h2>
      <p style={{ color: 'var(--text-2)', fontSize: 15, marginBottom: 10, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.5 }}>
        {dict.description}
      </p>
      <p style={{ color: 'var(--text-3)', fontSize: 13, marginBottom: 28, fontStyle: 'italic' }}>
        {dict.ctaSub}
      </p>
      <BtnPrimary>{dict.cta}</BtnPrimary>
      <div className="mono" style={{ fontSize: 10.5, color: 'var(--text-3)', letterSpacing: 1.2, marginTop: 20, display: 'flex', gap: 20, justifyContent: 'center' }}>
        {dict.pills.map((pill) => (
          <span key={pill}>{'\u25CF'} {pill}</span>
        ))}
      </div>
    </div>
  );
}
