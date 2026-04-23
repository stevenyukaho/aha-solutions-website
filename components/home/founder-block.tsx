import Image from 'next/image';
import { Eyebrow } from '@/components/primitives';
import { founderStats as defaultFounderStats } from '@/lib/data';
import type { StatItem } from '@/lib/data';
import type { FounderBlockDict } from '@/lib/dictionaries/types';

interface FounderBlockProps {
  dict?: FounderBlockDict;
  stats?: StatItem[];
}

const defaultDict: FounderBlockDict = {
  eyebrow: 'FOUNDER',
  h2: 'Steven Yu',
  bio1: 'Built automation systems across multiple industries. Former CEO of a public-listed company.',
  bio2: 'Now focused on helping SMB founders scale without complexity.',
};

export function FounderBlock({ dict = defaultDict, stats = defaultFounderStats }: FounderBlockProps) {
  return (
    <section className="section" style={{ background: 'var(--bg-2)' }}>
      <div className="wrap">
        <div className="founder-grid" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.2fr', gap: 56, alignItems: 'center' }}>
          <div>
            <div style={{ width: '100%', aspectRatio: '4/5', borderRadius: 20, background: 'linear-gradient(135deg, #1a1a1c, #0e0e10)', border: '1px solid var(--line)', position: 'relative', overflow: 'hidden' }}>
              <Image
                src="/steven-yu.png"
                alt="Steven Yu"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          <div>
            <Eyebrow style={{ marginBottom: 14 }}>{dict.eyebrow}</Eyebrow>
            <h2 style={{ marginBottom: 20 }}>{dict.h2}</h2>
            <p style={{ fontSize: 16, color: 'var(--text-2)', lineHeight: 1.6, marginBottom: 16, maxWidth: 540 }}>
              {dict.bio1}
            </p>
            <p style={{ fontSize: 16, color: 'var(--text-2)', lineHeight: 1.6, marginBottom: 28, maxWidth: 540 }}>
              {dict.bio2}
            </p>
            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', paddingTop: 24, borderTop: '1px solid var(--line)' }}>
              {stats.map((s) => (
                <div key={s.l}>
                  <div style={{ fontSize: 26, fontWeight: 600, letterSpacing: -1, color: 'var(--accent)', lineHeight: 1 }}>{s.v}</div>
                  <div className="mono" style={{ fontSize: 10, color: 'var(--text-3)', marginTop: 6, letterSpacing: 1.2 }}>{s.l.toUpperCase()}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
