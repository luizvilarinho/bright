'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elements = [headlineRef.current, subRef.current, ctaRef.current]
    elements.forEach((el, i) => {
      if (!el) return
      setTimeout(() => {
        el.classList.add('visible')
      }, 200 + i * 180)
    })
  }, [])

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden pb-20 md:items-center md:pb-0">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 60% 40%, #2A1A0E 0%, #1A0F07 50%, #0E0804 100%)',
        }}
      />

      {/* Warm light glow */}
      <div
        className="absolute"
        style={{
          top: '25%',
          left: '55%',
          width: '300px',
          height: '400px',
          background:
            'radial-gradient(ellipse, rgba(200, 151, 78, 0.18) 0%, rgba(200, 151, 78, 0.04) 50%, transparent 75%)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      />

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
      />

      {/* Candle flame decorative element */}
      <div
        className="absolute right-[8%] top-1/2 hidden -translate-y-1/2 lg:block"
        aria-hidden="true"
      >
        <div className="relative flex flex-col items-center">
          {/* Flame */}
          <div
            className="mb-1"
            style={{
              width: '14px',
              height: '32px',
              background:
                'radial-gradient(ellipse at 50% 80%, #F0C87A, #C8974E 40%, #8B5A2B 80%)',
              borderRadius: '50% 50% 40% 40% / 60% 60% 40% 40%',
              boxShadow: '0 0 30px 10px rgba(200, 151, 78, 0.25)',
              animation: 'flicker 3s ease-in-out infinite',
            }}
          />
          {/* Candle body */}
          <div
            style={{
              width: '28px',
              height: '180px',
              background:
                'linear-gradient(to right, rgba(245, 240, 232, 0.12), rgba(245, 240, 232, 0.06))',
              border: '1px solid rgba(245, 240, 232, 0.08)',
              borderRadius: '2px',
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 md:px-12 lg:px-20">
        <div className="max-w-2xl">
          <p className="mb-6 text-[0.72rem] font-[500] tracking-[0.28em] text-amber/80 uppercase">
            Velas Artesanais
          </p>

          <h1
            ref={headlineRef}
            className="fade-up font-display mb-6 font-[300] leading-[1.05] text-cream"
            style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
          >
            Feita com intenção.
            <br />
            <em className="font-[300] italic text-amber/90">Acesa com calma.</em>
          </h1>

          <p
            ref={subRef}
            className="fade-up mb-10 max-w-md text-base font-[300] leading-relaxed text-cream/60 md:text-lg"
          >
            Velas feitas à mão com cera de soja pura, óleos essenciais e tempo.
            Para quem encontra paz nas coisas pequenas.
          </p>

          <div ref={ctaRef} className="fade-up flex flex-wrap gap-4">
            <Link
              href="/produtos"
              className="border border-cream/40 px-8 py-4 text-[0.78rem] font-[500] tracking-[0.14em] text-cream uppercase transition-all duration-300 hover:border-cream hover:bg-cream hover:text-cocoa rounded-[2px]"
            >
              Explorar Coleção
            </Link>
            <Link
              href="/sobre"
              className="px-8 py-4 text-[0.78rem] font-[500] tracking-[0.14em] text-cream/50 uppercase transition-colors duration-300 hover:text-cream"
            >
              Nossa História
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden flex-col items-center gap-2 md:flex">
        <span className="text-[0.62rem] tracking-[0.22em] text-cream/30 uppercase">
          Scroll
        </span>
        <div
          className="h-8 w-px bg-gradient-to-b from-cream/30 to-transparent"
          style={{ animation: 'fadeDown 2s ease-in-out infinite' }}
        />
      </div>

      <style jsx>{`
        @keyframes flicker {
          0%,
          100% {
            transform: rotate(-1deg) scaleY(1);
            opacity: 0.95;
          }
          33% {
            transform: rotate(1deg) scaleY(1.05);
            opacity: 1;
          }
          66% {
            transform: rotate(-0.5deg) scaleY(0.97);
            opacity: 0.9;
          }
        }
        @keyframes fadeDown {
          0%,
          100% {
            opacity: 0;
            transform: scaleY(0);
            transform-origin: top;
          }
          50% {
            opacity: 1;
            transform: scaleY(1);
          }
        }
      `}</style>
    </section>
  )
}
