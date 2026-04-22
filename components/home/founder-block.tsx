import Image from 'next/image';
import { Eyebrow } from '@/components/primitives';
import { founderStats } from '@/lib/data';

export function FounderBlock() {
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
            <Eyebrow style={{ marginBottom: 14 }}>FOUNDER</Eyebrow>
            <h2 style={{ marginBottom: 20 }}>Steven Yu</h2>
            <p style={{ fontSize: 16, color: 'var(--text-2)', lineHeight: 1.6, marginBottom: 16, maxWidth: 540 }}>
              Built automation systems across multiple industries. Former CEO of a public-listed company.
            </p>
            <p style={{ fontSize: 16, color: 'var(--text-2)', lineHeight: 1.6, marginBottom: 28, maxWidth: 540 }}>
              Now focused on helping SMB founders scale without complexity.
            </p>
            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', paddingTop: 24, borderTop: '1px solid var(--line)' }}>
              {founderStats.map((s) => (
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
