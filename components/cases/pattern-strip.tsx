export function PatternStrip() {
  return (
    <div className="card" style={{ padding: '44px 32px', marginBottom: 20, background: 'radial-gradient(ellipse at 50% 0%, rgba(245,208,0,0.06), transparent 60%), var(--bg-2)', textAlign: 'center' }}>
      <div className="mono" style={{ fontSize: 10.5, letterSpacing: 2, color: 'var(--accent)', marginBottom: 20 }}>— THE PATTERN —</div>
      <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 38px)', lineHeight: 1.15, marginBottom: 18, maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}>
        Different businesses. Same problem.
      </h2>
      <p style={{ fontSize: 18, color: 'var(--text-2)', lineHeight: 1.55, maxWidth: 560, margin: '0 auto' }}>
        Leads come in…<br />
        Then nothing happens.<br />
        <span style={{ color: 'var(--accent)' }}>Systems fix that.</span>
      </p>
    </div>
  );
}
