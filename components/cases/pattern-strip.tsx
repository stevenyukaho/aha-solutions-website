import type { PatternStripDict } from '@/lib/dictionaries/types';

interface PatternStripProps {
  dict: PatternStripDict;
}

export function PatternStrip({ dict }: PatternStripProps) {
  return (
    <div className="card" style={{ padding: '44px 32px', marginBottom: 20, background: 'radial-gradient(ellipse at 50% 0%, rgba(245,208,0,0.06), transparent 60%), var(--bg-2)', textAlign: 'center' }}>
      <div className="mono" style={{ fontSize: 10.5, letterSpacing: 2, color: 'var(--accent)', marginBottom: 20 }}>{dict.label}</div>
      <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 38px)', lineHeight: 1.15, marginBottom: 18, maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}>
        {dict.h2}
      </h2>
      <p style={{ fontSize: 18, color: 'var(--text-2)', lineHeight: 1.55, maxWidth: 560, margin: '0 auto' }}>
        {dict.sub}
      </p>
    </div>
  );
}
