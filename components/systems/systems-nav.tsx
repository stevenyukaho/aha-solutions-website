'use client';

import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { id: 's1', label: '01 · Lead Capture' },
  { id: 's2', label: '02 · Sales Follow-up' },
  { id: 's3', label: '03 · Operations' },
  { id: 's4', label: '04 · Client Onboarding' },
  { id: 's5', label: '05 · End-to-End' },
];

export function SystemsNav() {
  const [active, setActive] = useState('s1');

  useEffect(() => {
    const sections = NAV_ITEMS.map((it) => document.getElementById(it.id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 10, background: 'rgba(11,11,12,0.85)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--line)' }}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '14px 0', overflowX: 'auto' }}>
        <span className="mono" style={{ fontSize: 10, letterSpacing: 1.4, color: 'var(--text-3)', marginRight: 8, whiteSpace: 'nowrap' }}>JUMP TO</span>
        {NAV_ITEMS.map((it) => (
          <a
            key={it.id}
            href={`#${it.id}`}
            style={{
              padding: '6px 12px',
              borderRadius: 999,
              border: '1px solid var(--line-2)',
              fontSize: 12,
              color: active === it.id ? 'var(--accent-ink)' : 'var(--text-2)',
              background: active === it.id ? 'var(--accent)' : 'transparent',
              whiteSpace: 'nowrap',
              textDecoration: 'none',
              fontWeight: active === it.id ? 600 : 500,
            }}
          >
            {it.label}
          </a>
        ))}
      </div>
    </div>
  );
}
