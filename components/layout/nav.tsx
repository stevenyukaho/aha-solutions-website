import Image from 'next/image';
import Link from 'next/link';
import { BtnPrimary } from '@/components/primitives/btn-primary';
import { Icon } from '@/components/primitives/icon';
import { BOOKING_URL } from '@/lib/constants';

export function Nav() {
  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '24px 0',
      }}
      className="wrap"
    >
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <Image
            src="/aha-logo-full.png"
            alt="AHA Solutions"
            width={160}
            height={43}
            style={{ filter: 'invert(1)', mixBlendMode: 'screen' }}
            priority
          />
        </Link>
      </div>

      {/* Nav links */}
      <div
        className="hide-md nav-links"
        style={{ gap: 28, fontSize: 13, color: 'var(--text-2)' }}
      >
        <Link href="/systems" style={{ color: 'var(--text-2)', textDecoration: 'none' }}>
          Systems
        </Link>
        <Link href="/case-studies" style={{ color: 'var(--text-2)', textDecoration: 'none' }}>
          Case Studies
        </Link>
        <Link href="/about" style={{ color: 'var(--text-2)', textDecoration: 'none' }}>
          About
        </Link>
        {/* Resources — disabled, not yet implemented */}
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
            cursor: 'default',
            opacity: 0.5,
          }}
          aria-disabled="true"
        >
          Resources <Icon name="plus" size={10} />
        </span>
      </div>

      {/* CTA */}
      <BtnPrimary href={BOOKING_URL} size="sm">
        Book a free workflow audit
      </BtnPrimary>
    </nav>
  );
}
