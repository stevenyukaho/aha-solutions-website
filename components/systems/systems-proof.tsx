import { Eyebrow } from '@/components/primitives';
import type { StatItem } from '@/lib/data';
import type { SystemsProofDict } from '@/lib/dictionaries/types';

export function SystemsProof({ dict, stats }: { dict: SystemsProofDict; stats: StatItem[] }) {
  return (
    <section className="section">
      <div className="wrap" style={{ textAlign: 'center' }}>
        <Eyebrow style={{ marginBottom: 14 }}>{dict.eyebrow}</Eyebrow>
        <h2 style={{ marginBottom: 14, maxWidth: 780, marginLeft: 'auto', marginRight: 'auto' }}>
          {dict.h2}
        </h2>
        <p style={{ color: 'var(--text-2)', fontSize: 15, marginBottom: 48 }}>
          {dict.sub}
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, maxWidth: 900, margin: '0 auto' }}>
          {stats.map((s) => (
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
