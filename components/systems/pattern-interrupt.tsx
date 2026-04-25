import type { PatternInterruptDict } from '@/lib/dictionaries/types';

export function PatternInterrupt({ dict }: { dict: PatternInterruptDict }) {
  return (
    <section
      style={{
        padding: '112px 0',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(245,208,0,0.06), transparent 60%)',
      }}
    >
      <div className="wrap" style={{ maxWidth: 860, textAlign: 'center' }}>
        <div className="mono" style={{ fontSize: 10.5, letterSpacing: 2, color: 'var(--accent)', marginBottom: 28 }}>{dict.label}</div>
        <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.1, marginBottom: 28, letterSpacing: '-0.02em' }}>
          {dict.h2}
        </h2>
        <p style={{ fontSize: 18, color: 'var(--text-2)', lineHeight: 1.6, maxWidth: 600, margin: '0 auto' }}>
          {dict.sub}
        </p>
      </div>
    </section>
  );
}
