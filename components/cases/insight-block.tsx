import type { InsightBlockDict } from '@/lib/dictionaries/types';

interface InsightBlockProps {
  dict: InsightBlockDict;
}

export function InsightBlock({ dict }: InsightBlockProps) {
  return (
    <div style={{ padding: '48px 32px', borderLeft: '3px solid var(--accent)', background: 'rgba(245,208,0,0.04)', borderRadius: '0 14px 14px 0', marginBottom: 20, maxWidth: 820 }}>
      <div className="mono" style={{ fontSize: 10.5, letterSpacing: 1.6, color: 'var(--accent)', marginBottom: 14 }}>{dict.eyebrow}</div>
      <p style={{ fontSize: 22, lineHeight: 1.35, color: 'var(--text)', margin: 0, fontFamily: 'Instrument Serif, serif', fontStyle: 'italic' }}>
        &quot;{dict.quote}&quot;
      </p>
    </div>
  );
}
