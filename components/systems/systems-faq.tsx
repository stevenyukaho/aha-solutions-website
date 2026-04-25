'use client';

import { useState } from 'react';
import { Icon, Eyebrow } from '@/components/primitives';
import type { FaqItem } from '@/lib/data';
import type { SystemsFaqDict } from '@/lib/dictionaries/types';

export function SystemsFAQ({ dict, items }: { dict: SystemsFaqDict; items: FaqItem[] }) {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="section" style={{ background: 'var(--bg-2)' }}>
      <div className="wrap">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <Eyebrow style={{ marginBottom: 12 }}>{dict.eyebrow}</Eyebrow>
          <h2>{dict.h2}</h2>
        </div>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          {items.map((item, i) => (
            <div key={item.q} style={{ borderTop: '1px solid var(--line)' }}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                style={{
                  width: '100%',
                  padding: '22px 4px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text)',
                  fontSize: 16,
                  fontWeight: 500,
                  textAlign: 'left',
                  cursor: 'pointer',
                }}
              >
                <span>{item.q}</span>
                <span
                  style={{
                    color: 'var(--accent)',
                    transform: open === i ? 'rotate(45deg)' : 'rotate(0)',
                    transition: 'transform .2s',
                  }}
                >
                  <Icon name="plus" size={16} />
                </span>
              </button>
              {open === i && (
                <div style={{ padding: '0 4px 22px', fontSize: 14, color: 'var(--text-2)', lineHeight: 1.6, maxWidth: 640 }}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--line)' }} />
        </div>
      </div>
    </section>
  );
}
