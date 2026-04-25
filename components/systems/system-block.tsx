import { Icon, Node, Arrow, BtnGhost } from '@/components/primitives';
import type { SystemBlockData } from '@/lib/data';
import type { SystemBlockLabelsDict } from '@/lib/dictionaries/types';

export function SystemBlock({ dict, ...props }: SystemBlockData & { dict: SystemBlockLabelsDict }) {
  const { id, n, title, subtitle, desc, flow, flowTag, replaces, outcomes, popular, emphasis } = props;
  const padV = emphasis ? 108 : 88;
  return (
    <section
      id={id}
      className="section"
      style={{ borderTop: '1px solid var(--line)', scrollMarginTop: 80, padding: `${padV}px 0` }}
    >
      <div className="wrap">
        <div style={{ display: 'flex', flexDirection: 'column', gap: emphasis ? 32 : 28 }}>
          {/* Header row */}
          <div className="system-header-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) auto', gap: 24, alignItems: 'end' }}>
            <div style={{ minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 14 }}>
                <div className="mono" style={{ fontSize: 11, letterSpacing: 1.6, color: 'var(--accent)' }}>{n} · {subtitle.toUpperCase()}</div>
                {popular && (
                  <span style={{ fontSize: 10.5, letterSpacing: 0.4, padding: '3px 8px', borderRadius: 999, background: 'var(--accent)', color: 'var(--accent-ink)', fontWeight: 600, textTransform: 'uppercase' }}>
                    {dict.popularBadge}
                  </span>
                )}
              </div>
              <h2 style={{ marginBottom: 16, maxWidth: 820 }}>{title}</h2>
              <p style={{ color: 'var(--text-2)', fontSize: emphasis ? 17 : 16, lineHeight: 1.55, maxWidth: 640 }}>{desc}</p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <BtnGhost size="sm">{dict.cta}</BtnGhost>
            </div>
          </div>

          {/* Flow diagram */}
          <div className="card" style={{ padding: emphasis ? '40px 28px' : '32px 24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22, flexWrap: 'wrap', gap: 8 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <span className="pulse" />
                <span className="mono" style={{ fontSize: 10, letterSpacing: 1.4, color: 'var(--text-3)' }}>
                  SYSTEM FLOW · AHA-{n}{flowTag ? ` · ${flowTag.toUpperCase()}` : ''}
                </span>
              </div>
              <span className="mono" style={{ fontSize: 10, color: 'var(--success)' }}>● LIVE</span>
            </div>
            <div className="flow-nodes" style={{ justifyContent: 'space-between', overflowX: 'auto', paddingBottom: 4 }}>
              {flow.map((node, i) => (
                <span key={i} style={{ display: 'contents' }}>
                  <Node icon={node.icon} label={node.label} sub={node.sub} accent={node.accent} />
                  {i < flow.length - 1 && <Arrow active={!!(flow[i].accent || flow[i + 1].accent)} length={24} />}
                </span>
              ))}
            </div>
          </div>

          {/* Pain / Outcome cards */}
          <div className="system-pain-outcome" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            <div className="card" style={{ padding: 22 }}>
              <div className="mono" style={{ fontSize: 10, letterSpacing: 1.4, color: '#ff9e9e', marginBottom: 14 }}>{dict.painHeading}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {replaces.map((t) => (
                  <div key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13.5, color: 'var(--text-2)', lineHeight: 1.45 }}>
                    <span style={{ width: 20, height: 20, borderRadius: 6, background: 'rgba(255,120,120,0.1)', color: '#ff9e9e', display: 'grid', placeItems: 'center', flexShrink: 0, marginTop: 2 }}>
                      <Icon name="x" size={11} />
                    </span>
                    {t}
                  </div>
                ))}
              </div>
            </div>
            <div className="card" style={{ padding: 22, borderColor: 'rgba(245,208,0,0.3)', background: 'linear-gradient(180deg, rgba(245,208,0,0.06), transparent)' }}>
              <div className="mono" style={{ fontSize: 10, letterSpacing: 1.4, color: 'var(--accent)', marginBottom: 14 }}>{dict.outcomesHeading}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {outcomes.map((t) => (
                  <div key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13.5, color: 'var(--text)', lineHeight: 1.45 }}>
                    <span style={{ width: 20, height: 20, borderRadius: 6, background: 'rgba(125,224,143,0.12)', color: 'var(--success)', display: 'grid', placeItems: 'center', flexShrink: 0, marginTop: 2 }}>
                      <Icon name="check" size={11} />
                    </span>
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
