import type { CaseFilter } from '@/lib/data';

interface CaseFiltersProps {
  filters: CaseFilter[];
  active: string;
  onChange: (id: string) => void;
}

export function CaseFilters({ filters, active, onChange }: CaseFiltersProps) {
  return (
    <div style={{ padding: '16px 0 32px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => onChange(f.id)}
            style={{
              padding: '9px 16px',
              borderRadius: 999,
              border: '1px solid ' + (active === f.id ? 'var(--accent)' : 'var(--line-2)'),
              fontSize: 13,
              color: active === f.id ? 'var(--accent-ink)' : 'var(--text-2)',
              background: active === f.id ? 'var(--accent)' : 'transparent',
              fontWeight: active === f.id ? 600 : 500,
              cursor: 'pointer',
              whiteSpace: 'nowrap' as const,
              transition: 'all .15s',
            }}
          >
            {f.label}
          </button>
        ))}
      </div>
    </div>
  );
}
