import { Icon } from '@/components/primitives';
import { BtnPrimary } from '@/components/primitives';

export function AboutFinalCTA() {
  return (
    <div className="card about-cta-grid" style={{ padding: '40px 36px', marginBottom: 16, display: 'grid', gridTemplateColumns: 'auto minmax(0, 1fr) auto', gap: 28, alignItems: 'center', background: 'var(--bg-3)' }}>
      <div style={{ width: 56, height: 56, borderRadius: 14, background: 'rgba(245,208,0,0.1)', color: 'var(--accent)', display: 'grid', placeItems: 'center', border: '1px solid rgba(245,208,0,0.3)' }}>
        <Icon name="calendar" size={22} />
      </div>
      <div style={{ minWidth: 0 }}>
        <h2 style={{ fontSize: 'clamp(22px, 2.4vw, 30px)', lineHeight: 1.15, marginBottom: 8 }}>
          Let&apos;s build your <span style={{ color: 'var(--accent)' }}>first system.</span>
        </h2>
        <p style={{ color: 'var(--text-2)', fontSize: 14.5, margin: 0, lineHeight: 1.5 }}>
          We&apos;ll map your workflow and show you exactly what to automate first.
        </p>
        <p style={{ color: 'var(--text-3)', fontSize: 12.5, margin: '6px 0 0', fontStyle: 'italic' }}>
          Free 30-min audit. No pitch. No pressure.
        </p>
      </div>
      <div>
        <BtnPrimary>Book a free workflow audit</BtnPrimary>
      </div>
    </div>
  );
}
