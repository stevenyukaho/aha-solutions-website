'use client';

import { useState } from 'react';
import { Icon, Node, Arrow, Eyebrow } from '@/components/primitives';
import { flowsData } from '@/lib/data';
import type { FlowTabKey } from '@/lib/data';
import type { FlowsSectionDict } from '@/lib/dictionaries/types';

interface FlowsSectionProps {
  dict?: FlowsSectionDict;
}

const defaultDict: FlowsSectionDict = {
  eyebrow: 'A LOOK INSIDE',
  h2: 'What your system actually looks like',
  bottomMono: 'CLICK TABS TO EXPLORE · LIVE PROCESS DIAGRAMS',
};

export function FlowsSection({ dict = defaultDict }: FlowsSectionProps) {
  const [tab, setTab] = useState<FlowTabKey>('lead');
  const data = flowsData[tab];

  return (
    <section className="section" style={{ background: 'var(--bg-2)' }}>
      <div className="wrap">
        <div style={{ textAlign: 'center', marginBottom: 10 }}>
          <Eyebrow>{dict.eyebrow}</Eyebrow>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
          <h2>{dict.h2}</h2>
          <div className="tabs">
            {(Object.entries(flowsData) as [FlowTabKey, typeof data][]).map(([k, v]) => (
              <button key={k} onClick={() => setTab(k)} className={tab === k ? 'on' : ''}>
                <Icon name={v.icon} size={12} /> {v.label}
              </button>
            ))}
          </div>
        </div>

        <div className="card" style={{ padding: '40px 32px' }}>
          <div className="flow-nodes" style={{ justifyContent: 'space-between' }}>
            {data.nodes.map((n, i, arr) => (
              <div key={`${tab}-${i}`} style={{ display: 'contents' }}>
                <Node icon={n.icon} label={n.label} sub={n.sub} accent={n.accent} />
                {i < arr.length - 1 && (
                  <Arrow active={data.nodes[i].accent || data.nodes[i + 1].accent} length={32} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mono" style={{ textAlign: 'center', marginTop: 20, fontSize: 10.5, letterSpacing: 1.4, color: 'var(--text-3)' }}>
          {dict.bottomMono}
        </div>
      </div>
    </section>
  );
}
