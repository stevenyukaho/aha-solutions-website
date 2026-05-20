import { Icon } from '@/components/primitives';
import { metricsItems as defaultMetricsItems } from '@/lib/data';
import type { MetricItem } from '@/lib/data';

interface MetricsStripProps {
  items?: MetricItem[];
}

export function MetricsStrip({ items = defaultMetricsItems }: MetricsStripProps) {
  return (
    <section style={{ padding: '24px 0' }}>
      <dl className="metrics-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, border: '1px solid var(--line)', borderRadius: 16, background: 'var(--bg-2)', overflow: 'hidden', margin: 0 }}>
        {items.map((m, i) => (
          <div key={m.label} className="metric" style={{ padding: '22px 24px', borderRight: i < 3 ? '1px solid var(--line)' : 'none', display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{ color: 'var(--accent)' }} aria-hidden="true"><Icon name={m.icon} size={20} /></span>
            <div>
              <dd style={{ fontSize: 30, fontWeight: 600, letterSpacing: -1, lineHeight: 1, margin: 0 }}>{m.value}</dd>
              <dt style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 4 }}>{m.label}</dt>
            </div>
          </div>
        ))}
      </dl>
    </section>
  );
}
