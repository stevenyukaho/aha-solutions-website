import Image from 'next/image';
import { Icon } from '@/components/primitives';
import type { AboutFounderDict } from '@/lib/dictionaries/types';
import type { FounderProofItem } from '@/lib/data';

interface Props {
  dict: AboutFounderDict;
  proof: FounderProofItem[];
}

export function AboutFounder({ dict, proof }: Props) {
  return (
    <div className="card" style={{ padding: '56px 48px', marginBottom: 20, background: 'linear-gradient(180deg, rgba(245,208,0,0.04), var(--bg-2))' }}>
      <div className="about-founder-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 0.8fr) minmax(0, 1.4fr)', gap: 56, alignItems: 'start' }}>
        {/* Portrait + proof bullets */}
        <div style={{ minWidth: 0 }}>
          <div style={{ aspectRatio: '1/1', borderRadius: 20, overflow: 'hidden', background: 'var(--accent)', border: '1px solid rgba(245,208,0,0.35)', marginBottom: 24, position: 'relative' }}>
            <Image
              src="/steven-yu.png"
              alt="Steven Yu"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {proof.map((p) => (
              <div key={p.label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 34, height: 34, borderRadius: 9, background: 'rgba(245,208,0,0.1)', color: 'var(--accent)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                  <Icon name={p.icon} size={14} />
                </span>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 13.5, color: 'var(--text)', fontWeight: 600, lineHeight: 1.2 }}>{p.label}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 2 }}>{p.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Story */}
        <div style={{ minWidth: 0 }}>
          <div className="mono" style={{ fontSize: 10.5, letterSpacing: 1.6, color: 'var(--accent)', marginBottom: 14 }}>{dict.eyebrow}</div>
          <p style={{ fontSize: 22, lineHeight: 1.35, color: 'var(--text)', margin: '0 0 28px 0', fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', maxWidth: 620, borderLeft: '3px solid var(--accent)', paddingLeft: 18 }}>
            {dict.quote}
          </p>
          <h2 style={{ fontSize: 'clamp(28px, 3.2vw, 40px)', lineHeight: 1.1, marginBottom: 28 }}>
            {dict.bio1}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, fontSize: 15.5, color: 'var(--text-2)', lineHeight: 1.65, maxWidth: 600 }}>
            <p style={{ margin: 0 }}>
              {dict.bio2}
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: '20px 0 24px', maxWidth: 600 }}>
            {dict.breaksList.map((t) => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14.5, color: 'var(--text)' }}>
                <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--accent)' }} />
                {t}
              </div>
            ))}
          </div>
          <p style={{ fontSize: 18, color: 'var(--text)', lineHeight: 1.45, margin: 0, fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', maxWidth: 600 }}>
            {dict.closing}
          </p>
        </div>
      </div>
    </div>
  );
}
