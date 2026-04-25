import type { Metadata } from 'next';
import { getDictionary } from '@/lib/dictionaries';
import { getLocalizedData } from '@/lib/data-i18n';
import { Eyebrow, Icon } from '@/components/primitives';
import { BookingEmbed } from '@/components/book/booking-embed';
import { BookingFAQ } from '@/components/book/booking-faq';
import { HeroBackground } from '@/components/home/hero-background';

export const metadata: Metadata = {
  title: '预约免费流程审查 — AHA Solutions',
  description: '我们将规划您的工作流程，找出时间和潜客流失的环节，并告诉您优先自动化什么。',
  alternates: {
    languages: {
      'en': '/book',
      'zh-Hant': '/zh-TW/book',
      'zh-Hans': '/zh-CN/book',
    },
  },
};

export default async function ZhCNBookPage() {
  const dict = await getDictionary('zh-CN');
  const data = getLocalizedData('zh-CN');
  const book = dict.book!;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.bookFaqItems.map((item) => ({
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
      <section className="section" style={{ background: 'var(--bg)', paddingBottom: 32, position: 'relative', overflow: 'hidden' }}>
        <HeroBackground />
        {/* Hero header with centered layout */}
        <div className="book-hero" style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative', zIndex: 1 }}>

          <div>
            {/* 1. Eyebrow with accent bar */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
              <span style={{ width: 20, height: 1, background: 'var(--accent)', display: 'block' }} />
              <Eyebrow>{book.eyebrow}</Eyebrow>
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
              {book.h1Line1}<br />
              <span className="serif" style={{ fontStyle: 'italic', color: 'var(--accent)' }}>{book.h1Line2}</span>
            </h1>

            {/* 3. Subhead */}
            <p style={{
              fontSize: 17,
              color: 'var(--text-2)',
              lineHeight: 1.7,
              maxWidth: 500,
              margin: '0 auto 40px',
            }}>
              {book.subtitle}
            </p>

            {/* 4. Trust pills — with accent dots */}
            <div style={{
              display: 'flex',
              gap: 12,
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginBottom: 28,
            }}>
              {book.trustPills.map((text) => (
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
                {book.founderLine}
              </span>
            </div>
          </div>
        </div>

        {/* Content below hero — left-aligned, narrower */}
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px' }}>

          {/* 6. Booking embed */}
          <div style={{ marginBottom: 48 }}>
            <BookingEmbed cta={book.embedCta} />
          </div>

          {/* 7. Reassurance */}
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--text)', marginBottom: 8 }}>
              {book.reassuranceH2}
            </p>
            <p style={{ fontSize: 14, color: 'var(--text-3)' }}>
              {book.reassuranceSub}
            </p>
          </div>

          {/* 8. FAQ accordion */}
          <div style={{ marginBottom: 48 }}>
            <BookingFAQ items={data.bookFaqItems} />
          </div>

          {/* 9. Contact fallback */}
          <div style={{ textAlign: 'center', paddingBottom: 16 }}>
            <p style={{ fontSize: 14, color: 'var(--text-3)' }}>
              {book.contactFallback}{' '}
              <a
                href={`mailto:${book.contactEmail}`}
                style={{ color: 'var(--accent)', textDecoration: 'underline' }}
              >
                {book.contactEmail}
              </a>
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
