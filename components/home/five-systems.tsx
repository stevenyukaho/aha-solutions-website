import { Icon, Arrow, Eyebrow, BtnPrimary } from '@/components/primitives';
import { fiveSystemCards } from '@/lib/data';

export function FiveSystems() {
  return (
    <section className="section">
      <div className="wrap">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <Eyebrow style={{ marginBottom: 14 }}>FIVE SYSTEMS. ONE PIPELINE.</Eyebrow>
          <h2>The systems we build</h2>
        </div>

        <div className="five-systems-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: 14 }}>
          {fiveSystemCards.map((c) => (
            <div key={c.n} className="card sys-card" style={{ padding: 22, display: 'flex', flexDirection: 'column' }}>
              <div className="mono" style={{ fontSize: 10, color: 'var(--text-3)', letterSpacing: 1.4, marginBottom: 18 }}>{c.n}</div>
              <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: -0.2, marginBottom: 8, lineHeight: 1.25, minHeight: 40 }}>{c.title}</div>
              <div className="mono" style={{ fontSize: 9.5, color: 'var(--accent)', letterSpacing: 1.2, marginBottom: 'auto', textTransform: 'uppercase' }}>{c.sub}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 22 }}>
                {c.flow.map((n, i, arr) => (
                  <div key={i}>
                    <div className={`node${n.accent ? ' accent' : ''}`} style={{ padding: '8px 10px', fontSize: 11, gap: 8, width: '100%', justifyContent: 'flex-start', borderRadius: 10 }}>
                      <span className="glyph" style={{ width: 20, height: 20, borderRadius: 6, flexShrink: 0 }}><Icon name={n.icon} size={11} /></span>
                      <span style={{ fontSize: 11.5, whiteSpace: 'normal', lineHeight: 1.2, fontWeight: 500 }}>{n.label}</span>
                      {n.sub && <span className="sub" style={{ marginLeft: 'auto' }}>{n.sub}</span>}
                    </div>
                    {i < arr.length - 1 && <Arrow dir="down" active={c.flow[i].accent || c.flow[i + 1].accent} length={6} />}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
          <BtnPrimary>Book a free workflow audit</BtnPrimary>
        </div>
      </div>
    </section>
  );
}
