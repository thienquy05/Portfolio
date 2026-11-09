import { ImageResponse } from 'next/og';

// Social preview card (Next.js file convention: used for og:image and the Twitter card).
export const runtime = 'edge';
export const alt = 'Thien Quy Pham, Cybersecurity & AI Security Portfolio';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#0a0a0a',
          border: '6px solid #FFD200',
          color: '#ffffff',
          fontFamily: 'monospace',
        }}
      >
        <div style={{ display: 'flex', color: '#FFD200', fontSize: 28, letterSpacing: 6 }}>
          {'> PORTFOLIO // SECURE.LINK'}
        </div>
        <div style={{ display: 'flex', fontSize: 84, fontWeight: 800, marginTop: 24 }}>
          Thien Quy Pham
        </div>
        <div style={{ display: 'flex', fontSize: 40, color: '#FFD200', marginTop: 12 }}>
          Cybersecurity & AI Security
        </div>
        <div style={{ display: 'flex', fontSize: 28, color: 'rgba(255,255,255,0.7)', marginTop: 40 }}>
          Prompt-injection defense · Phishing detection · Network security
        </div>
      </div>
    ),
    { ...size }
  );
}
