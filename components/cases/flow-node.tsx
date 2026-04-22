import { Icon } from '@/components/primitives';
import type { IconName } from '@/components/primitives';

interface FlowNodeProps {
  icon: IconName;
  label: string;
  sub?: string;
  accent?: boolean;
}

export function FlowNode({ icon, label, sub, accent }: FlowNodeProps) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      padding: '8px 8px',
      borderRadius: 10,
      background: accent ? 'rgba(245,208,0,0.08)' : 'transparent',
      border: '1px solid ' + (accent ? 'rgba(245,208,0,0.4)' : 'var(--line)'),
      minWidth: 74,
      flexShrink: 0,
    }}>
      <span style={{
        width: 30,
        height: 30,
        borderRadius: 8,
        background: accent ? 'var(--accent)' : 'rgba(184,156,247,0.12)',
        color: accent ? 'var(--accent-ink)' : 'var(--purple)',
        display: 'grid',
        placeItems: 'center',
      }}>
        <Icon name={icon} size={14} />
      </span>
      <div style={{ textAlign: 'center', lineHeight: 1.2 }}>
        <div style={{ fontSize: 10.5, color: 'var(--text)', fontWeight: 500 }}>{label}</div>
        {sub && <div className="mono" style={{ fontSize: 9, color: 'var(--text-3)', marginTop: 2, letterSpacing: 0.3 }}>{sub}</div>}
      </div>
    </div>
  );
}
