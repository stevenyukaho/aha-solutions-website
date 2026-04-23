import { logosData } from '@/lib/data';
import type { LogosStripDict } from '@/lib/dictionaries/types';

interface LogosStripProps {
  dict?: LogosStripDict;
}

const defaultDict: LogosStripDict = {
  eyebrow: 'TOOLS & PLATFORMS WE BUILD WITH',
  partnershipLabel: 'In Partnerships with',
  partnershipName: 'ventureLAB',
};

export function LogosStrip({ dict = defaultDict }: LogosStripProps) {
  // Duplicate items for seamless loop
  const items = [...logosData, ...logosData];

  // Split partnershipName into bold/light parts for "venture" + "LAB" rendering
  // If the name is "ventureLAB" we render it as venture<light>LAB</light>
  // Otherwise just render as-is
  const renderPartnershipName = (name: string) => {
    const labIndex = name.lastIndexOf('LAB');
    if (labIndex > 0) {
      return (
        <span style={{ fontSize: 28, fontWeight: 700, letterSpacing: -0.5, color: 'var(--text-2)' }}>
          {name.slice(0, labIndex)}<span style={{ fontWeight: 300 }}>{name.slice(labIndex)}</span>
        </span>
      );
    }
    return (
      <span style={{ fontSize: 28, fontWeight: 700, letterSpacing: -0.5, color: 'var(--text-2)' }}>
        {name}
      </span>
    );
  };

  return (
    <section className="section tight" style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="wrap">
        {/* Scrolling tools marquee */}
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <span className="mono" style={{ fontSize: 10, letterSpacing: 1.4, color: 'var(--text-3)' }}>
            {dict.eyebrow}
          </span>
        </div>
      </div>

      {/* Full-width marquee (no wrap constraint) */}
      <div className="marquee" style={{ marginBottom: 48 }}>
        <div className="marquee-track">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              style={{
                fontSize: 18,
                fontWeight: 500,
                letterSpacing: -0.3,
                color: 'var(--text-3)',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* Partnership */}
      <div className="wrap">
        <div style={{
          textAlign: 'center',
          padding: '32px 0 0',
          borderTop: '1px solid var(--line)',
        }}>
          <span style={{ fontSize: 12, color: 'var(--text-3)', display: 'block', marginBottom: 16 }}>
            {dict.partnershipLabel}
          </span>
          {renderPartnershipName(dict.partnershipName)}
        </div>
      </div>
    </section>
  );
}
