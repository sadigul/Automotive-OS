import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'DMSPilot - #1 Auto Dealer Management System';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 50%, #ede9fe 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          <svg width="80" height="80" viewBox="0 0 512 512" fill="none">
            <path d="M256 64 L128 400 L256 320 Z" fill="#1F2937" />
            <path d="M256 64 L384 400 L256 320 Z" fill="#7C3AED" />
          </svg>
          <span style={{ fontSize: '64px', fontWeight: 'bold', color: '#111827' }}>
            DMSPilot
          </span>
        </div>
        <div
          style={{
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#374151',
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: 1.3,
          }}
        >
          The #1 Cloud Dealer Management System for Auto Dealerships
        </div>
        <div
          style={{
            fontSize: '22px',
            color: '#6b7280',
            textAlign: 'center',
            marginTop: '24px',
            maxWidth: '700px',
          }}
        >
          Inventory • CRM • F&I • Parts • Accounting • Service — All in One Platform
        </div>
        <div
          style={{
            display: 'flex',
            gap: '40px',
            marginTop: '50px',
            fontSize: '18px',
            color: '#7C3AED',
            fontWeight: 'bold',
          }}
        >
          <span>500k+ Vehicles Managed</span>
          <span>•</span>
          <span>99.9% Uptime</span>
          <span>•</span>
          <span>60% Cost Savings</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
