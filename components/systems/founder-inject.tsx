export function FounderInject() {
  return (
    <section style={{ padding: '56px 0', borderTop: '1px solid var(--line)' }}>
      <div className="wrap" style={{ maxWidth: 820, display: 'flex', alignItems: 'center', gap: 22 }}>
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: 999,
            background: 'linear-gradient(135deg, var(--accent), #d4b500)',
            flexShrink: 0,
            display: 'grid',
            placeItems: 'center',
            color: 'var(--accent-ink)',
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: -0.5,
          }}
        >
          A
        </div>
        <div>
          <p
            style={{
              fontSize: 18,
              color: 'var(--text)',
              lineHeight: 1.45,
              margin: 0,
              fontFamily: 'Instrument Serif, serif',
              fontStyle: 'italic',
            }}
          >
            Built by a former CEO who&apos;s run operations at scale — not just another automation agency.
          </p>
          <div className="mono" style={{ fontSize: 10.5, color: 'var(--text-3)', letterSpacing: 1.4, marginTop: 8 }}>AHA · FOUNDER NOTE</div>
        </div>
      </div>
    </section>
  );
}
