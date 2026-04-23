'use client';

import { usePathname } from 'next/navigation';
import type { Locale } from '@/lib/i18n';
import { locales, getLocalizedPath } from '@/lib/i18n';

// Only the homepage is translated in Phase 1
const translatedPaths = ['/'];

function isTranslated(path: string): boolean {
  // Strip locale prefix to get base path
  const basePath = path.replace(/^\/(zh-TW|zh-CN)/, '') || '/';
  return translatedPaths.includes(basePath);
}

function getCurrentLocale(pathname: string): Locale {
  if (pathname.startsWith('/zh-TW')) return 'zh-TW';
  if (pathname.startsWith('/zh-CN')) return 'zh-CN';
  return 'en';
}

function getBasePath(pathname: string): string {
  return pathname.replace(/^\/(zh-TW|zh-CN)/, '') || '/';
}

const localeLabels: Record<Locale, string> = {
  en: 'EN',
  'zh-TW': '繁',
  'zh-CN': '简',
};

export function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale = getCurrentLocale(pathname);
  const basePath = getBasePath(pathname);
  const translated = isTranslated(pathname);

  return (
    <nav
      aria-label="Language switcher"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 0,
        fontFamily: 'var(--font-jetbrains-mono, monospace)',
        fontSize: '12px',
        letterSpacing: '0.02em',
      }}
    >
      {locales.map((locale, index) => {
        const isCurrent = locale === currentLocale;

        // Build the target href
        let href: string;
        if (translated) {
          // Page exists in this locale — link to equivalent path
          href = getLocalizedPath(basePath, locale);
        } else {
          // Page not translated — link to homepage in that locale
          href = getLocalizedPath('/', locale);
        }

        return (
          <span key={locale} style={{ display: 'flex', alignItems: 'center' }}>
            {index > 0 && (
              <span
                aria-hidden="true"
                style={{
                  margin: '0 4px',
                  color: 'var(--text-3, #9ca3af)',
                  userSelect: 'none',
                }}
              >
                /
              </span>
            )}
            <a
              href={href}
              aria-current={isCurrent ? 'true' : undefined}
              aria-label={`Switch to ${locale === 'en' ? 'English' : locale === 'zh-TW' ? 'Traditional Chinese' : 'Simplified Chinese'}`}
              style={{
                color: isCurrent
                  ? 'var(--text-1, #111827)'
                  : 'var(--text-3, #9ca3af)',
                textDecoration: isCurrent ? 'underline' : 'none',
                textUnderlineOffset: '3px',
                fontWeight: isCurrent ? 600 : 400,
                transition: 'color 0.15s ease',
                cursor: isCurrent ? 'default' : 'pointer',
              }}
            >
              {localeLabels[locale]}
            </a>
          </span>
        );
      })}
    </nav>
  );
}
