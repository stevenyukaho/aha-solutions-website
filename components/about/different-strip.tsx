import { Icon } from '@/components/primitives';
import type { DifferentStripDict } from '@/lib/dictionaries/types';
import type { DifferentItem } from '@/lib/data';

interface Props {
  dict: DifferentStripDict;
  items: DifferentItem[];
}

export function DifferentStrip({ dict, items }: Props) {
  return (
    <div className="card" style={{ padding: 36, marginBottom: 20 }}>
      <div className="mono" style={{ fontSize: 10.5, letterSpacing: 1.6, color: 'var(--accent)', marginBottom: 20 }}>{dict.eyebrow}</div>
      <div className="different-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
        {items.map((it, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingLeft: i === 0 ? 0 : 20, borderLeft: i === 0 ? 'none' : '1px solid var(--line)' }}>
            <span style={{ width: 34, height: 34, borderRadius: 9, background: 'rgba(184,156,247,0.12)', color: 'var(--purple)', display: 'grid', placeItems: 'center' }}>
              <Icon name={it.icon} size={14} />
            </span>
            <div style={{ fontSize: 14, color: 'var(--text)', fontWeight: 600, lineHeight: 1.3 }}>{it.title}</div>
            <div style={{ fontSize: 12.5, color: 'var(--text-3)', lineHeight: 1.4 }}>{it.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
