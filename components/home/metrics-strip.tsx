import { Icon } from '@/components/primitives';
import { metricsItems } from '@/lib/data';

export function MetricsStrip() {
  return (
    <section style={{ padding: '24px 0' }}>
      <div className="metrics-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, border: '1px solid var(--line)', borderRadius: 16, background: 'var(--bg-2)', overflow: 'hidden' }}>
        {metricsItems.map((m, i) => (
          <div key={m.label} style={{ padding: '22px 24px', borderRight: i < 3 ? '1px solid var(--line)' : 'none', display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{ color: 'var(--accent)' }}><Icon name={m.icon} size={20} /></span>
            <div>
              <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: -1, lineHeight: 1 }}>{m.value}</div>
              <div style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 4 }}>{m.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
