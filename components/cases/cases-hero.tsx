import { Icon } from '@/components/primitives';
import type { MetricItem } from '@/lib/data';
import type { CasesHeroDict } from '@/lib/dictionaries/types';
import { HeroBackground } from '@/components/home/hero-background';

function InlineTag({ children, accent }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12 }}>
      <span style={{ width: 6, height: 6, borderRadius: 999, background: accent ? 'var(--accent)' : 'var(--text-3)' }} />
      {children}
    </span>
  );
}

interface CasesHeroProps {
  dict: CasesHeroDict;
  stats: MetricItem[];
}

export function CasesHero({ dict, stats }: CasesHeroProps) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: '56px 0 40px' }}>
      <HeroBackground />
      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
      <div className="mono" style={{ fontSize: 11, letterSpacing: 2, color: 'var(--accent)', marginBottom: 20 }}>{dict.eyebrow}</div>
      <div className="cases-hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(320px, 0.95fr)', gap: 48, alignItems: 'start' }}>
        <div style={{ minWidth: 0 }}>
          <h1 style={{ marginBottom: 22, fontSize: 'clamp(40px, 6vw, 68px)' }}>
            {dict.h1}
          </h1>
          <p style={{ color: 'var(--text-2)', fontSize: 16, maxWidth: 560, marginBottom: 22, lineHeight: 1.55 }}>
            {dict.subtitle}
          </p>
          <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap', fontSize: 12, color: 'var(--text-2)' }}>
            {dict.tags.map((tag, i) => (
              <InlineTag key={tag} accent={i === 0}>{tag}</InlineTag>
            ))}
          </div>
        </div>
        <div className="card" style={{ padding: 20 }}>
          <div className="cases-stat-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
            {stats.map((s) => (
              <div key={s.label} style={{ padding: 16, borderRadius: 12, background: 'var(--bg-3)', border: '1px solid var(--line)', textAlign: 'center' }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(184,156,247,0.12)', color: 'var(--purple)', display: 'grid', placeItems: 'center', margin: '0 auto 12px' }}>
                  <Icon name={s.icon} size={16} />
                </div>
                <div style={{ fontSize: 24, color: 'var(--accent)', fontWeight: 600, letterSpacing: -0.5, lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: 10.5, color: 'var(--text-3)', marginTop: 8, lineHeight: 1.3 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
