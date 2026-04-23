import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Instrument_Serif } from 'next/font/google';
import '../globals.css';
import { Nav } from '@/components/layout/nav';
import { Footer } from '@/components/layout/footer';
import { getDictionary } from '@/lib/dictionaries';
import { SITE_URL } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: 'AHA Solutions — %s',
    default: 'AHA Solutions — 为中小企业创始人打造的 AI 系统',
  },
  description:
    'AI 系统自动获取潜在客户、即时跟进、管理运营 — 助您无需增加人手即可扩展业务。',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: `${SITE_URL}/zh-CN`,
    siteName: 'AHA Solutions',
  },
  alternates: {
    languages: {
      'en': `${SITE_URL}/`,
      'zh-Hant': `${SITE_URL}/zh-TW/`,
      'zh-Hans': `${SITE_URL}/zh-CN/`,
      'x-default': `${SITE_URL}/`,
    },
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AHA Solutions',
  url: SITE_URL,
  description:
    'AI 系统自动获取潜在客户、即时跟进、管理运营 — 助您无需增加人手即可扩展业务。',
  founder: {
    '@type': 'Person',
    name: 'Steven Yu',
  },
};

export default async function ZhCNLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dict = await getDictionary('zh-CN');

  return (
    <html lang="zh-Hans">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        <Nav locale="zh-CN" dict={dict} />
        <main>{children}</main>
        <Footer locale="zh-CN" dict={dict} />
      </body>
    </html>
  );
}
