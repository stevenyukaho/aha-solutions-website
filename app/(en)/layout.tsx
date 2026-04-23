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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AHA Solutions",
  url: SITE_URL,
  description:
    "AI systems that capture leads, follow up instantly, and run your operations — so you can scale without adding headcount.",
  founder: {
    "@type": "Person",
    name: "Steven Yu",
  },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
