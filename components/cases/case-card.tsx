import { BtnGhost } from '@/components/primitives';
import { Arrow } from '@/components/primitives';
import { Icon } from '@/components/primitives';
import type { CaseStudyData } from '@/lib/data';
import type { CaseCardDict } from '@/lib/dictionaries/types';
import { FlowNode } from './flow-node';

interface CaseCardProps {
  c: CaseStudyData;
  dict: CaseCardDict;
  hero?: boolean;
  reverse?: boolean;
}

export function CaseCard({ c, dict, hero, reverse }: CaseCardProps) {
  const extraPad = hero ? 40 : 32;

  const leftCol = (
    <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 16 }}>
        <div className="mono" style={{ fontSize: 10.5, letterSpacing: 1.6, color: 'var(--accent)' }}>
          {c.systemLabel.toUpperCase()}
        </div>
        {hero && (
          <span style={{ fontSize: 10, letterSpacing: 0.4, padding: '3px 8px', borderRadius: 999, background: 'var(--accent)', color: 'var(--accent-ink)', fontWeight: 600, textTransform: 'uppercase' as const }}>
            {dict.heroBadge}
          </span>
        )}
      </div>
      <h2 style={{ fontSize: hero ? 'clamp(24px, 2.4vw, 32px)' : 'clamp(22px, 2.2vw, 28px)', lineHeight: 1.15, marginBottom: 14, maxWidth: 440 }}>
        {c.headline}
      </h2>
      <p style={{ color: 'var(--text-2)', fontSize: 14, lineHeight: 1.55, marginBottom: 20, maxWidth: 440 }}>
        {c.context}
      </p>

      {/* Painful problems list */}
      <div className="mono" style={{ fontSize: 10, letterSpacing: 1.4, color: '#ff9e9e', marginBottom: 12 }}>{dict.painHeading}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 22, maxWidth: 440 }}>
        {c.problems.map((p) => (
          <div key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: 'var(--text-2)', lineHeight: 1.45 }}>
            <span style={{ width: 18, height: 18, borderRadius: 5, background: 'rgba(255,120,120,0.1)', color: '#ff9e9e', display: 'grid', placeItems: 'center', flexShrink: 0, marginTop: 1 }}>
              <Icon name="x" size={10} />
            </span>
            {p}
          </div>
        ))}
      </div>

      {/* Meta */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24, fontSize: 12, color: 'var(--text-3)' }}>
        {c.meta.map((m) => (
          <div key={m.k} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 5, height: 5, borderRadius: 999, background: 'var(--accent)' }} />
            <span style={{ color: 'var(--text-3)' }}>{m.k}:</span>
            <span style={{ color: 'var(--text-2)' }}>{m.v}</span>
          </div>
        ))}
      </div>
      <div>
        <BtnGhost size="sm">{dict.viewCta}</BtnGhost>
      </div>
    </div>
  );

  const rightCol = (
    <div style={{ minWidth: 0 }}>
      <div className="mono" style={{ fontSize: 10.5, letterSpacing: 1.6, color: 'var(--text-3)', marginBottom: 14 }}>
        {dict.systemHeadingPrefix} {c.systemLabel.toUpperCase()}
      </div>
      <div style={{ padding: '16px 12px', borderRadius: 12, background: 'var(--bg-3)', border: '1px solid var(--line)', marginBottom: 18 }}>
        <div className="flow-nodes case-flow" style={{ justifyContent: 'space-between', overflowX: 'auto', paddingBottom: 4 }}>
          {c.flow.map((node, i, arr) => (
            <div key={i} style={{ display: 'contents' }}>
              <FlowNode icon={node.icon} label={node.label} sub={node.sub} accent={node.accent} />
              {i < arr.length - 1 && <Arrow active={false} length={10} />}
            </div>
          ))}
        </div>
      </div>

      <div className="mono" style={{ fontSize: 10.5, letterSpacing: 1.6, color: 'var(--text-3)', marginBottom: 12 }}>
        {dict.resultsHeading}
      </div>
      <div style={{ padding: '20px 18px', borderRadius: 12, background: 'var(--bg-3)', border: '1px solid var(--line)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${c.results.length}, 1fr)`, gap: 16 }}>
          {c.results.map((r, i) => (
            <div key={i} style={{ textAlign: 'left', borderLeft: i === 0 ? 'none' : '1px solid var(--line)', paddingLeft: i === 0 ? 0 : 16 }}>
              <div style={{ fontSize: 30, color: 'var(--accent)', fontWeight: 600, letterSpacing: -1, lineHeight: 1, marginBottom: 8 }}>{r.v}</div>
              <div style={{ fontSize: 11.5, color: 'var(--text-3)', lineHeight: 1.35 }}>{r.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="card case-card"
      style={{
        padding: extraPad,
        marginBottom: hero ? 24 : 20,
        borderColor: hero ? 'rgba(245,208,0,0.3)' : 'var(--line)',
        background: hero ? 'linear-gradient(180deg, rgba(245,208,0,0.04), var(--bg-2))' : 'var(--bg-2)',
      }}
    >
      <div
        className="case-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 0.85fr) minmax(0, 1.55fr)',
          gap: 32,
          alignItems: 'start',
          direction: reverse ? 'rtl' : 'ltr',
        }}
      >
        <div style={{ direction: 'ltr' }}>{reverse ? rightCol : leftCol}</div>
        <div style={{ direction: 'ltr' }}>{reverse ? leftCol : rightCol}</div>
      </div>
    </div>
  );
}
