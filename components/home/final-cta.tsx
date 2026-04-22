import Link from 'next/link';
import { Icon } from '@/components/primitives';
import { BOOKING_URL } from '@/lib/constants';

export function FinalCTA() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="final-cta-grid" style={{ background: 'var(--accent)', color: 'var(--accent-ink)', borderRadius: 20, padding: '64px 52px', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 40, alignItems: 'center' }}>
          <div>
            <h2 style={{ color: 'var(--accent-ink)', marginBottom: 14 }}>Book the audit. Ship the system.</h2>
            <p style={{ fontSize: 16, opacity: 0.8, maxWidth: 520 }}>
              Start with a free workflow audit — we&apos;ll map your gaps and show you what to automate first.
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <Link href={BOOKING_URL}>
              <button className="btn btn-dark">
                Book a free workflow audit
                <span className="arrow"><Icon name="arrow" size={12} /></span>
              </button>
            </Link>
            <div className="mono" style={{ marginTop: 14, fontSize: 10.5, letterSpacing: 1.2, color: 'var(--accent-ink)', opacity: 0.65 }}>
              30 MIN · NO PITCH · NO PRESSURE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
