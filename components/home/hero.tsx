import { BtnPrimary, BtnGhost } from '@/components/primitives';
import { HeroDiagram } from './hero-diagram';

export function Hero() {
  return (
    <section style={{ padding: '24px 0 64px' }}>
      <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 48, alignItems: 'center', marginTop: 56 }}>
        <div>
          <div className="chip" style={{ marginBottom: 24 }}>
            <span className="dot" />
            Built for SMB founders &amp; lean teams who need to scale without hiring
          </div>
          <h1 style={{ marginBottom: 22 }}>
            Stop hiring.<br />
            Start <span className="under">running</span> systems.
          </h1>
          <p style={{ color: 'var(--text-2)', fontSize: 16, maxWidth: 460, marginBottom: 28 }}>
            AI systems that capture leads, follow up instantly, and run your operations — so you can scale without adding headcount.
          </p>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            <BtnPrimary>Book a free workflow audit</BtnPrimary>
            <BtnGhost href="#how-it-works">See how it works</BtnGhost>
          </div>
          <div style={{ marginTop: 12, fontSize: 12.5, color: 'var(--text-3)' }}>
            Free 30-min audit. No pitch. No pressure.
          </div>
          <div className="mono" style={{ marginTop: 22, fontSize: 10.5, color: 'var(--text-3)', letterSpacing: 1.4, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <span>40+ SYSTEMS SHIPPED</span>
            <span>·</span>
            <span>EDUCATION · AUTOMOTIVE · RETAIL · SERVICES</span>
            <span>·</span>
            <span>BUILT BY EX-CEO (PUBLIC CO.)</span>
          </div>
        </div>

        <HeroDiagram />
      </div>
    </section>
  );
}
