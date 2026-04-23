import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Case Studies — AHA Solutions';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#0b0b0d',
          fontFamily: 'Inter, sans-serif',
          position: 'relative',
        }}
      >
        {/* Yellow accent bar */}
        <div style={{ width: '100%', height: 4, background: '#f5d000' }} />

        {/* Content area */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '48px 64px',
          }}
        >
          {/* Top: Logo + company name */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: '#f5d000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#111',
                fontSize: 18,
                fontWeight: 700,
              }}
            >
              A
            </div>
            <span style={{ color: '#f5f5f2', fontSize: 20, fontWeight: 600 }}>
              AHA Solutions
            </span>
          </div>

          {/* Center: Headline */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}
          >
            <h1
              style={{
                color: '#f5f5f2',
                fontSize: 56,
                fontWeight: 700,
                textAlign: 'center',
                lineHeight: 1.15,
                maxWidth: 900,
                margin: 0,
                letterSpacing: '-0.02em',
              }}
            >
              Real systems. Real results.
            </h1>
          </div>

          {/* Bottom: Domain */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <span
              style={{
                color: '#7a776f',
                fontSize: 16,
                fontFamily: 'monospace',
                letterSpacing: '0.5px',
              }}
            >
              ahasolutions.com
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
