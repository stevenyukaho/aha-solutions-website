import type { Dictionary } from './types';

// English loaded statically — zero runtime overhead for the default locale
import enHome from './en/home';
import enCommon from './en/common';
import enSystems from './en/systems';
import enAbout from './en/about';
import enCases from './en/cases';
import enBook from './en/book';

const enDict: Dictionary = {
  home: enHome,
  nav: enCommon.nav,
  footer: enCommon.footer,
  common: enCommon.common,
  systems: enSystems,
  about: enAbout,
  cases: enCases,
  book: enBook,
};

export async function getDictionary(locale: string): Promise<Dictionary> {
  if (locale === 'zh-TW') {
    const [home, common, systems, about, cases, book] = await Promise.all([
      import('./zh-TW/home'),
      import('./zh-TW/common'),
      import('./zh-TW/systems'),
      import('./zh-TW/about'),
      import('./zh-TW/cases'),
      import('./zh-TW/book'),
    ]);
    return {
      home: home.default,
      nav: common.default.nav,
      footer: common.default.footer,
      common: common.default.common,
      systems: systems.default,
      about: about.default,
      cases: cases.default,
      book: book.default,
    };
  }

  if (locale === 'zh-CN') {
    const [home, common, systems, about, cases, book] = await Promise.all([
      import('./zh-CN/home'),
      import('./zh-CN/common'),
      import('./zh-CN/systems'),
      import('./zh-CN/about'),
      import('./zh-CN/cases'),
      import('./zh-CN/book'),
    ]);
    return {
      home: home.default,
      nav: common.default.nav,
      footer: common.default.footer,
      common: common.default.common,
      systems: systems.default,
      about: about.default,
      cases: cases.default,
      book: book.default,
    };
  }

  // Default: English
  return enDict;
}
