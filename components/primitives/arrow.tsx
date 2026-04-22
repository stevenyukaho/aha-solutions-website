export interface ArrowProps {
  active?: boolean;
  length?: number;
  dir?: 'right' | 'down';
}

export function Arrow({ active, length = 32, dir = 'right' }: ArrowProps) {
  if (dir === 'down') {
    return (
      <div
        style={{
          width: 1,
          height: length,
          background: active ? 'var(--accent)' : 'var(--line-2)',
          position: 'relative',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: -1,
            left: '50%',
            transform: 'translateX(-50%) rotate(45deg)',
            width: 6,
            height: 6,
            borderRight: `1px solid ${active ? 'var(--accent)' : 'var(--line-2)'}`,
            borderBottom: `1px solid ${active ? 'var(--accent)' : 'var(--line-2)'}`,
          }}
        />
      </div>
    );
  }
  return (
    <div
      className={`arrow-line${active ? ' active' : ''}`}
      style={{ minWidth: length }}
    />
  );
}
