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
    default: 'AHA Solutions — 為中小企業創辦人打造的 AI 系統',
  },
  description:
    'AI 系統自動獲取潛客、即時跟進、管理營運 — 助您無需增加人手即可擴展業務。',
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    url: `${SITE_URL}/zh-TW`,
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
    'AI 系統自動獲取潛客、即時跟進、管理營運 — 助您無需增加人手即可擴展業務。',
  founder: {
    '@type': 'Person',
    name: 'Steven Yu',
  },
};

export default async function ZhTWLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dict = await getDictionary('zh-TW');

  return (
    <html lang="zh-Hant">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        <Nav locale="zh-TW" dict={dict} />
        <main>{children}</main>
        <Footer locale="zh-TW" dict={dict} />
      </body>
    </html>
  );
}
