import type { Metadata } from 'next';
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
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <div className="wrap">
      <ShiftSection />
      <WhatAndHow />
      <AboutFounder />
      <DifferentStrip />
      <AboutProofStrip />
      <WhoThisIsFor />
      <AboutFinalCTA />
      </div>
    </>
  );
}
