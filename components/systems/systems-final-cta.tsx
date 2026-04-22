import Link from 'next/link';
import { Icon } from '@/components/primitives';
import { BOOKING_URL } from '@/lib/constants';


export function SystemsFinalCTA() {
  return (
    <section className="section">
      <div className="wrap">
        <div
          className="final-cta-grid"
          style={{
            background: 'var(--accent)',
            color: 'var(--accent-ink)',
            borderRadius: 20,
            padding: '64px 52px',
            display: 'grid',
            gridTemplateColumns: '1.3fr 1fr',
            gap: 40,
            alignItems: 'center',
          }}
        >
          <div>
            <div className="mono" style={{ fontSize: 10.5, letterSpacing: 1.8, marginBottom: 18, opacity: 0.7 }}>THE NEXT MOVE</div>
            <h2 style={{ color: 'var(--accent-ink)', marginBottom: 18, fontSize: 'clamp(28px, 3.4vw, 40px)', lineHeight: 1.15 }}>
              You don&apos;t need all five systems.<br />
              You need the first one that removes the most friction.
            </h2>
            <p style={{ fontSize: 17, opacity: 0.78, maxWidth: 520, lineHeight: 1.5 }}>
              Book a 30-minute workflow audit and we&apos;ll show you exactly which one — in your actual business.
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <Link href={BOOKING_URL} className="btn btn-dark">
              Book a free workflow audit
              <span className="arrow"><Icon name="arrow" size={12} /></span>
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
