'use client'

import { useState } from 'react'
import { Product } from '@/types'
import { useCartStore } from '@/store/cartStore'

export default function AddToCartButton({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const { addItem, openCart } = useCartStore()

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) addItem(product)
    setAdded(true)
    openCart()
    setTimeout(() => setAdded(false), 2500)
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Quantity Selector */}
      <div className="flex items-center gap-4">
        <label className="text-[0.68rem] tracking-[0.16em] text-smoke/60 uppercase">
          Quantidade
        </label>
        <div className="flex items-center border border-mist rounded-[2px]">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            aria-label="Diminuir"
            className="flex h-9 w-9 cursor-pointer items-center justify-center text-smoke transition-colors hover:text-cocoa"
          >
            −
          </button>
          <span className="w-8 text-center text-sm font-[400] text-cocoa">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            aria-label="Aumentar"
            className="flex h-9 w-9 cursor-pointer items-center justify-center text-smoke transition-colors hover:text-cocoa"
          >
            +
          </button>
        </div>
      </div>

      {/* Add to Cart */}
      <button
        onClick={handleAdd}
        disabled={!product.inStock}
        className="cursor-pointer bg-amber py-4 text-[0.78rem] font-[500] tracking-[0.14em] text-linen uppercase transition-all duration-300 hover:bg-glow hover:text-cocoa disabled:cursor-not-allowed disabled:opacity-40 rounded-[2px]"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        {!product.inStock
          ? 'Esgotado'
          : added
            ? 'Adicionado ao Ritual ✓'
            : 'Adicionar ao Ritual'}
      </button>
    </div>
  )
}
