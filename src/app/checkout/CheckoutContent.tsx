'use client'

import Image from 'next/image'
import { useCartStore } from '@/store/cartStore'

export default function CheckoutContent() {
  const { items, totalPrice } = useCartStore()
  const total = totalPrice()

  return (
    <div className="mx-auto max-w-5xl px-6 pt-28 pb-24 md:px-12 md:pt-36 lg:px-20">
      <h1 className="font-display mb-2 font-[300] text-3xl text-cocoa md:text-4xl">
        Finalizar Compra
      </h1>
      <p className="mb-10 text-sm text-smoke">
        Revise seu pedido e informe seus dados de entrega.
      </p>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Form */}
        <div>
          <fieldset className="mb-8">
            <legend className="mb-5 text-[0.72rem] font-[500] tracking-[0.18em] text-smoke uppercase">
              Dados Pessoais
            </legend>
            <div className="flex flex-col gap-4">
              <div>
                <label className="mb-1.5 block text-xs tracking-wide text-smoke" htmlFor="name">
                  Nome Completo
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  className="w-full border border-mist bg-linen px-4 py-3 text-sm text-cocoa outline-none transition-colors placeholder:text-smoke/40 focus:border-amber/60 rounded-[2px]"
                  style={{ fontFamily: 'var(--font-body)' }}
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs tracking-wide text-smoke" htmlFor="email">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full border border-mist bg-linen px-4 py-3 text-sm text-cocoa outline-none transition-colors placeholder:text-smoke/40 focus:border-amber/60 rounded-[2px]"
                  style={{ fontFamily: 'var(--font-body)' }}
                />
              </div>
            </div>
          </fieldset>

          <fieldset className="mb-8">
            <legend className="mb-5 text-[0.72rem] font-[500] tracking-[0.18em] text-smoke uppercase">
              Endereço de Entrega
            </legend>
            <div className="flex flex-col gap-4">
              <div>
                <label className="mb-1.5 block text-xs tracking-wide text-smoke" htmlFor="cep">
                  CEP
                </label>
                <input
                  id="cep"
                  type="text"
                  placeholder="00000-000"
                  maxLength={9}
                  className="w-full border border-mist bg-linen px-4 py-3 text-sm text-cocoa outline-none transition-colors placeholder:text-smoke/40 focus:border-amber/60 rounded-[2px]"
                  style={{ fontFamily: 'var(--font-body)' }}
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs tracking-wide text-smoke" htmlFor="address">
                  Endereço
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder="Rua, número, complemento"
                  className="w-full border border-mist bg-linen px-4 py-3 text-sm text-cocoa outline-none transition-colors placeholder:text-smoke/40 focus:border-amber/60 rounded-[2px]"
                  style={{ fontFamily: 'var(--font-body)' }}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1.5 block text-xs tracking-wide text-smoke" htmlFor="city">
                    Cidade
                  </label>
                  <input
                    id="city"
                    type="text"
                    placeholder="Sua cidade"
                    className="w-full border border-mist bg-linen px-4 py-3 text-sm text-cocoa outline-none transition-colors placeholder:text-smoke/40 focus:border-amber/60 rounded-[2px]"
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs tracking-wide text-smoke" htmlFor="state">
                    Estado
                  </label>
                  <input
                    id="state"
                    type="text"
                    placeholder="SP"
                    maxLength={2}
                    className="w-full border border-mist bg-linen px-4 py-3 text-sm text-cocoa outline-none transition-colors placeholder:text-smoke/40 focus:border-amber/60 rounded-[2px]"
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                </div>
              </div>
            </div>
          </fieldset>

          {/* Payment Placeholder */}
          <fieldset>
            <legend className="mb-5 text-[0.72rem] font-[500] tracking-[0.18em] text-smoke uppercase">
              Pagamento
            </legend>
            <div className="flex items-center gap-3 border border-dashed border-mist bg-linen px-5 py-6 rounded-[4px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-smoke/40">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                <line x1="1" y1="10" x2="23" y2="10"/>
              </svg>
              <div>
                <p className="text-sm text-smoke/60">Integração com Stripe</p>
                <p className="text-xs text-smoke/40">Disponível em breve</p>
              </div>
            </div>
          </fieldset>

          {/* Submit */}
          <button
            disabled
            className="mt-8 w-full cursor-not-allowed bg-amber/40 py-4 text-[0.78rem] font-[500] tracking-[0.14em] text-linen uppercase rounded-[2px]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Confirmar Pedido (Em Breve)
          </button>

          <p className="mt-3 text-center text-[0.68rem] text-smoke/40">
            Integração com pagamento em desenvolvimento.
          </p>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-linen p-8 rounded-[4px]" style={{ boxShadow: 'var(--shadow-card)' }}>
            <h2 className="font-display mb-6 text-xl font-[400] text-cocoa">
              Seu Pedido
            </h2>

            {items.length === 0 ? (
              <p className="text-sm text-smoke">Carrinho vazio.</p>
            ) : (
              <ul className="divide-y divide-mist">
                {items.map(({ product, quantity }) => (
                  <li key={product.id} className="flex items-center gap-4 py-4">
                    <div className="relative h-14 w-12 flex-shrink-0 overflow-hidden rounded-[4px] bg-sand">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-display text-sm font-[400] text-cocoa">
                        {product.name}
                      </p>
                      <p className="text-xs text-smoke/60">Qtd: {quantity}</p>
                    </div>
                    <p className="font-display text-sm font-[300] italic text-amber">
                      R$ {(product.price * quantity).toFixed(2).replace('.', ',')}
                    </p>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-4 border-t border-mist pt-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-smoke">Subtotal</span>
                <span className="font-display font-[300] italic text-cocoa">
                  R$ {total.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-smoke">Frete</span>
                <span className="text-smoke/60">A calcular</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
