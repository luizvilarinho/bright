'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useCartStore } from '@/store/cartStore'

export default function CartSidebar() {
  const [mounted, setMounted] = useState(false)
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } =
    useCartStore()

  useEffect(() => {
    setMounted(true)
  }, [])

  const total = mounted ? totalPrice() : 0

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
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
        className={`bg-cocoa/30 fixed inset-0 z-50 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      />

      {/* Sidebar */}
      <aside
        aria-label="Carrinho de compras"
        className={`bg-cream fixed top-0 right-0 z-50 flex h-full w-full max-w-md flex-col [box-shadow:var(--shadow-sidebar)] transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="border-sand flex items-center justify-between border-b px-6 py-5">
          <h2 className="font-display text-cocoa text-xl font-[300] tracking-wide">
            Carrinho
          </h2>
          <button
            onClick={closeCart}
            aria-label="Fechar carrinho"
            className="text-smoke hover:text-cocoa flex h-8 w-8 cursor-pointer items-center justify-center transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
              <p className="font-display text-smoke text-xl font-[300] italic">
                O ritual ainda não começou.
              </p>
              <p className="text-smoke/60 text-sm">
                Explore nossa coleção e encontre sua vela.
              </p>
              <Link
                href="/produtos"
                onClick={closeCart}
                className="border-cocoa/30 text-cocoa hover:bg-cocoa hover:text-cream mt-4 rounded-[2px] border px-6 py-3 text-[0.72rem] font-[500] tracking-[0.14em] uppercase transition-colors"
              >
                Explorar Coleção
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-6">
              {items.map(({ product, quantity }) => (
                <li key={product.id} className="flex gap-4">
                  {/* Product Image */}
                  <div className="bg-sand relative h-24 w-20 flex-shrink-0 overflow-hidden rounded-[4px]">
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
                    <p className="font-display text-cocoa text-sm leading-tight font-[400]">
                      {product.name}
                    </p>
                    <p className="text-smoke text-xs">{product.aroma}</p>
                    <p className="font-display text-amber text-sm font-[300] italic">
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </p>

                    {/* Quantity + Remove */}
                    <div className="mt-auto flex items-center gap-4">
                      <div className="border-mist flex items-center gap-2 rounded-[2px] border">
                        <button
                          onClick={() =>
                            updateQuantity(product.id, quantity - 1)
                          }
                          aria-label="Diminuir quantidade"
                          className="text-smoke hover:text-cocoa flex h-7 w-7 cursor-pointer items-center justify-center transition-colors"
                        >
                          −
                        </button>
                        <span className="text-cocoa w-4 text-center text-sm font-[400]">
                          {quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(product.id, quantity + 1)
                          }
                          aria-label="Aumentar quantidade"
                          className="text-smoke hover:text-cocoa flex h-7 w-7 cursor-pointer items-center justify-center transition-colors"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(product.id)}
                        aria-label={`Remover ${product.name}`}
                        className="text-smoke/60 hover:text-cocoa cursor-pointer text-[0.68rem] tracking-wider uppercase transition-colors"
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
          <div className="border-sand border-t px-6 py-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-smoke text-sm">Subtotal</span>
              <span className="font-display text-cocoa text-lg font-[300] italic">
                R$ {total.toFixed(2).replace('.', ',')}
              </span>
            </div>
            <p className="text-smoke/60 mb-5 text-xs">
              Frete calculado no checkout
            </p>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="bg-amber text-linen hover:bg-glow hover:text-cocoa block w-full rounded-[2px] py-4 text-center text-[0.78rem] font-[500] tracking-[0.14em] uppercase transition-colors"
            >
              Finalizar Compra
            </Link>
            <button
              onClick={closeCart}
              className="text-smoke hover:text-cocoa mt-3 w-full py-2 text-center text-[0.72rem] tracking-wider uppercase transition-colors"
            >
              Continuar Explorando
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
