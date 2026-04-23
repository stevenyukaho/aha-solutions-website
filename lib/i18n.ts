export type Locale = 'en' | 'zh-TW' | 'zh-CN';

export const locales: Locale[] = ['en', 'zh-TW', 'zh-CN'];

export const defaultLocale: Locale = 'en';

/**
 * Returns the localised path for a given path and locale.
 * English stays at root: /path
 * Chinese gets a prefix: /zh-TW/path, /zh-CN/path
 */
export function getLocalizedPath(path: string, locale: Locale): string {
  // Normalise: ensure leading slash, strip trailing slash (except root)
  const normalised = path.startsWith('/') ? path : `/${path}`;

  if (locale === 'en') {
    return normalised;
  }

  // Avoid double-prefixing if path already has locale segment
  if (normalised.startsWith(`/${locale}`)) {
    return normalised;
  }

  // Root path edge case: /zh-TW/ → /zh-TW
  const base = normalised === '/' ? '' : normalised;
  return `/${locale}${base}`;
}
