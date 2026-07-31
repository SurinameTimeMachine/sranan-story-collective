import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background:
          'linear-gradient(145deg, #f5f1ea 0%, #ece4da 50%, #e2d3c4 100%)',
        padding: '56px 64px',
        color: '#172540',
        fontFamily: 'ui-sans-serif, system-ui, sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          fontSize: 28,
          letterSpacing: 2,
          textTransform: 'uppercase',
          color: '#37543b',
        }}
      >
        Suriname Time Machine
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div
          style={{
            fontSize: 84,
            lineHeight: 1,
            fontWeight: 700,
            maxWidth: 980,
            color: '#172540',
          }}
        >
          Sranan Story Collective
        </div>
        <div
          style={{
            fontSize: 34,
            lineHeight: 1.25,
            maxWidth: 980,
            color: '#733924',
          }}
        >
          Verhalen, erfgoed en gemeenschap rond Surinaamse geschiedenissen.
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ fontSize: 26, color: '#a64732', fontWeight: 700 }}>
          srananstorycollective.com
        </div>
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: 999,
            background: '#a64732',
            opacity: 0.9,
          }}
        />
      </div>
    </div>,
    {
      ...size,
    },
  );
}
