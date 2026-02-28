'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useCartStore } from '@/store/cartStore'

export default function CartSidebar() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } =
    useCartStore()

  const total = totalPrice()

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCart()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [closeCart])

  return (
    <>
      {/* Overlay */}
      <div
        aria-hidden="true"
        onClick={closeCart}
        className={`fixed inset-0 z-50 bg-cocoa/30 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Sidebar */}
      <aside
        aria-label="Carrinho de compras"
        className={`fixed top-0 right-0 z-50 flex h-full w-full max-w-md flex-col bg-cream transition-transform duration-500 [box-shadow:var(--shadow-sidebar)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-sand px-6 py-5">
          <h2 className="font-display text-xl font-[300] tracking-wide text-cocoa">
            Carrinho
          </h2>
          <button
            onClick={closeCart}
            aria-label="Fechar carrinho"
            className="flex h-8 w-8 cursor-pointer items-center justify-center text-smoke transition-colors hover:text-cocoa"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
              <p className="font-display text-xl font-[300] italic text-smoke">
                O ritual ainda não começou.
              </p>
              <p className="text-sm text-smoke/60">
                Explore nossa coleção e encontre sua vela.
              </p>
              <Link
                href="/produtos"
                onClick={closeCart}
                className="mt-4 border border-cocoa/30 px-6 py-3 text-[0.72rem] font-[500] tracking-[0.14em] text-cocoa uppercase transition-colors hover:bg-cocoa hover:text-cream rounded-[2px]"
              >
                Explorar Coleção
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-6">
              {items.map(({ product, quantity }) => (
                <li key={product.id} className="flex gap-4">
                  {/* Product Image */}
                  <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden rounded-[4px] bg-sand">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex flex-1 flex-col gap-1.5">
                    <p className="font-display text-sm font-[400] leading-tight text-cocoa">
                      {product.name}
                    </p>
                    <p className="text-xs text-smoke">{product.aroma}</p>
                    <p className="font-display text-sm font-[300] italic text-amber">
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </p>

                    {/* Quantity + Remove */}
                    <div className="mt-auto flex items-center gap-4">
                      <div className="flex items-center gap-2 border border-mist rounded-[2px]">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          aria-label="Diminuir quantidade"
                          className="flex h-7 w-7 cursor-pointer items-center justify-center text-smoke transition-colors hover:text-cocoa"
                        >
                          −
                        </button>
                        <span className="w-4 text-center text-sm font-[400] text-cocoa">
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          aria-label="Aumentar quantidade"
                          className="flex h-7 w-7 cursor-pointer items-center justify-center text-smoke transition-colors hover:text-cocoa"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(product.id)}
                        aria-label={`Remover ${product.name}`}
                        className="cursor-pointer text-[0.68rem] tracking-wider text-smoke/60 uppercase transition-colors hover:text-cocoa"
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-sand px-6 py-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-smoke">Subtotal</span>
              <span className="font-display text-lg font-[300] italic text-cocoa">
                R$ {total.toFixed(2).replace('.', ',')}
              </span>
            </div>
            <p className="mb-5 text-xs text-smoke/60">
              Frete calculado no checkout
            </p>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="block w-full bg-amber py-4 text-center text-[0.78rem] font-[500] tracking-[0.14em] text-linen uppercase transition-colors hover:bg-glow hover:text-cocoa rounded-[2px]"
            >
              Finalizar Compra
            </Link>
            <button
              onClick={closeCart}
              className="mt-3 w-full py-2 text-center text-[0.72rem] tracking-wider text-smoke uppercase transition-colors hover:text-cocoa"
            >
              Continuar Explorando
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
