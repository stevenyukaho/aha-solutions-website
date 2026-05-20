import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "../globals.css";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { SITE_URL } from "@/lib/constants";
import { getDictionary } from "@/lib/dictionaries";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "AHA Solutions — %s",
    default: "AHA Solutions — AI Systems for SMB Founders",
  },
  description:
    "AI systems that capture leads, follow up instantly, and run your operations — so you can scale without adding headcount.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "AHA Solutions",
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      'x-default': SITE_URL,
      'en': SITE_URL,
      'zh-Hant': `${SITE_URL}/zh-TW`,
      'zh-Hans': `${SITE_URL}/zh-CN`,
    },
  },
};

const siteGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'AHA Solutions & Systems Inc.',
      alternateName: 'AHA Solutions',
      url: SITE_URL,
      logo: `${SITE_URL}/aha-logo-full.png`,
      description:
        'AI systems that capture leads, follow up instantly, and run your operations — so you can scale without adding headcount.',
      founder: { '@id': `${SITE_URL}/about#steven-yu` },
      areaServed: ['CA', 'HK'],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        url: `${SITE_URL}/book`,
      },
      sameAs: [
        'https://www.linkedin.com/company/104468646/',
      ],
      // address intentionally omitted (Phase 1 decision); add when public business address is settled.
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'AHA Solutions',
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: ['en', 'zh-TW', 'zh-CN'],
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/about#steven-yu`,
      name: 'Steven Yu',
      jobTitle: 'Founder & CEO',
      worksFor: { '@id': `${SITE_URL}/#organization` },
      description:
        'Former CEO of a publicly-listed company. 15+ years leadership experience. Has shipped 40+ automation systems for SMB founders.',
      image: `${SITE_URL}/steven-yu.png`,
      url: `${SITE_URL}/about`,
    },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dict = await getDictionary('en');

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteGraph) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        <Nav locale="en" dict={dict} />
        <main>{children}</main>
        <Footer locale="en" dict={dict} />
      </body>
    </html>
  );
}
