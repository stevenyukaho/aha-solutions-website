import type { Dictionary } from './types';

// English loaded statically — zero runtime overhead for the default locale
import enHome from './en/home';
import enCommon from './en/common';

const enDict: Dictionary = {
  home: enHome,
  nav: enCommon.nav,
  footer: enCommon.footer,
  common: enCommon.common,
};

export async function getDictionary(locale: string): Promise<Dictionary> {
  if (locale === 'zh-TW') {
    const [home, common] = await Promise.all([
      import('./zh-TW/home'),
      import('./zh-TW/common'),
    ]);
    return {
      home: home.default,
      nav: common.default.nav,
      footer: common.default.footer,
      common: common.default.common,
    };
  }

  if (locale === 'zh-CN') {
    const [home, common] = await Promise.all([
      import('./zh-CN/home'),
      import('./zh-CN/common'),
    ]);
    return {
      home: home.default,
      nav: common.default.nav,
      footer: common.default.footer,
      common: common.default.common,
    };
  }

  // Default: English
  return enDict;
}
