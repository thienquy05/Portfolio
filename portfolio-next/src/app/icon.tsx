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
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid #FFD200',
          position: 'relative',
          // Mimic top right folded corner of a dossier
          borderTopRightRadius: '10px',
        }}
      >
        {/* Detective Hat / Visor abstraction */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '4px' }}>
          {/* Hat top */}
          <div style={{ width: '12px', height: '6px', backgroundColor: '#FFD200', borderTopLeftRadius: '4px', borderTopRightRadius: '4px' }} />
          {/* Hat brim */}
          <div style={{ width: '20px', height: '2px', backgroundColor: '#FFD200' }} />
        </div>
        {/* Glowing visor / eye */}
        <div style={{ marginTop: '2px', display: 'flex', gap: '2px' }}>
          <div style={{ width: '6px', height: '2px', backgroundColor: '#FFD200' }} />
        </div>
        
        {/* Dossier Lines */}
        <div style={{ marginTop: '3px', width: '16px', height: '1px', backgroundColor: '#FFD200', opacity: 0.5 }} />
        <div style={{ marginTop: '2px', width: '10px', height: '1px', backgroundColor: '#FFD200', opacity: 0.5 }} />
      </div>
    ),
    {
      ...size,
    }
  );
}