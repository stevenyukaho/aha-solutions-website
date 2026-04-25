import { Icon } from '@/components/primitives';
import type { WhoThisIsForDict } from '@/lib/dictionaries/types';

interface Props {
  dict: WhoThisIsForDict;
  bullets: string[];
}

export function WhoThisIsFor({ dict, bullets }: Props) {
  return (
    <div className="card" style={{ padding: '44px 36px', marginBottom: 20 }}>
      <div className="who-for-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.1fr)', gap: 48, alignItems: 'center' }}>
        <div style={{ minWidth: 0 }}>
          <div className="mono" style={{ fontSize: 10.5, letterSpacing: 1.6, color: 'var(--accent)', marginBottom: 14 }}>{dict.eyebrow}</div>
          <h2 style={{ fontSize: 'clamp(24px, 2.8vw, 34px)', lineHeight: 1.15, marginBottom: 18 }}>{dict.h2}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {bullets.map((b) => (
              <div key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 14.5, color: 'var(--text)', lineHeight: 1.45 }}>
                <span style={{ width: 22, height: 22, borderRadius: 6, background: 'rgba(245,208,0,0.12)', color: 'var(--accent)', display: 'grid', placeItems: 'center', flexShrink: 0, marginTop: 1 }}>
                  <Icon name="check" size={12} />
                </span>
                {b}
              </div>
            ))}
          </div>
          <p style={{ fontSize: 15, color: 'var(--text)', marginTop: 26, marginBottom: 0, lineHeight: 1.5 }}>
            {dict.closing}
          </p>
        </div>
        <div style={{ padding: '36px 32px', borderRadius: 14, background: 'var(--bg-3)', border: '1px solid var(--line)', position: 'relative' }}>
          <div style={{ fontSize: 48, color: 'var(--accent)', fontFamily: 'Instrument Serif, serif', lineHeight: 1, marginBottom: 10 }}>&quot;</div>
          <p style={{ fontSize: 19, color: 'var(--text)', lineHeight: 1.45, margin: 0, fontFamily: 'Instrument Serif, serif', fontStyle: 'italic' }}>
            {dict.quote}
          </p>
          <div className="mono" style={{ fontSize: 10.5, color: 'var(--text-3)', letterSpacing: 1.4, marginTop: 18 }}>{dict.attribution}</div>
        </div>
      </div>
    </div>
  );
}
