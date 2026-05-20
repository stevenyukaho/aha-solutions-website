'use client';

import { useState } from 'react';
import type { FaqItem } from '@/lib/data';
import type { FaqSectionDict } from '@/lib/dictionaries/types';

interface FaqSectionProps {
  dict: FaqSectionDict;
  items: FaqItem[];
}

export function FaqSection({ dict, items }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="section faq-section"
      aria-labelledby={dict.sectionId}
    >
      <div className="wrap">
        <h2 id={dict.sectionId} className="faq-heading" style={{ marginBottom: 32 }}>
          {dict.heading}
        </h2>

        <ul className="faq-list" role="list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {items.map((it, i) => {
            const isOpen = openIndex === i;
            const buttonId = `faq-q-${i}`;
            const regionId = `faq-a-${i}`;
            return (
              <li key={it.q} className="faq-item" style={{ borderBottom: '1px solid var(--line)' }}>
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={regionId}
                  className="faq-question"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    padding: '22px 4px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'transparent',
                    border: 0,
                    cursor: 'pointer',
                    font: 'inherit',
                    color: 'inherit',
                    textAlign: 'left',
                  }}
                >
                  <span className="faq-q-text" style={{ fontSize: 16, fontWeight: 500 }}>{it.q}</span>
                  <span className="faq-q-icon" aria-hidden="true" style={{ fontSize: 24, marginLeft: 16, color: 'var(--text-3)' }}>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div
                  id={regionId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="faq-answer"
                  style={{ padding: '0 4px 22px', maxWidth: 760, lineHeight: 1.6, color: 'var(--text-2)' }}
                >
                  <p style={{ margin: 0 }}>{it.a}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
