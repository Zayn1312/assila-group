import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = "Case Study: Thales — Anouar's GitLab AE Application"
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #1A1428 0%, #0A0613 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Orange glow */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            left: -100,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(252, 109, 38, 0.3) 0%, transparent 70%)',
          }}
        />
        {/* Purple glow */}
        <div
          style={{
            position: 'absolute',
            bottom: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(110, 73, 203, 0.3) 0%, transparent 70%)',
          }}
        />
        {/* Eyebrow */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              fontSize: 24,
              color: '#FC6D26',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase' as const,
            }}
          >
            Case Study: Thales
          </div>
        </div>
        {/* Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: '#FFFFFF',
            letterSpacing: '-0.03em',
            textAlign: 'center',
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          From zero pipeline to signed.
        </div>
        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: '#C8C2D4',
            marginTop: 24,
            textAlign: 'center',
            maxWidth: 700,
          }}
        >
          GitLab Account Executive Application — Anouar Assila
        </div>
        {/* GitLab orange bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background:
              'linear-gradient(90deg, #E24329, #FC6D26, #FCA326)',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
