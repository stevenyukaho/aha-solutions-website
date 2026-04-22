import type { CSSProperties } from 'react';
import { Icon } from './icon';
import type { IconName } from './icon';

export interface NodeProps {
  icon?: IconName;
  label: string;
  sub?: string;
  accent?: boolean;
  pulse?: boolean;
  style?: CSSProperties;
}

export function Node({ icon, label, sub, accent, pulse, style }: NodeProps) {
  return (
    <div className={`node${accent ? ' accent' : ''}`} style={style}>
      {pulse && <span className="pulse" />}
      {icon && (
        <span className="glyph">
          <Icon name={icon} size={14} />
        </span>
      )}
      <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
        <span>{label}</span>
        {sub && <span className="sub">{sub}</span>}
      </span>
    </div>
  );
}
