'use client';
import { useEffect } from 'react';

export function BookingEmbed() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.ahasolutions.ca/js/form_embed.js';
    script.type = 'text/javascript';
    document.body.appendChild(script);
    return () => { script.remove(); };
  }, []);

  return (
    <div>
      <div style={{ minHeight: 700, borderRadius: 14, overflow: 'hidden', border: '1px solid var(--line)' }}>
        <iframe
          src="https://link.ahasolutions.ca/widget/booking/1rZL9d244vgPWSCvb1tY"
          style={{ width: '100%', border: 'none', overflow: 'hidden' }}
          scrolling="no"
          id="3kjcPw4SeMgY1WWBvxf9_1776888465233"
        />
      </div>
      <a
        href="https://link.ahasolutions.ca/widget/bookings/discovery-call-with-steven-yu"
        style={{ display: 'block', textAlign: 'center', marginTop: 12, fontSize: 13, color: 'var(--text-3)' }}
      >
        Book directly →
      </a>
    </div>
  );
}
