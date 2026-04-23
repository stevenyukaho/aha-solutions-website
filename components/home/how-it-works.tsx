import { Icon, Eyebrow } from '@/components/primitives';
import { howItWorksSteps } from '@/lib/data';
import type { HowItWorksStep } from '@/lib/data';
import type { HowItWorksDict } from '@/lib/dictionaries/types';

interface HowItWorksProps {
  dict?: HowItWorksDict;
  steps?: HowItWorksStep[];
}

const defaultDict: HowItWorksDict = {
  eyebrow: 'HOW IT WORKS',
  phaseMap: 'Map',
  phaseSeparator: '→',
  phaseBuild: 'Build',
  phaseRun: 'Run',
};

export function HowItWorks({ dict = defaultDict, steps = howItWorksSteps }: HowItWorksProps) {
  return (
    <section id="how-it-works" className="section">
      <div className="wrap">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <Eyebrow style={{ marginBottom: 14 }}>{dict.eyebrow}</Eyebrow>
          <h2>
            {dict.phaseMap}{' '}
            <span style={{ color: 'var(--text-3)' }}>{dict.phaseSeparator}</span>{' '}
            {dict.phaseBuild}{' '}
            <span style={{ color: 'var(--text-3)' }}>{dict.phaseSeparator}</span>{' '}
            {dict.phaseRun}
          </h2>
        </div>

        <div className="how-it-works-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {steps.map((s) => (
            <div key={s.n} className="card" style={{ padding: 32, position: 'relative', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <span className="mono" style={{ fontSize: 10, color: 'var(--text-3)', letterSpacing: 1.4 }}>{s.n}</span>
                <span style={{ flex: 1, height: 1, background: 'var(--line)' }} />
                <span style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(245,208,0,0.1)', color: 'var(--accent)', display: 'grid', placeItems: 'center' }}>
                  <Icon name={s.icon} size={16} />
                </span>
              </div>
              <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: -1, marginBottom: 10 }}>{s.label}</div>
              <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 10, color: 'var(--text)' }}>{s.title}</div>
              <div style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.55 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
