import { logosData } from '@/lib/data';

export function LogosStrip() {
  // Duplicate items for seamless loop
  const items = [...logosData, ...logosData];

  return (
    <section className="section tight" style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="wrap">
        {/* Scrolling tools marquee */}
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <span className="mono" style={{ fontSize: 10, letterSpacing: 1.4, color: 'var(--text-3)' }}>
            TOOLS & PLATFORMS WE BUILD WITH
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

      {/* VentureLAB Partnership */}
      <div className="wrap">
        <div style={{
          textAlign: 'center',
          padding: '32px 0 0',
          borderTop: '1px solid var(--line)',
        }}>
          <span style={{ fontSize: 12, color: 'var(--text-3)', display: 'block', marginBottom: 16 }}>
            In Partnerships with
          </span>
          <span style={{
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: -0.5,
            color: 'var(--text-2)',
          }}>
            venture<span style={{ fontWeight: 300 }}>LAB</span>
          </span>
        </div>
      </div>
    </section>
  );
}
