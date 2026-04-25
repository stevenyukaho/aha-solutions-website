import Link from 'next/link';
import { Icon } from '@/components/primitives';
import { BOOKING_URL } from '@/lib/constants';
import type { SystemsFinalCtaDict } from '@/lib/dictionaries/types';


export function SystemsFinalCTA({ dict }: { dict: SystemsFinalCtaDict }) {
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
            <div className="mono" style={{ fontSize: 10.5, letterSpacing: 1.8, marginBottom: 18, opacity: 0.7 }}>{dict.eyebrow}</div>
            <h2 style={{ color: 'var(--accent-ink)', marginBottom: 18, fontSize: 'clamp(28px, 3.4vw, 40px)', lineHeight: 1.15 }}>
              {dict.h2}
            </h2>
            <p style={{ fontSize: 17, opacity: 0.78, maxWidth: 520, lineHeight: 1.5 }}>
              {dict.description}
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <Link href={BOOKING_URL} className="btn btn-dark">
              {dict.cta}
              <span className="arrow"><Icon name="arrow" size={12} /></span>
            </Link>
            <div className="mono" style={{ marginTop: 14, fontSize: 10.5, letterSpacing: 1.2, color: 'var(--accent-ink)', opacity: 0.65 }}>
              {dict.mono}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
