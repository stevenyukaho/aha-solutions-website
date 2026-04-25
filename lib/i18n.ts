export type Locale = 'en' | 'zh-TW' | 'zh-CN';

export const locales: Locale[] = ['en', 'zh-TW', 'zh-CN'];

export const defaultLocale: Locale = 'en';

// Pages that have translated versions. Untranslated pages fall back to English.
// Used by both getLocalizedPath() and the language switcher.
export const translatedPaths = new Set(['/', '/systems', '/about', '/case-studies', '/book']);

/**
 * Returns the localised path for a given path and locale.
 * English stays at root: /path
 * Chinese gets a prefix: /zh-TW/path, /zh-CN/path
 * Untranslated pages fall back to the English (root) path.
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

  // Strip hash/anchor for translation check, but preserve it in output
  const hashIndex = normalised.indexOf('#');
  const basePath = hashIndex >= 0 ? normalised.slice(0, hashIndex) : normalised;

  // If this page isn't translated, fall back to English path
  if (!translatedPaths.has(basePath)) {
    return normalised;
  }

  // Root path edge case: /zh-TW/ → /zh-TW
  const base = normalised === '/' ? '' : normalised;
  return `/${locale}${base}`;
}
