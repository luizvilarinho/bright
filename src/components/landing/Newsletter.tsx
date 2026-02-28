'use client'

import { useEffect, useRef, useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success'>('idle')
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
      { threshold: 0.3 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('success')
    setEmail('')
  }

  return (
    <section className="py-24 md:py-32" ref={sectionRef}>
      <div className="mx-auto max-w-2xl px-6 text-center md:px-12">
        <div className="fade-up">
          <p className="mb-3 text-[0.72rem] font-[500] tracking-[0.22em] text-sage uppercase">
            Fique por perto
          </p>
          <h2
            className="font-display mb-4 font-[300] text-cocoa"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
          >
            Receba histórias, aromas e novidades.
          </h2>
          <div className="divider-amber" />
          <p className="mb-10 text-sm leading-relaxed text-smoke">
            Sem spam, sem pressa. Só o que importa — receitas de ritual, novas
            fragrâncias e cuidados com sua vela.
          </p>
        </div>

        {status === 'success' ? (
          <div className="fade-up visible rounded-[4px] border border-sage/30 bg-sage/5 px-8 py-6">
            <p className="font-display text-xl font-[300] italic text-cocoa">
              Obrigada pela confiança. ✦
            </p>
            <p className="mt-2 text-sm text-smoke">
              Você receberá nossas histórias em breve.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="fade-up flex flex-col gap-3 sm:flex-row"
            style={{ transitionDelay: '120ms' }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="flex-1 border border-mist bg-linen px-5 py-3.5 text-sm text-cocoa outline-none transition-colors placeholder:text-smoke/40 focus:border-amber/60 rounded-[2px]"
              style={{ fontFamily: 'var(--font-body)' }}
            />
            <button
              type="submit"
              className="cursor-pointer bg-amber px-8 py-3.5 text-[0.78rem] font-[500] tracking-[0.14em] text-linen uppercase transition-colors hover:bg-glow hover:text-cocoa rounded-[2px]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Descobrir
            </button>
          </form>
        )}

        <p className="mt-4 text-[0.68rem] text-smoke/40">
          Ao se inscrever, você concorda com nossa política de privacidade.
        </p>
      </div>
    </section>
  )
}
