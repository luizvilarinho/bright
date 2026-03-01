import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 24,
        background: '#2e231c',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffd89f',
        borderRadius: '20%',
      }}
    >
      {/* Simple Candle Flame Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 17c1.38 0 2.5-1.12 2.5-2.5 0-1.38-.56-2.66-1.5-3.5a1 1 0 0 1 0-1.42A4.48 4.48 0 0 1 15 14.5a4 4 0 0 1-4 4 4 4 0 0 1-4-4c0-1.5.8-2.8 2-3.5a1 1 0 0 1 1 1.42c-.32.32-.5.78-.5 1.58z" />
      </svg>
    </div>,
    // ImageResponse options
    {
      ...size,
    }
  )
}
