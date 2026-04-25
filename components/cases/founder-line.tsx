import type { FounderLineDict } from '@/lib/dictionaries/types';

interface FounderLineProps {
  dict: FounderLineDict;
}

export function FounderLine({ dict }: FounderLineProps) {
  return (
    <div className="card" style={{ padding: '28px 32px', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 22 }}>
      <div style={{ width: 52, height: 52, borderRadius: 999, background: 'linear-gradient(135deg, var(--accent), #d4b500)', flexShrink: 0, display: 'grid', placeItems: 'center', color: 'var(--accent-ink)', fontWeight: 700, fontSize: 18, letterSpacing: -0.5 }}>A</div>
      <div style={{ minWidth: 0 }}>
        <p style={{ fontSize: 17, color: 'var(--text)', lineHeight: 1.45, margin: 0, fontFamily: 'Instrument Serif, serif', fontStyle: 'italic' }}>
          {dict.quote}
        </p>
        <div className="mono" style={{ fontSize: 10.5, color: 'var(--text-3)', letterSpacing: 1.4, marginTop: 8 }}>{dict.label}</div>
      </div>
    </div>
  );
}
