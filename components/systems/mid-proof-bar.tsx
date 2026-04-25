import type { StatItem } from '@/lib/data';

export function MidProofBar({ stats }: { stats: StatItem[] }) {
  return (
    <section
      style={{
        padding: '56px 0',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
        background: 'var(--bg-2)',
      }}
    >
      <div
        className="wrap"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 20,
          alignItems: 'center',
        }}
      >
        {stats.map((s, i) => (
          <div
            key={s.l}
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: 14,
              borderLeft: i === 0 ? 'none' : '1px solid var(--line)',
              paddingLeft: i === 0 ? 0 : 20,
            }}
          >
            <div style={{ fontSize: 38, color: 'var(--accent)', fontWeight: 600, letterSpacing: -1.5, lineHeight: 1 }}>{s.v}</div>
            <div className="mono" style={{ fontSize: 10.5, color: 'var(--text-3)', letterSpacing: 1.2 }}>{s.l.toUpperCase()}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
