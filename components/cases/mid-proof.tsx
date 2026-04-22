const stats = [
  { v: '40+', l: 'Systems shipped' },
  { v: '80%', l: 'Faster response time' },
  { v: '14d', l: 'Average time to go live' },
];

export function MidProof() {
  return (
    <div className="card" style={{ padding: '32px 28px', marginBottom: 20, background: 'var(--bg-3)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, alignItems: 'center' }}>
        {stats.map((s, i) => (
          <div key={s.l} style={{ display: 'flex', alignItems: 'baseline', gap: 14, borderLeft: i === 0 ? 'none' : '1px solid var(--line)', paddingLeft: i === 0 ? 0 : 20 }}>
            <div style={{ fontSize: 38, color: 'var(--accent)', fontWeight: 600, letterSpacing: -1.5, lineHeight: 1 }}>{s.v}</div>
            <div className="mono" style={{ fontSize: 10.5, color: 'var(--text-3)', letterSpacing: 1.2 }}>{s.l.toUpperCase()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
