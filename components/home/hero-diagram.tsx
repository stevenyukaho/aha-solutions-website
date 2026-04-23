import { Node } from '@/components/primitives';
import type { HeroDiagramLabels } from '@/lib/data-i18n';

interface HeroDiagramProps {
  labels?: HeroDiagramLabels;
}

const defaultLabels: HeroDiagramLabels = {
  liveSystem: 'LIVE SYSTEM · AHA-ROUTER',
  online: '● ONLINE',
  adWebsite: 'Ad / Website',
  leadSub: 'LEAD',
  aiAgent: 'AI Agent',
  aiAgentSub: 'INSTANT REPLY · <60s',
  customer: 'Customer',
  returnSub: 'RETURN',
  crm: 'CRM',
  captureSub: 'CAPTURE',
  bookedCall: 'Booked Call',
  demoSub: 'DEMO',
  automatedFollowUp: 'Automated Follow-up',
  emailSmsSub: 'EMAIL · SMS',
};

export function HeroDiagram({ labels = defaultLabels }: HeroDiagramProps) {
  return (
    <div className="diagram-panel">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <span className="pulse" />
          <span className="mono" style={{ fontSize: 10, letterSpacing: 1.4, color: 'var(--text-3)' }}>{labels.liveSystem}</span>
        </div>
        <span className="mono" style={{ fontSize: 10, color: 'var(--success)', letterSpacing: 1 }}>{labels.online}</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <Node icon="globe" label={labels.adWebsite} sub={labels.leadSub} />
        <Node icon="sparkle" label={labels.aiAgent} sub={labels.aiAgentSub} accent pulse />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 12, position: 'relative' }}>
        {/* connecting lines illusion via dashed divider */}
        <div style={{ position: 'absolute', top: -12, left: '25%', right: '25%', borderTop: '1px dashed var(--line-2)' }} />
        <Node icon="user" label={labels.customer} sub={labels.returnSub} />
        <Node icon="briefcase" label={labels.crm} sub={labels.captureSub} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 12 }}>
        <Node icon="calendar" label={labels.bookedCall} sub={labels.demoSub} />
        <Node icon="envelope" label={labels.automatedFollowUp} sub={labels.emailSmsSub} />
      </div>
    </div>
  );
}
