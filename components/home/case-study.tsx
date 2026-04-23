import { Icon, Eyebrow } from '@/components/primitives';
import { caseStudyBefore, caseStudyAfter, testimonials } from '@/lib/data';

const avatarGradients: Record<string, string> = {
  M: 'linear-gradient(135deg, #6a5acd, #8a7fea)',
  K: 'linear-gradient(135deg, #5a8acd, #7fb8ea)',
  B: 'linear-gradient(135deg, #cd5a6a, #ea7f8a)',
};

export function CaseStudy() {
  return (
    <section className="section">
      <div className="wrap">
        <Eyebrow style={{ marginBottom: 12 }}>CASE STUDY</Eyebrow>
        <h2 style={{ marginBottom: 32, maxWidth: 820 }}>Response time dropped 80%. They stopped hiring and started closing.</h2>

        <div className="case-study-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 24, alignItems: 'center' }}>
          {/* Before */}
          <div className="card" style={{ padding: 20 }}>
            <div className="mono" style={{ fontSize: 10, letterSpacing: 1.4, color: 'var(--text-3)', marginBottom: 14 }}>BEFORE</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {caseStudyBefore.map((t) => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'var(--text-2)' }}>
                  <span style={{ width: 22, height: 22, borderRadius: 6, background: 'rgba(255,120,120,0.1)', color: '#ff9e9e', display: 'grid', placeItems: 'center' }}>
                    <Icon name="x" size={12} />
                  </span>
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Stat */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 56, fontWeight: 700, color: 'var(--accent)', letterSpacing: -2, lineHeight: 0.9 }}>80%</div>
            <div className="mono" style={{ fontSize: 10, letterSpacing: 1.4, color: 'var(--text-3)', marginTop: 8 }}>FASTER RESPONSE TIME</div>
          </div>

          {/* After */}
          <div className="card" style={{ padding: 20, borderColor: 'rgba(245,208,0,0.35)', background: 'linear-gradient(180deg, rgba(245,208,0,0.06), transparent)' }}>
            <div className="mono" style={{ fontSize: 10, letterSpacing: 1.4, color: 'var(--accent)', marginBottom: 14 }}>AFTER</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {caseStudyAfter.map((t) => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'var(--text)' }}>
                  <span style={{ width: 22, height: 22, borderRadius: 6, background: 'rgba(125,224,143,0.12)', color: 'var(--success)', display: 'grid', placeItems: 'center' }}>
                    <Icon name="check" size={12} />
                  </span>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div style={{ marginTop: 80 }}>
          <Eyebrow style={{ marginBottom: 12 }}>TESTIMONIALS</Eyebrow>
          <h2 style={{ marginBottom: 32 }}>Real results from real founders</h2>

          <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {testimonials.map((t) => (
              <div key={t.name} className="card" style={{ padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div className="serif" style={{ fontSize: 16, lineHeight: 1.5, fontStyle: 'italic', color: 'var(--text-2)', marginBottom: 24 }}>
                  &ldquo;{t.quote}&rdquo;
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 40,
                    height: 40,
                    borderRadius: 999,
                    background: avatarGradients[t.initial] ?? 'linear-gradient(135deg, #6a5acd, #8a7fea)',
                    display: 'grid',
                    placeItems: 'center',
                    fontSize: 14,
                    fontWeight: 600,
                    color: 'white',
                  }}>
                    {t.initial}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>{t.name}</div>
                    <div className="mono" style={{ fontSize: 10, color: 'var(--text-3)', letterSpacing: 1 }}>
                      {t.title.toUpperCase()}, {t.company.toUpperCase()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
