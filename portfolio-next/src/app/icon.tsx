import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 18,
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFD200',
          fontWeight: 'black',
          fontFamily: 'monospace',
          borderRadius: '4px',
          border: '2px solid #FFD200',
          position: 'relative'
        }}
      >
        <div style={{ position: 'absolute', top: 2, right: 2, width: 4, height: 4, backgroundColor: '#FFD200', borderRadius: '50%' }} />
        {/* Abstract Eye/Lens shape for an Operative Agent */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '10px', border: '2px solid #FFD200', borderRadius: '100%' }}>
            <div style={{ width: '4px', height: '4px', backgroundColor: '#FFD200', borderRadius: '50%' }} />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}