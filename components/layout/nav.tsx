import Image from 'next/image';
import Link from 'next/link';
import { BtnPrimary } from '@/components/primitives/btn-primary';
import { BOOKING_URL } from '@/lib/constants';
import { getDictionary } from '@/lib/dictionaries';
import { getLocalizedPath } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries/types';
import { LanguageSwitcher } from './language-switcher';

interface NavProps {
  locale?: Locale;
  dict?: Dictionary;
}

export async function Nav({ locale = 'en', dict }: NavProps) {
  const resolvedDict = dict ?? (await getDictionary(locale));

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
          href={getLocalizedPath('/', locale)}
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
            style={{ opacity: 1 }}
            priority
          />
        </Link>
      </div>

      {/* Nav links */}
      <div
        className="hide-md nav-links"
        style={{ gap: 28, fontSize: 13, color: 'var(--text-2)' }}
      >
        <Link href={getLocalizedPath('/systems', locale)} style={{ color: 'var(--text-2)', textDecoration: 'none' }}>
          {resolvedDict.nav.systems}
        </Link>
        <Link href={getLocalizedPath('/case-studies', locale)} style={{ color: 'var(--text-2)', textDecoration: 'none' }}>
          {resolvedDict.nav.caseStudies}
        </Link>
        <Link href={getLocalizedPath('/about', locale)} style={{ color: 'var(--text-2)', textDecoration: 'none' }}>
          {resolvedDict.nav.about}
        </Link>
      </div>

      {/* Language Switcher + CTA */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <LanguageSwitcher />
        <BtnPrimary href={getLocalizedPath(BOOKING_URL, locale)} size="sm">
          {resolvedDict.nav.cta}
        </BtnPrimary>
      </div>
    </nav>
  );
}
