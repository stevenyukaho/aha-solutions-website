import { BtnPrimary } from '@/components/primitives';
import { HeroBackground } from '@/components/home/hero-background';
import type { SystemsHeroDict } from '@/lib/dictionaries/types';

export function SystemsHero({ dict }: { dict: SystemsHeroDict }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: '48px 0 64px' }}>
      <HeroBackground />
      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
      <div className="chip" style={{ marginBottom: 28 }}>
        <span className="dot" />
        {dict.h1}
      </div>
      <h1 style={{ marginBottom: 22, maxWidth: 960 }}>
        {dict.h2}
      </h1>
      <p style={{ color: 'var(--text-2)', fontSize: 17, maxWidth: 620, marginBottom: 32, lineHeight: 1.5 }}>
        {dict.subtitle}
      </p>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
        <BtnPrimary>{dict.cta}</BtnPrimary>
        <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)', letterSpacing: 1.2 }}>{dict.tags.join(' · ').toUpperCase()}</span>
      </div>
      </div>
    </section>
  );
}
