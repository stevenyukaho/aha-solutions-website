import { Icon } from '@/components/primitives';
import type { ShiftSectionDict } from '@/lib/dictionaries/types';
import type { ShiftRow } from '@/lib/data';

interface Props {
  dict: ShiftSectionDict;
  rows: ShiftRow[];
}

export function ShiftSection({ dict, rows }: Props) {
  return (
    <div className="card" style={{ padding: '44px 36px', marginBottom: 20 }}>
      <div className="shift-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.3fr)', gap: 48, alignItems: 'center' }}>
        <div style={{ minWidth: 0 }}>
          <div className="mono" style={{ fontSize: 10.5, letterSpacing: 1.6, color: 'var(--accent)', marginBottom: 14 }}>{dict.eyebrow}</div>
          <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', lineHeight: 1.1, marginBottom: 0 }}>
            {dict.h2}
          </h2>
        </div>
        <div className="shift-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {rows.map((r, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingLeft: i === 0 ? 0 : 18, borderLeft: i === 0 ? 'none' : '1px solid var(--line)' }}>
              <span style={{ width: 34, height: 34, borderRadius: 9, background: 'rgba(184,156,247,0.12)', color: 'var(--purple)', display: 'grid', placeItems: 'center', marginBottom: 4 }}>
                <Icon name={r.icon} size={15} />
              </span>
              <div style={{ fontSize: 14, color: 'var(--text)', fontWeight: 600 }}>{r.title}</div>
              <div style={{ fontSize: 12.5, color: 'var(--text-3)', lineHeight: 1.45 }}>{r.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
