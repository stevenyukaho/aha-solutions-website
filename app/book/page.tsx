import type { Metadata } from 'next';
import { Eyebrow, Icon } from '@/components/primitives';
import { BookingEmbed } from '@/components/book/booking-embed';
import { BookingFAQ } from '@/components/book/booking-faq';

export const metadata: Metadata = {
  title: 'Book a Free Workflow Audit',
  description: "We'll map your workflow, find the gaps, and show you what to automate first.",
};

const faqItems = [
  {
    q: 'What happens on the call?',
    a: "We'll review your workflow, identify friction points, and show you what to automate first.",
  },
  {
    q: 'Is this a sales call?',
    a: "No. It's a practical workflow audit.",
  },
  {
    q: 'Do I need anything prepared?',
    a: 'Just bring your current process or biggest bottleneck.',
  },
];

export default function BookPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="section" style={{ background: 'var(--bg)', paddingBottom: 32 }}>
        {/* Hero header with centered layout + radial glow */}
        <div className="book-hero" style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative' }}>

          {/* Radial glow backdrop */}
          <div style={{
            position: 'absolute',
            top: '-60px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '700px',
            height: '400px',
            background: 'radial-gradient(ellipse at center, rgba(245,208,0,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0,
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            {/* 1. Eyebrow with accent bar */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
              <span style={{ width: 20, height: 1, background: 'var(--accent)', display: 'block' }} />
              <Eyebrow>FREE WORKFLOW AUDIT</Eyebrow>
              <span style={{ width: 20, height: 1, background: 'var(--accent)', display: 'block' }} />
            </div>

            {/* 2. h1 — commanding presence */}
            <h1 style={{
              fontSize: 'clamp(32px, 4.5vw, 52px)',
              lineHeight: 1.1,
              marginBottom: 20,
              maxWidth: 680,
              margin: '0 auto 20px',
              letterSpacing: '-0.03em',
              fontWeight: 700,
            }}>
              Book your free<br />
              <span className="serif" style={{ fontStyle: 'italic', color: 'var(--accent)' }}>workflow audit</span>
            </h1>

            {/* 3. Subhead */}
            <p style={{
              fontSize: 17,
              color: 'var(--text-2)',
              lineHeight: 1.7,
              maxWidth: 500,
              margin: '0 auto 40px',
            }}>
              We&apos;ll map your workflow, identify where time and leads are being lost, and show you what to automate first.
            </p>

            {/* 4. Trust pills — with accent dots */}
            <div style={{
              display: 'flex',
              gap: 12,
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginBottom: 28,
            }}>
              {['40+ systems shipped', '14 days to go live', 'No pitch. No pressure.'].map((text) => (
                <span key={text} className="chip" style={{ gap: 8 }}>
                  <span className="dot" style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                  {text}
                </span>
              ))}
            </div>

            {/* 5. Founder micro-line — refined pill */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 48,
              padding: '8px 16px',
              borderRadius: 999,
              background: 'rgba(245,208,0,0.04)',
              border: '1px solid rgba(245,208,0,0.1)',
            }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 18,
                height: 18,
                borderRadius: '50%',
                background: 'var(--accent)',
                flexShrink: 0,
              }}>
                <Icon name="check" size={11} />
              </span>
              <span style={{ fontSize: 12, color: 'var(--text-3)', letterSpacing: '0.01em' }}>
                Led by Steven Yu, former CEO turned systems builder.
              </span>
            </div>
          </div>
        </div>

        {/* Content below hero — left-aligned, narrower */}
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px' }}>

          {/* 6. Booking embed */}
          <div style={{ marginBottom: 48 }}>
            <BookingEmbed />
          </div>

          {/* 7. Reassurance */}
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--text)', marginBottom: 8 }}>
              No commitment. Just clarity.
            </p>
            <p style={{ fontSize: 14, color: 'var(--text-3)' }}>
              You&apos;ll leave the call knowing exactly what to automate first.
            </p>
          </div>

          {/* 8. FAQ accordion */}
          <div style={{ marginBottom: 48 }}>
            <BookingFAQ />
          </div>

          {/* 9. Contact fallback */}
          <div style={{ textAlign: 'center', paddingBottom: 16 }}>
            <p style={{ fontSize: 14, color: 'var(--text-3)' }}>
              Still have questions?{' '}
              <a
                href="mailto:steven@ahasolutions.ca"
                style={{ color: 'var(--accent)', textDecoration: 'underline' }}
              >
                Email us at steven@ahasolutions.ca
              </a>
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
