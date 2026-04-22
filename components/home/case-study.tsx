import { Icon, Eyebrow, BtnGhost } from '@/components/primitives';
import { caseStudyBefore, caseStudyAfter } from '@/lib/data';

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

        <div className="case-study-bottom" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 24, marginTop: 28, alignItems: 'center' }}>
          <div>
            <BtnGhost size="sm">View full case study</BtnGhost>
          </div>
          <div />
          <div className="card" style={{ padding: 20, borderLeft: '3px solid var(--accent)' }}>
            <div className="serif" style={{ fontSize: 18, lineHeight: 1.3, fontStyle: 'italic', marginBottom: 14 }}>
              &ldquo;Our content creation costs have dropped significantly. The system generates multilingual content while maintaining our brand voice.&rdquo;
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 999, background: 'linear-gradient(135deg, #6a5acd, #8a7fea)', display: 'grid', placeItems: 'center', fontSize: 13, fontWeight: 600 }}>C</div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600 }}>CEO</div>
                <div className="mono" style={{ fontSize: 10, color: 'var(--text-3)', letterSpacing: 1 }}>EDUCATION CONSULTING COMPANY</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
