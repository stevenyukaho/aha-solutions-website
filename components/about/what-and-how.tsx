import { Icon } from '@/components/primitives';
import type { WhatAndHowDict } from '@/lib/dictionaries/types';
import type { HowIThinkItem } from '@/lib/data';

interface Props {
  dict: WhatAndHowDict;
  whatItems: string[];
  howItems: HowIThinkItem[];
}

export function WhatAndHow({ dict, whatItems, howItems }: Props) {
  return (
    <div className="what-how-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.15fr)', gap: 20, marginBottom: 20 }}>
      {/* What AHA does */}
      <div className="card" style={{ padding: 36 }}>
        <div className="mono" style={{ fontSize: 10.5, letterSpacing: 1.6, color: 'var(--accent)', marginBottom: 14 }}>{dict.whatEyebrow}</div>
        <h2 style={{ fontSize: 'clamp(22px, 2.4vw, 30px)', lineHeight: 1.15, marginBottom: 16 }}>
          {dict.whatIntro}
        </h2>
        <p style={{ fontSize: 14, color: 'var(--text-3)', lineHeight: 1.55, marginBottom: 18 }}>
          {dict.whatDisclaimer}
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 18 }}>
          {whatItems.map((t) => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--text)' }}>
              <span style={{ width: 20, height: 20, borderRadius: 6, background: 'rgba(245,208,0,0.12)', color: 'var(--accent)', display: 'grid', placeItems: 'center' }}>
                <Icon name="check" size={12} />
              </span>
              {t}
            </div>
          ))}
        </div>
        <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.55, fontStyle: 'italic', borderTop: '1px solid var(--line)', paddingTop: 16 }}>
          {dict.whatClosing}
        </p>
      </div>

      {/* How I think about systems */}
      <div className="card" style={{ padding: 36, background: 'linear-gradient(180deg, rgba(184,156,247,0.04), var(--bg-2))' }}>
        <div className="mono" style={{ fontSize: 10.5, letterSpacing: 1.6, color: 'var(--purple)', marginBottom: 14 }}>{dict.howEyebrow}</div>
        <h3 style={{ fontSize: 'clamp(18px, 2vw, 22px)', lineHeight: 1.3, marginBottom: 18, color: 'var(--text)' }}>
          {dict.howIntro}
        </h3>
        <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.55, marginBottom: 18 }}>
          {dict.howClosing}
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 20 }}>
          {howItems.map((x) => (
            <div key={x.label} style={{ padding: 14, borderRadius: 10, background: 'var(--bg-3)', border: '1px solid var(--line)' }}>
              <span style={{ width: 28, height: 28, borderRadius: 7, background: 'rgba(245,208,0,0.1)', color: 'var(--accent)', display: 'grid', placeItems: 'center', marginBottom: 10 }}>
                <Icon name={x.icon} size={13} />
              </span>
              <div style={{ fontSize: 12, color: 'var(--text)', lineHeight: 1.35, fontWeight: 500 }}>{x.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
