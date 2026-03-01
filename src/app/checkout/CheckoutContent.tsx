'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useCartStore } from '@/store/cartStore'

export default function CheckoutContent() {
  const [mounted, setMounted] = useState(false)
  const { items, totalPrice } = useCartStore()

  useEffect(() => {
    setMounted(true)
  }, [])

  const total = mounted ? totalPrice() : 0

  return (
    <div className="mx-auto max-w-5xl px-6 pt-28 pb-24 md:px-12 md:pt-36 lg:px-20">
      <h1 className="font-display text-cocoa mb-2 text-3xl font-[300] md:text-4xl">
        Finalizar Compra
      </h1>
      <p className="text-smoke mb-10 text-sm">
        Revise seu pedido e informe seus dados de entrega.
      </p>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Form */}
        <div>
          <fieldset className="mb-8">
            <legend className="text-smoke mb-5 text-[0.72rem] font-[500] tracking-[0.18em] uppercase">
              Dados Pessoais
            </legend>
            <div className="flex flex-col gap-4">
              <div>
                <label
                  className="text-smoke mb-1.5 block text-xs tracking-wide"
                  htmlFor="name"
                >
                  Nome Completo
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  className="border-mist bg-linen text-cocoa placeholder:text-smoke/40 focus:border-amber/60 w-full rounded-[2px] border px-4 py-3 text-sm transition-colors outline-none"
                  style={{ fontFamily: 'var(--font-body)' }}
                />
              </div>
              <div>
                <label
                  className="text-smoke mb-1.5 block text-xs tracking-wide"
                  htmlFor="email"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="border-mist bg-linen text-cocoa placeholder:text-smoke/40 focus:border-amber/60 w-full rounded-[2px] border px-4 py-3 text-sm transition-colors outline-none"
                  style={{ fontFamily: 'var(--font-body)' }}
                />
              </div>
            </div>
          </fieldset>

          <fieldset className="mb-8">
            <legend className="text-smoke mb-5 text-[0.72rem] font-[500] tracking-[0.18em] uppercase">
              Endereço de Entrega
            </legend>
            <div className="flex flex-col gap-4">
              <div>
                <label
                  className="text-smoke mb-1.5 block text-xs tracking-wide"
                  htmlFor="cep"
                >
                  CEP
                </label>
                <input
                  id="cep"
                  type="text"
                  placeholder="00000-000"
                  maxLength={9}
                  className="border-mist bg-linen text-cocoa placeholder:text-smoke/40 focus:border-amber/60 w-full rounded-[2px] border px-4 py-3 text-sm transition-colors outline-none"
                  style={{ fontFamily: 'var(--font-body)' }}
                />
              </div>
              <div>
                <label
                  className="text-smoke mb-1.5 block text-xs tracking-wide"
                  htmlFor="address"
                >
                  Endereço
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder="Rua, número, complemento"
                  className="border-mist bg-linen text-cocoa placeholder:text-smoke/40 focus:border-amber/60 w-full rounded-[2px] border px-4 py-3 text-sm transition-colors outline-none"
                  style={{ fontFamily: 'var(--font-body)' }}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    className="text-smoke mb-1.5 block text-xs tracking-wide"
                    htmlFor="city"
                  >
                    Cidade
                  </label>
                  <input
                    id="city"
                    type="text"
                    placeholder="Sua cidade"
                    className="border-mist bg-linen text-cocoa placeholder:text-smoke/40 focus:border-amber/60 w-full rounded-[2px] border px-4 py-3 text-sm transition-colors outline-none"
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                </div>
                <div>
                  <label
                    className="text-smoke mb-1.5 block text-xs tracking-wide"
                    htmlFor="state"
                  >
                    Estado
                  </label>
                  <input
                    id="state"
                    type="text"
                    placeholder="SP"
                    maxLength={2}
                    className="border-mist bg-linen text-cocoa placeholder:text-smoke/40 focus:border-amber/60 w-full rounded-[2px] border px-4 py-3 text-sm transition-colors outline-none"
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                </div>
              </div>
            </div>
          </fieldset>

          {/* Payment Placeholder */}
          <fieldset>
            <legend className="text-smoke mb-5 text-[0.72rem] font-[500] tracking-[0.18em] uppercase">
              Pagamento
            </legend>
            <div className="border-mist bg-linen flex items-center gap-3 rounded-[4px] border border-dashed px-5 py-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-smoke/40"
              >
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                <line x1="1" y1="10" x2="23" y2="10" />
              </svg>
              <div>
                <p className="text-smoke/60 text-sm">Integração com Stripe</p>
                <p className="text-smoke/40 text-xs">Disponível em breve</p>
              </div>
            </div>
          </fieldset>

          {/* Submit */}
          <button
            disabled
            className="bg-amber/40 text-linen mt-8 w-full cursor-not-allowed rounded-[2px] py-4 text-[0.78rem] font-[500] tracking-[0.14em] uppercase"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Confirmar Pedido (Em Breve)
          </button>

          <p className="text-smoke/40 mt-3 text-center text-[0.68rem]">
            Integração com pagamento em desenvolvimento.
          </p>
        </div>

        {/* Order Summary */}
        <div>
          <div
            className="bg-linen rounded-[4px] p-8"
            style={{ boxShadow: 'var(--shadow-card)' }}
          >
            <h2 className="font-display text-cocoa mb-6 text-xl font-[400]">
              Seu Pedido
            </h2>

            {mounted && items.length === 0 ? (
              <p className="text-smoke text-sm">Carrinho vazio.</p>
            ) : (
              <ul className="divide-mist divide-y">
                {items.map(({ product, quantity }) => (
                  <li key={product.id} className="flex items-center gap-4 py-4">
                    <div className="bg-sand relative h-14 w-12 flex-shrink-0 overflow-hidden rounded-[4px]">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-display text-cocoa text-sm font-[400]">
                        {product.name}
                      </p>
                      <p className="text-smoke/60 text-xs">Qtd: {quantity}</p>
                    </div>
                    <p className="font-display text-amber text-sm font-[300] italic">
                      R${' '}
                      {(product.price * quantity).toFixed(2).replace('.', ',')}
                    </p>
                  </li>
                ))}
              </ul>
            )}

            <div className="border-mist mt-4 border-t pt-4">
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-smoke">Subtotal</span>
                <span className="font-display text-cocoa font-[300] italic">
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
