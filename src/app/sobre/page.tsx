import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nossa História — Bright',
  description:
    'A história por trás das velas Bright — artesanalidade, intenção e cuidado em cada detalhe.',
}

const valores = [
  { title: 'Artesanalidade', text: 'Cada vela é feita à mão, em pequenos lotes, com atenção ao processo.' },
  { title: 'Transparência', text: 'Sabemos de onde vem cada ingrediente. Sem mistérios, sem aditivos.' },
  { title: 'Intenção', text: 'Criamos com propósito — para que você use com propósito.' },
  { title: 'Sustentabilidade', text: 'Cera vegetal, embalagens recicladas, mínimo desperdício.' },
]

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cocoa pb-24 pt-40 md:pb-32 md:pt-52">
        {/* Warm glow */}
        <div
          className="pointer-events-none absolute"
          style={{
            top: '40%',
            left: '60%',
            width: '400px',
            height: '400px',
            background:
              'radial-gradient(circle, rgba(200,151,78,0.12) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
          }}
        />

        <div className="relative mx-auto max-w-3xl px-6 text-center md:px-12">
          <p className="mb-4 text-[0.72rem] font-[500] tracking-[0.22em] text-amber/70 uppercase">
            Nossa história
          </p>
          <h1
            className="font-display mb-6 font-[300] leading-[1.1] text-cream"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            Luz artesanal para
            <br />
            <em className="italic text-amber/90">momentos que importam</em>.
          </h1>
          <div className="divider-amber" />
          <p className="mx-auto max-w-md text-base leading-[1.8] text-cream/60">
            Bright nasceu de uma pausa. De um momento em que paramos de correr
            e perguntamos: o que nos faz bem de verdade?
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Visual element */}
            <div className="flex items-center justify-center">
              <div
                className="relative flex h-80 w-64 flex-col items-center justify-end border border-mist bg-linen"
                style={{ borderRadius: '4px' }}
              >
                {/* Decorative candle illustration */}
                <div className="relative mb-8 flex flex-col items-center">
                  {/* Flame */}
                  <div
                    className="mb-1"
                    style={{
                      width: '12px',
                      height: '24px',
                      background: 'radial-gradient(ellipse at 50% 80%, #F0C87A, #C8974E 40%, #8B5A2B 80%)',
                      borderRadius: '50% 50% 40% 40% / 60% 60% 40% 40%',
                      boxShadow: '0 0 20px 8px rgba(200, 151, 78, 0.2)',
                    }}
                  />
                  {/* Wick */}
                  <div className="h-3 w-px bg-cocoa/30" />
                  {/* Candle */}
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: '60px',
                      height: '100px',
                      background: 'linear-gradient(135deg, #F5F0E8 0%, #E8D9C0 100%)',
                      borderRadius: '2px',
                      boxShadow: 'var(--shadow-card)',
                    }}
                  >
                    <span
                      className="font-display text-xs font-[300] tracking-[0.2em] text-cocoa/40 uppercase"
                      style={{ writingMode: 'vertical-rl' }}
                    >
                      Bright
                    </span>
                  </div>
                </div>
                <p className="mb-6 text-center text-[0.65rem] tracking-[0.18em] text-smoke/40 uppercase">
                  feita à mão
                </p>
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center gap-6">
              <p className="text-base leading-[1.9] text-smoke">
                Tudo começou em uma cozinha pequena, com cera de soja, um
                termômetro e muita curiosidade. A fundadora da Bright, apaixonada
                por aromaterapia e rituais de bem-estar, buscava uma vela que
                queimasse limpa, durasse e cheirasse de verdade.
              </p>
              <p className="text-base leading-[1.9] text-smoke">
                Depois de meses de teste — e de presentear todos os amigos com
                protótipos — a Bright nasceu. Com o propósito de trazer
                artesanalidade e intenção para o cotidiano de quem valoriza as
                pausas.
              </p>
              <p className="text-base leading-[1.9] text-smoke">
                Hoje, cada vela ainda é feita à mão, em pequenos lotes, com os
                mesmos ingredientes criteriosamente selecionados do primeiro dia.
                Porque acreditamos que o cuidado começa no processo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sand py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-12 lg:px-20">
          <div className="mb-16 text-center">
            <p className="mb-3 text-[0.72rem] font-[500] tracking-[0.22em] text-sage uppercase">
              O que guia cada decisão
            </p>
            <h2
              className="font-display font-[300] text-cocoa"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Nossos valores
            </h2>
            <div className="divider-amber" />
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {valores.map((valor) => (
              <div key={valor.title} className="flex gap-5">
                <div className="mt-1 h-8 w-px flex-shrink-0 bg-amber" />
                <div>
                  <h3 className="font-display mb-2 text-xl font-[400] text-cocoa">
                    {valor.title}
                  </h3>
                  <p className="text-sm leading-[1.8] text-smoke">{valor.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center md:py-32">
        <div className="mx-auto max-w-xl px-6">
          <h2
            className="font-display mb-4 font-[300] text-cocoa"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
          >
            Pronta para começar o ritual?
          </h2>
          <div className="divider-amber" />
          <p className="mb-8 text-sm leading-relaxed text-smoke">
            Explore nossa coleção e encontre a vela que fala com o seu momento.
          </p>
          <Link
            href="/produtos"
            className="inline-block bg-amber px-10 py-4 text-[0.78rem] font-[500] tracking-[0.14em] text-linen uppercase transition-colors hover:bg-glow hover:text-cocoa rounded-[2px]"
          >
            Explorar Coleção
          </Link>
        </div>
      </section>
    </>
  )
}
