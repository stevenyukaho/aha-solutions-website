import { BtnPrimary } from '@/components/primitives';
import { HeroBackground } from '@/components/home/hero-background';

export function SystemsHero() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: '48px 0 64px' }}>
      <HeroBackground />
      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
      <div className="chip" style={{ marginBottom: 28 }}>
        <span className="dot" />
        Five systems. One operating pipeline.
      </div>
      <h1 style={{ marginBottom: 22, maxWidth: 960 }}>
        The systems<br />we build.
      </h1>
      <p style={{ color: 'var(--text-2)', fontSize: 17, maxWidth: 620, marginBottom: 32, lineHeight: 1.5 }}>
        AI systems that capture leads, follow up instantly, automate operations, and help SMB teams scale without adding headcount.
      </p>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
        <BtnPrimary>Book a free workflow audit</BtnPrimary>
        <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)', letterSpacing: 1.2 }}>SEE WHAT EACH SYSTEM DOES, WHERE IT FITS, AND WHAT IT REPLACES</span>
      </div>
      </div>
    </section>
  );
}
