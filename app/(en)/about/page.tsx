import type { Metadata } from 'next';
import { getDictionary } from '@/lib/dictionaries';
import { getLocalizedData } from '@/lib/data-i18n';
import { AboutHero } from '@/components/about/about-hero';
import { ShiftSection } from '@/components/about/shift-section';
import { WhatAndHow } from '@/components/about/what-and-how';
import { AboutFounder } from '@/components/about/about-founder';
import { DifferentStrip } from '@/components/about/different-strip';
import { AboutProofStrip } from '@/components/about/about-proof-strip';
import { WhoThisIsFor } from '@/components/about/who-this-is-for';
import { AboutFinalCTA } from '@/components/about/about-final-cta';

export const metadata: Metadata = {
  title: 'About',
  description: 'Built by an operator, not an agency. AHA Solutions builds AI systems that replace repetitive work.',
  alternates: {
    languages: {
      'en': '/about',
      'zh-Hant': '/zh-TW/about',
      'zh-Hans': '/zh-CN/about',
    },
  },
};

export default async function AboutPage() {
  const dict = await getDictionary('en');
  const data = getLocalizedData('en');
  const about = dict.about!;

  return (
    <>
      <AboutHero dict={about.hero} />
      <div className="wrap">
      <ShiftSection dict={about.shift} rows={data.shiftRows} />
      <WhatAndHow dict={about.whatAndHow} whatItems={data.whatAhaDoesItems} howItems={data.howIThinkItems} />
      <AboutFounder dict={about.founder} proof={data.founderProof} />
      <DifferentStrip dict={about.different} items={data.differentItems} />
      <AboutProofStrip stats={data.aboutProofStats} />
      <WhoThisIsFor dict={about.whoThisIsFor} bullets={data.whoThisIsForBullets} />
      <AboutFinalCTA dict={about.finalCta} />
      </div>
    </>
  );
}
