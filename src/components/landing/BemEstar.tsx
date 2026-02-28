'use client'

import { useEffect, useRef } from 'react'

export default function BemEstar() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-cocoa py-24 md:py-32" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-32">
          {/* Left — Atmospheric visual */}
          <div className="fade-up order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm">
              {/* Glow effect */}
              <div
                className="absolute"
                style={{
                  top: '30%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '200px',
                  height: '200px',
                  background:
                    'radial-gradient(circle, rgba(200, 151, 78, 0.2) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Quote card */}
              <div
                className="relative border border-cream/10 p-10 text-center"
                style={{ borderRadius: '4px' }}
              >
                <p
                  className="font-display mb-6 font-[300] italic leading-[1.4] text-cream/80"
                  style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)' }}
                >
                  &ldquo;O ritual começa aqui.&rdquo;
                </p>
                <div className="divider-amber" style={{ margin: '0 auto 1.5rem' }} />
                <p className="text-sm text-cream/40">
                  Um momento só seu, toda vez que você acende.
                </p>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div className="order-1 lg:order-2">
            <div className="fade-up">
              <p className="mb-4 text-[0.72rem] font-[500] tracking-[0.22em] text-amber/70 uppercase">
                Bem-estar & presença
              </p>
              <h2
                className="font-display mb-6 font-[300] leading-[1.15] text-cream"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                Aromaterapia para
                <br />
                o <em className="italic text-amber">cotidiano</em>.
              </h2>
              <div className="divider-amber" style={{ margin: '0 0 1.5rem 0' }} />
            </div>

            <div
              className="fade-up mb-8 space-y-4"
              style={{ transitionDelay: '120ms' }}
            >
              <p className="text-base leading-[1.8] text-cream/60">
                Aromas têm memória. Um cheiro certo pode transformar um
                apartamento em lar, um minuto em pausa, uma noite comum em
                ritual.
              </p>
              <p className="text-base leading-[1.8] text-cream/60">
                Nossas velas foram formuladas para criar estados — de calma,
                foco, presença. Para a meditação da manhã, o bath time do fim
                do dia, a hora do chá que você merece.
              </p>
            </div>

            {/* Wellness tags */}
            <div
              className="fade-up flex flex-wrap gap-2"
              style={{ transitionDelay: '240ms' }}
            >
              {['Meditação', 'Yoga', 'Banho', 'Leitura', 'Descanso', 'Foco'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="border border-cream/10 px-4 py-1.5 text-[0.68rem] tracking-[0.14em] text-cream/50 uppercase"
                    style={{ borderRadius: '2px' }}
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
