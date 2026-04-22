import { BtnPrimary } from '@/components/primitives';

export function CasesFinalCTA() {
  return (
    <div className="card" style={{ padding: '52px 32px', textAlign: 'center', marginBottom: 16, background: 'var(--bg-3)' }}>
      <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', lineHeight: 1.15, marginBottom: 12, maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}>
        Ready to <span style={{ color: 'var(--accent)' }}>get results</span> like these?
      </h2>
      <p style={{ color: 'var(--text-2)', fontSize: 15, marginBottom: 10, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.5 }}>
        Book a free workflow audit and we&apos;ll show you exactly what to automate first.
      </p>
      <p style={{ color: 'var(--text-3)', fontSize: 13, marginBottom: 28, fontStyle: 'italic' }}>
        Free 30-min audit. No pitch. No pressure.
      </p>
      <BtnPrimary>Book a free workflow audit</BtnPrimary>
      <div className="mono" style={{ fontSize: 10.5, color: 'var(--text-3)', letterSpacing: 1.2, marginTop: 20, display: 'flex', gap: 20, justifyContent: 'center' }}>
        <span>● 30 MIN</span>
        <span>● NO PITCH</span>
        <span>● NO PRESSURE</span>
      </div>
    </div>
  );
}
