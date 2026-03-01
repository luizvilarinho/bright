'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useCartStore } from '@/store/cartStore'

export default function CartPageContent() {
  const [mounted, setMounted] = useState(false)
  const { items, removeItem, updateQuantity, totalPrice, clearCart } =
    useCartStore()

  useEffect(() => {
    setMounted(true)
  }, [])

  const total = mounted ? totalPrice() : 0

  if (!mounted || items.length === 0) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-24 text-center">
        <p className="font-display text-smoke mb-3 text-2xl font-[300] italic">
          O ritual ainda não começou.
        </p>
        <p className="text-smoke/60 mb-8 text-sm">
          Explore nossa coleção e encontre a vela certa para o seu momento.
        </p>
        <Link
          href="/produtos"
          className="bg-amber text-linen hover:bg-glow hover:text-cocoa rounded-[2px] px-8 py-4 text-[0.78rem] font-[500] tracking-[0.14em] uppercase transition-colors"
        >
          Explorar Coleção
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-5xl px-6 pt-28 pb-24 md:px-12 md:pt-36 lg:px-20">
      <h1 className="font-display text-cocoa mb-10 text-3xl font-[300] md:text-4xl">
        Carrinho
      </h1>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        {/* Items List */}
        <div className="lg:col-span-2">
          <ul className="divide-mist divide-y">
            {items.map(({ product, quantity }) => (
              <li key={product.id} className="flex gap-6 py-8">
                <Link href={`/produtos/${product.slug}`} className="block">
                  <div className="bg-sand relative h-32 w-24 flex-shrink-0 overflow-hidden rounded-[4px]">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                </Link>

                <div className="flex flex-1 flex-col gap-2">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Link
                        href={`/produtos/${product.slug}`}
                        className="font-display text-cocoa hover:text-amber text-lg font-[400] transition-colors"
                      >
                        {product.name}
                      </Link>
                      <p className="text-smoke text-xs">{product.aroma}</p>
                    </div>
                    <p className="font-display text-amber text-lg font-[300] whitespace-nowrap italic">
                      R${' '}
                      {(product.price * quantity).toFixed(2).replace('.', ',')}
                    </p>
                  </div>

                  <p className="text-smoke/60 text-sm">
                    R$ {product.price.toFixed(2).replace('.', ',')} / un.
                  </p>

                  {/* Quantity + Remove */}
                  <div className="mt-auto flex items-center gap-6">
                    <div className="border-mist flex items-center rounded-[2px] border">
                      <button
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        aria-label="Diminuir"
                        className="text-smoke hover:text-cocoa flex h-8 w-8 cursor-pointer items-center justify-center transition-colors"
                      >
                        −
                      </button>
                      <span className="text-cocoa w-6 text-center text-sm">
                        {quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        aria-label="Aumentar"
                        className="text-smoke hover:text-cocoa flex h-8 w-8 cursor-pointer items-center justify-center transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(product.id)}
                      className="text-smoke/50 hover:text-cocoa cursor-pointer text-[0.68rem] tracking-wider uppercase transition-colors"
                    >
                      Remover
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <button
            onClick={clearCart}
            className="text-smoke/40 hover:text-cocoa mt-4 cursor-pointer text-[0.68rem] tracking-wider uppercase transition-colors"
          >
            Limpar Carrinho
          </button>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div
            className="bg-linen sticky top-28 rounded-[4px] p-8"
            style={{ boxShadow: 'var(--shadow-card)' }}
          >
            <h2 className="font-display text-cocoa mb-6 text-xl font-[400]">
              Resumo
            </h2>

            <div className="mb-4 flex items-center justify-between text-sm">
              <span className="text-smoke">Subtotal</span>
              <span className="font-display text-cocoa font-[300] italic">
                R$ {total.toFixed(2).replace('.', ',')}
              </span>
            </div>
            <div className="mb-6 flex items-center justify-between text-sm">
              <span className="text-smoke">Frete</span>
              <span className="text-smoke/60">Calculado no checkout</span>
            </div>

            <div className="bg-mist mb-6 h-px" />

            <div className="mb-6 flex items-center justify-between">
              <span className="text-cocoa font-[500]">Total</span>
              <span className="font-display text-cocoa text-2xl font-[300] italic">
                R$ {total.toFixed(2).replace('.', ',')}
              </span>
            </div>

            <Link
              href="/checkout"
              className="bg-amber text-linen hover:bg-glow hover:text-cocoa block w-full rounded-[2px] py-4 text-center text-[0.78rem] font-[500] tracking-[0.14em] uppercase transition-colors"
            >
              Finalizar Compra
            </Link>

            <Link
              href="/produtos"
              className="text-smoke hover:text-cocoa mt-3 block w-full py-3 text-center text-[0.72rem] tracking-wider uppercase transition-colors"
            >
              Continuar Explorando
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
