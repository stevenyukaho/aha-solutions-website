import { logosData } from '@/lib/data';

export function LogosStrip() {
  return (
    <section className="section tight" style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="wrap">
        <div style={{ textAlign: 'center', marginBottom: 28, fontSize: 12, color: 'var(--text-3)' }}>Industries we&apos;ve built systems for</div>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: 36, opacity: 0.7 }}>
          {logosData.map((l) => (
            <span key={l} style={{ fontSize: 22, fontWeight: 600, letterSpacing: -0.5, color: 'var(--text-2)' }}>{l}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
