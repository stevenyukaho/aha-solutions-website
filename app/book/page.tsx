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
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px' }}>

          {/* 1. Eyebrow */}
          <Eyebrow style={{ marginBottom: 16 }}>FREE WORKFLOW AUDIT</Eyebrow>

          {/* 2. h1 */}
          <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.15, marginBottom: 20, maxWidth: 680 }}>
            Book your free workflow audit
          </h1>

          {/* 3. Subhead */}
          <p style={{ fontSize: 17, color: 'var(--text-2)', lineHeight: 1.6, maxWidth: 580, marginBottom: 36 }}>
            We&apos;ll map your workflow, identify where time and leads are being lost, and show you what to automate first.
          </p>

          {/* 4. Trust pills */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 28 }}>
            <span className="chip">40+ systems shipped</span>
            <span className="chip">14 days to go live</span>
            <span className="chip">No pitch. No pressure.</span>
          </div>

          {/* 5. Founder micro-line */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 48 }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 22,
              height: 22,
              borderRadius: '50%',
              background: 'var(--accent)',
              flexShrink: 0,
            }}>
              <Icon name="check" size={14} />
            </span>
            <span style={{ fontSize: 13, color: 'var(--text-3)' }}>
              Led by Steven Yu, former CEO turned systems builder.
            </span>
          </div>

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
