import Image from 'next/image';

interface NavItem {
  label: string;
  href: string;
  disabled?: boolean;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/aha-solutions-systems/',
    disabled: false,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/ahasolutions/',
    disabled: false,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: 'Google Business',
    href: 'https://www.google.com/maps?cid=136428647385918777721',
    disabled: false,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C7.31 0 3.5 3.81 3.5 8.5c0 5.49 7.13 14.25 7.43 14.62a1.34 1.34 0 002.14 0c.3-.37 7.43-9.13 7.43-14.62C20.5 3.81 16.69 0 12 0zm0 12.75a4.25 4.25 0 110-8.5 4.25 4.25 0 010 8.5z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: '#',
    disabled: true,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
] as const;

const NAV_SECTIONS: NavSection[] = [
  {
    title: 'Systems',
    items: [
      { label: 'Lead Systems', href: '/systems#s1' },
      { label: 'Sales Systems', href: '/systems#s2' },
      { label: 'Operations Systems', href: '/systems#s3' },
      { label: 'AI Systems', href: '/systems' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'Case Studies', href: '/case-studies' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'Book a Call', href: '/book' },
      { label: 'About', href: '/about' },
      { label: 'Our Process', href: '/about' },
      { label: 'Contact', href: '/book', disabled: false },
    ],
  },
];

const iconBoxStyle: React.CSSProperties = {
  width: 28,
  height: 28,
  borderRadius: 6,
  border: '1px solid var(--line-2)',
  display: 'grid',
  placeItems: 'center',
  color: 'var(--text-3)',
};

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
            gap: 40,
            marginBottom: 48,
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 18 }}>
              <Image
                src="/aha-logo-full.png"
                alt="AHA Solutions"
                width={140}
                height={37}
                style={{ opacity: 1 }}
              />
            </div>
            <p
              style={{
                fontSize: 13,
                color: 'var(--text-3)',
                lineHeight: 1.5,
                maxWidth: 240,
              }}
            >
              We build AI systems that replace work for founders who need to scale without hiring.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
              {SOCIAL_LINKS.map((social) =>
                social.disabled ? (
                  <span
                    key={social.name}
                    aria-disabled="true"
                    aria-label={social.name}
                    style={{ ...iconBoxStyle, cursor: 'default', opacity: 0.4 }}
                  >
                    {social.icon}
                  </span>
                ) : (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    style={{ ...iconBoxStyle }}
                  >
                    {social.icon}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Nav columns */}
          {NAV_SECTIONS.map((section) => (
            <div key={section.title}>
              <div
                className="mono"
                style={{
                  fontSize: 10,
                  letterSpacing: 1.4,
                  color: 'var(--text-3)',
                  marginBottom: 16,
                }}
              >
                {section.title.toUpperCase()}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {section.items.map((item) =>
                  item.disabled ? (
                    <span
                      key={item.label}
                      aria-disabled="true"
                      style={{ fontSize: 13, color: 'var(--text-3)', cursor: 'default' }}
                    >
                      {item.label}
                    </span>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      style={{ fontSize: 13, color: 'var(--text-2)' }}
                    >
                      {item.label}
                    </a>
                  )
                )}
              </div>
            </div>
          ))}

        </div>

        {/* Contact row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontSize: 12,
            color: 'var(--text-3)',
            marginBottom: 24,
            flexWrap: 'wrap',
          }}
        >
          <a href="mailto:steven@ahasolutions.ca" style={{ color: 'var(--text-3)' }}>
            steven@ahasolutions.ca
          </a>
          <span aria-hidden="true">·</span>
          <a href="tel:+13435120207" style={{ color: 'var(--text-3)' }}>
            +1 343-512-0207
          </a>
          <span aria-hidden="true">·</span>
          <a
            href="https://wa.me/85268818681"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-3)' }}
          >
            WhatsApp (Int&apos;l): +852 6881 8681
          </a>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: 24,
            borderTop: '1px solid var(--line)',
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 11,
            color: 'var(--text-3)',
          }}
        >
          <span>© 2026 AHA Solutions Inc. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 20 }}>
            <a href="/privacy-policy" style={{ fontSize: 11, color: 'var(--text-3)' }}>Privacy Policy</a>
            <a href="/terms-and-conditions" style={{ fontSize: 11, color: 'var(--text-3)' }}>Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
