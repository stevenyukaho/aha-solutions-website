import { Icon } from '@/components/primitives';
import { BtnPrimary } from '@/components/primitives';
import { HeroBackground } from '@/components/home/hero-background';

export function AboutHero() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: '72px 0 48px' }}>
      <HeroBackground />
      <div className="wrap" style={{ position: 'relative', zIndex: 1, maxWidth: 880 }}>
      <div className="mono" style={{ fontSize: 11, letterSpacing: 2, color: 'var(--accent)', marginBottom: 20 }}>
        ABOUT AHA SOLUTIONS
      </div>
      <h1 style={{ marginBottom: 22, fontSize: 'clamp(44px, 6.4vw, 76px)', lineHeight: 1.02 }}>
        Built by an operator,<br />
        <span style={{ color: 'var(--accent)' }}>not an agency.</span>
      </h1>
      <p style={{ color: 'var(--text-2)', fontSize: 17, maxWidth: 620, marginBottom: 14, lineHeight: 1.5 }}>
        AHA Solutions builds AI systems that replace repetitive work — so founders can scale without adding headcount.
      </p>
      <p style={{ color: 'var(--text)', fontSize: 17, maxWidth: 620, marginBottom: 28, lineHeight: 1.5, fontWeight: 500 }}>
        Systems that replace work — <span style={{ color: 'var(--accent)' }}>not just assist it.</span>
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28, fontSize: 13, color: 'var(--text-2)' }}>
        <span style={{ width: 18, height: 18, borderRadius: 6, background: 'rgba(245,208,0,0.15)', color: 'var(--accent)', display: 'grid', placeItems: 'center' }}>
          <Icon name="check" size={11} />
        </span>
        Led by Steven Yu, former CEO of a public-listed company.
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
        <BtnPrimary>Book a free workflow audit</BtnPrimary>
      </div>
      <div style={{ marginTop: 10, fontSize: 12.5, color: 'var(--text-3)', fontStyle: 'italic' }}>
        Free 30-min audit. No pitch. No pressure.
      </div>
      </div>
    </section>
  );
}
