import { Node } from '@/components/primitives';

export function HeroDiagram() {
  return (
    <div className="diagram-panel">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <span className="pulse" />
          <span className="mono" style={{ fontSize: 10, letterSpacing: 1.4, color: 'var(--text-3)' }}>LIVE SYSTEM · AHA-ROUTER</span>
        </div>
        <span className="mono" style={{ fontSize: 10, color: 'var(--success)', letterSpacing: 1 }}>● ONLINE</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <Node icon="globe" label="Ad / Website" sub="LEAD" />
        <Node icon="sparkle" label="AI Agent" sub="INSTANT REPLY · <60s" accent pulse />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 12, position: 'relative' }}>
        {/* connecting lines illusion via dashed divider */}
        <div style={{ position: 'absolute', top: -12, left: '25%', right: '25%', borderTop: '1px dashed var(--line-2)' }} />
        <Node icon="user" label="Customer" sub="RETURN" />
        <Node icon="briefcase" label="CRM" sub="CAPTURE" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 12 }}>
        <Node icon="calendar" label="Booked Call" sub="DEMO" />
        <Node icon="envelope" label="Automated Follow-up" sub="EMAIL · SMS" />
      </div>
    </div>
  );
}
