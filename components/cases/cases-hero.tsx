import { Icon } from '@/components/primitives';
import { casesHeroStats } from '@/lib/data';

function InlineTag({ children, accent }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12 }}>
      <span style={{ width: 6, height: 6, borderRadius: 999, background: accent ? 'var(--accent)' : 'var(--text-3)' }} />
      {children}
    </span>
  );
}

export function CasesHero() {
  return (
    <section style={{ padding: '56px 0 40px' }}>
      <div className="mono" style={{ fontSize: 11, letterSpacing: 2, color: 'var(--accent)', marginBottom: 20 }}>CASE STUDIES</div>
      <div className="cases-hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(320px, 0.95fr)', gap: 48, alignItems: 'start' }}>
        <div style={{ minWidth: 0 }}>
          <h1 style={{ marginBottom: 22, fontSize: 'clamp(40px, 6vw, 68px)' }}>
            Real systems. Real results.<br />
            <span style={{ color: 'var(--accent)' }}>No more manual work.</span>
          </h1>
          <p style={{ color: 'var(--text-2)', fontSize: 16, maxWidth: 560, marginBottom: 22, lineHeight: 1.55 }}>
            See how AI systems replace follow-ups, admin work, and slow operations — with numbers, not adjectives.
          </p>
          <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap', fontSize: 12, color: 'var(--text-2)' }}>
            <InlineTag accent>40+ systems shipped</InlineTag>
            <InlineTag>EdTech</InlineTag>
            <InlineTag>B2B</InlineTag>
            <InlineTag>SaaS</InlineTag>
          </div>
        </div>
        <div className="card" style={{ padding: 20 }}>
          <div className="cases-stat-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
            {casesHeroStats.map((s) => (
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
    </section>
  );
}
