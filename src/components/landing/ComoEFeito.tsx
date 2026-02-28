'use client'

import { useEffect, useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Seleção dos Ingredientes',
    text: 'Escolhemos cada ingrediente com critério: cera de soja não-transgênica, óleos essenciais puros e pavios de algodão orgânico. Nada de sintéticos.',
  },
  {
    number: '02',
    title: 'Preparo Artesanal',
    text: 'A cera é derretida em banho-maria, aromatizada com a combinação certa de óleos e vertida à mão em cada recipiente. Cada lote, pequeno e cuidadoso.',
  },
  {
    number: '03',
    title: 'Cura e Intenção',
    text: 'As velas repousam por 48 horas antes de serem embaladas — tempo para que a fragrância se integre completamente à cera e a textura amadureça.',
  },
  {
    number: '04',
    title: 'Embalagem Consciente',
    text: 'Embrulhadas em papel reciclado com detalhes mínimos. Sem plásticos, sem excessos. Para chegar até você com a mesma intenção com que foi criada.',
  },
]

export default function ComoEFeito() {
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
    <section className="py-24 md:py-32" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="fade-up mb-16 text-center">
          <p className="mb-3 text-[0.72rem] font-[500] tracking-[0.22em] text-sage uppercase">
            O processo
          </p>
          <h2
            className="font-display font-[300] text-cocoa"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Como é feita
          </h2>
          <div className="divider-amber" />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="fade-up relative"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Connector line — only on desktop, not last */}
              {i < steps.length - 1 && (
                <div
                  className="absolute top-5 left-[calc(50%+1.5rem)] hidden h-px w-[calc(100%-3rem)] bg-mist lg:block"
                  aria-hidden="true"
                />
              )}

              <div className="font-display mb-4 text-3xl font-[300] text-amber/40">
                {step.number}
              </div>
              <div className="mb-3 h-px w-8 bg-amber" />
              <h3 className="font-display mb-3 text-lg font-[400] text-cocoa">
                {step.title}
              </h3>
              <p className="text-sm leading-[1.8] text-smoke">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
