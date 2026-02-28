'use client'

import { useEffect, useRef } from 'react'

const depoimentos = [
  {
    text: 'A vela Serenidade Lavanda mudou meu ritual da noite. Acendo antes de meditar e o ambiente fica completamente diferente — mais suave, mais meu.',
    author: 'Camila R.',
    city: 'São Paulo, SP',
    rating: 5,
  },
  {
    text: 'Recebi a Presença Santal de presente e fiquei apaixonada. A qualidade é incrível — queima limpa, sem cheiro de parafina, só o aroma puro. Pedi logo a minha.',
    author: 'Fernanda L.',
    city: 'Florianópolis, SC',
    rating: 5,
  },
  {
    text: 'Para quem pratica yoga em casa, a vela Intenção Incenso é transformadora. Cria uma atmosfera que convida à prática. Não consigo imaginar sem ela.',
    author: 'Rodrigo M.',
    city: 'Belo Horizonte, MG',
    rating: 5,
  },
]

export default function Depoimentos() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-sand py-24 md:py-32" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="fade-up mb-16 text-center">
          <p className="mb-3 text-[0.72rem] font-[500] tracking-[0.22em] text-sage uppercase">
            Experiências reais
          </p>
          <h2
            className="font-display font-[300] text-cocoa"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            O que dizem sobre Bright
          </h2>
          <div className="divider-amber" />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {depoimentos.map((d, i) => (
            <blockquote
              key={d.author}
              className="fade-up flex flex-col gap-5 bg-cream p-8"
              style={{
                borderRadius: '4px',
                boxShadow: 'var(--shadow-card)',
                transitionDelay: `${i * 100}ms`,
              }}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: d.rating }).map((_, j) => (
                  <svg
                    key={j}
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-amber"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              {/* Quote mark */}
              <p
                className="font-display text-5xl font-[300] leading-none text-amber/20"
                aria-hidden="true"
              >
                &ldquo;
              </p>

              <p className="flex-1 text-sm leading-[1.9] text-smoke">{d.text}</p>

              <footer className="border-t border-mist/60 pt-4">
                <p className="font-display text-base font-[400] text-cocoa">
                  {d.author}
                </p>
                <p className="text-xs text-smoke/60">{d.city}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
