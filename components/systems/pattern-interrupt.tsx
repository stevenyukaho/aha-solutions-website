export function PatternInterrupt() {
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
        <div className="mono" style={{ fontSize: 10.5, letterSpacing: 2, color: 'var(--accent)', marginBottom: 28 }}>— PAUSE —</div>
        <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.1, marginBottom: 28, letterSpacing: '-0.02em' }}>
          Most businesses don&apos;t have a <span style={{ color: 'var(--text-3)' }}>lead</span> problem.<br />
          They have a <span style={{ color: 'var(--accent)' }}>follow-up</span> problem.
        </h2>
        <p style={{ fontSize: 18, color: 'var(--text-2)', lineHeight: 1.6, maxWidth: 600, margin: '0 auto' }}>
          Leads come in. Then nothing happens for hours.<br />
          That&apos;s where systems change everything.
        </p>
      </div>
    </section>
  );
}
