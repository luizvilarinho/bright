'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCartStore } from '@/store/cartStore'

export default function CartPageContent() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCartStore()
  const total = totalPrice()

  if (items.length === 0) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-24 text-center">
        <p className="font-display mb-3 text-2xl font-[300] italic text-smoke">
          O ritual ainda não começou.
        </p>
        <p className="mb-8 text-sm text-smoke/60">
          Explore nossa coleção e encontre a vela certa para o seu momento.
        </p>
        <Link
          href="/produtos"
          className="bg-amber px-8 py-4 text-[0.78rem] font-[500] tracking-[0.14em] text-linen uppercase transition-colors hover:bg-glow hover:text-cocoa rounded-[2px]"
        >
          Explorar Coleção
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-5xl px-6 pt-28 pb-24 md:px-12 md:pt-36 lg:px-20">
      <h1 className="font-display mb-10 font-[300] text-3xl text-cocoa md:text-4xl">
        Carrinho
      </h1>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        {/* Items List */}
        <div className="lg:col-span-2">
          <ul className="divide-y divide-mist">
            {items.map(({ product, quantity }) => (
              <li key={product.id} className="flex gap-6 py-8">
                <Link href={`/produtos/${product.slug}`} className="block">
                  <div className="relative h-32 w-24 flex-shrink-0 overflow-hidden rounded-[4px] bg-sand">
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
                        className="font-display text-lg font-[400] text-cocoa hover:text-amber transition-colors"
                      >
                        {product.name}
                      </Link>
                      <p className="text-xs text-smoke">{product.aroma}</p>
                    </div>
                    <p className="font-display text-lg font-[300] italic text-amber whitespace-nowrap">
                      R$ {(product.price * quantity).toFixed(2).replace('.', ',')}
                    </p>
                  </div>

                  <p className="text-sm text-smoke/60">
                    R$ {product.price.toFixed(2).replace('.', ',')} / un.
                  </p>

                  {/* Quantity + Remove */}
                  <div className="mt-auto flex items-center gap-6">
                    <div className="flex items-center border border-mist rounded-[2px]">
                      <button
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        aria-label="Diminuir"
                        className="flex h-8 w-8 cursor-pointer items-center justify-center text-smoke hover:text-cocoa transition-colors"
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-sm text-cocoa">{quantity}</span>
                      <button
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        aria-label="Aumentar"
                        className="flex h-8 w-8 cursor-pointer items-center justify-center text-smoke hover:text-cocoa transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(product.id)}
                      className="cursor-pointer text-[0.68rem] tracking-wider text-smoke/50 uppercase hover:text-cocoa transition-colors"
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
            className="mt-4 cursor-pointer text-[0.68rem] tracking-wider text-smoke/40 uppercase hover:text-cocoa transition-colors"
          >
            Limpar Carrinho
          </button>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 bg-linen p-8 rounded-[4px]" style={{ boxShadow: 'var(--shadow-card)' }}>
            <h2 className="font-display mb-6 text-xl font-[400] text-cocoa">
              Resumo
            </h2>

            <div className="mb-4 flex items-center justify-between text-sm">
              <span className="text-smoke">Subtotal</span>
              <span className="font-display font-[300] italic text-cocoa">
                R$ {total.toFixed(2).replace('.', ',')}
              </span>
            </div>
            <div className="mb-6 flex items-center justify-between text-sm">
              <span className="text-smoke">Frete</span>
              <span className="text-smoke/60">Calculado no checkout</span>
            </div>

            <div className="mb-6 h-px bg-mist" />

            <div className="mb-6 flex items-center justify-between">
              <span className="font-[500] text-cocoa">Total</span>
              <span className="font-display text-2xl font-[300] italic text-cocoa">
                R$ {total.toFixed(2).replace('.', ',')}
              </span>
            </div>

            <Link
              href="/checkout"
              className="block w-full bg-amber py-4 text-center text-[0.78rem] font-[500] tracking-[0.14em] text-linen uppercase transition-colors hover:bg-glow hover:text-cocoa rounded-[2px]"
            >
              Finalizar Compra
            </Link>

            <Link
              href="/produtos"
              className="mt-3 block w-full py-3 text-center text-[0.72rem] tracking-wider text-smoke uppercase transition-colors hover:text-cocoa"
            >
              Continuar Explorando
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
