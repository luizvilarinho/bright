'use client'

import { useEffect, useRef } from 'react'

const pillars = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Ingredientes Puros',
    text: 'Cera de soja 100% natural, pavios de algodão e óleos essenciais. Sem aditivos, sem compromisso com a qualidade.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: 'Feita à Mão',
    text: 'Cada vela é produzida individualmente, com atenção ao processo e cuidado em cada detalhe do início ao fim.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'Com Intenção',
    text: 'Criadas para marcar momentos — a pausa entre o trabalho e o descanso, o ritual antes de dormir, o silêncio de uma tarde.',
  },
]

export default function PropositoSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fadeEls = entry.target.querySelectorAll('.fade-up')
            fadeEls.forEach((el, i) => {
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
    <section className="bg-linen py-24 md:py-32" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left — Text */}
          <div className="fade-up flex flex-col justify-center">
            <p className="mb-4 text-[0.72rem] font-[500] tracking-[0.22em] text-sage uppercase">
              Nossa missão
            </p>
            <h2
              className="font-display mb-6 font-[300] leading-[1.15] text-cocoa"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Para quem encontra paz
              <br />
              nas coisas <em className="italic text-amber">pequenas</em>.
            </h2>
            <div className="divider-amber" style={{ margin: '0 0 1.5rem 0' }} />
            <p className="mb-4 max-w-md text-base leading-[1.8] text-smoke">
              A Bright nasceu de um desejo simples: criar produtos que convidem
              à pausa. Em um mundo que valoriza a velocidade, acreditamos na
              arte de desacelerar.
            </p>
            <p className="max-w-md text-base leading-[1.8] text-smoke">
              Cada vela é uma declaração de intenção — que este momento importa,
              que cuidar de si não é luxo, que a beleza está no simples.
            </p>
          </div>

          {/* Right — Pillars */}
          <div className="flex flex-col gap-8">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className="fade-up flex gap-5"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center text-sage">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="font-display mb-2 text-lg font-[400] text-cocoa">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-[1.8] text-smoke">{pillar.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
