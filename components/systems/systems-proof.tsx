import { Eyebrow } from '@/components/primitives';
import { systemsProofStats } from '@/lib/data';

export function SystemsProof() {
  return (
    <section className="section">
      <div className="wrap" style={{ textAlign: 'center' }}>
        <Eyebrow style={{ marginBottom: 14 }}>PROOF</Eyebrow>
        <h2 style={{ marginBottom: 14, maxWidth: 780, marginLeft: 'auto', marginRight: 'auto' }}>
          Built for teams that need leverage, not more overhead
        </h2>
        <p style={{ color: 'var(--text-2)', fontSize: 15, marginBottom: 48 }}>
          40+ systems shipped across EdTech, B2B, and SaaS
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, maxWidth: 900, margin: '0 auto' }}>
          {systemsProofStats.map((s) => (
            <div key={s.l} className="card" style={{ padding: '28px 20px' }}>
              <div style={{ fontSize: 44, color: 'var(--accent)', fontWeight: 600, letterSpacing: -2, lineHeight: 1 }}>{s.v}</div>
              <div className="mono" style={{ fontSize: 10.5, color: 'var(--text-3)', letterSpacing: 1.2, marginTop: 10 }}>{s.l.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
