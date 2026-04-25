import { Icon } from '@/components/primitives';
import { BtnPrimary } from '@/components/primitives';
import { HeroBackground } from '@/components/home/hero-background';
import type { AboutHeroDict } from '@/lib/dictionaries/types';

interface Props {
  dict: AboutHeroDict;
}

export function AboutHero({ dict }: Props) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: '72px 0 48px' }}>
      <HeroBackground />
      <div className="wrap" style={{ position: 'relative', zIndex: 1, maxWidth: 880 }}>
      <div className="mono" style={{ fontSize: 11, letterSpacing: 2, color: 'var(--accent)', marginBottom: 20 }}>
        {dict.eyebrow}
      </div>
      <h1 style={{ marginBottom: 22, fontSize: 'clamp(44px, 6.4vw, 76px)', lineHeight: 1.02 }}>
        {dict.h1}
      </h1>
      <p style={{ color: 'var(--text-2)', fontSize: 17, maxWidth: 620, marginBottom: 14, lineHeight: 1.5 }}>
        {dict.subtitle}
      </p>
      <p style={{ color: 'var(--text)', fontSize: 17, maxWidth: 620, marginBottom: 28, lineHeight: 1.5, fontWeight: 500 }}>
        {dict.highlight}
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28, fontSize: 13, color: 'var(--text-2)' }}>
        <span style={{ width: 18, height: 18, borderRadius: 6, background: 'rgba(245,208,0,0.15)', color: 'var(--accent)', display: 'grid', placeItems: 'center' }}>
          <Icon name="check" size={11} />
        </span>
        {dict.founderLine}
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
        <BtnPrimary>{dict.cta}</BtnPrimary>
      </div>
      <div style={{ marginTop: 10, fontSize: 12.5, color: 'var(--text-3)', fontStyle: 'italic' }}>
        {dict.ctaSub}
      </div>
      </div>
    </section>
  );
}
