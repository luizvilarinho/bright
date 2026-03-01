'use client'

import { useCartStore } from '@/store/cartStore'
import { Product } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

type ProductCardProps = {
  product: Product
}

const categoryLabels: Record<string, string> = {
  relaxamento: 'Relaxamento',
  meditacao: 'Meditação',
  casa: 'Casa',
  presente: 'Presente',
}

export default function ProductCard({ product }: ProductCardProps) {
  const [hovered, setHovered] = useState(false)
  const [added, setAdded] = useState(false)
  const { addItem, openCart } = useCartStore()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem(product)
    setAdded(true)
    openCart()
    setTimeout(() => setAdded(false), 2000)
  }

  const currentImage =
    hovered && product.images[1] ? product.images[1] : product.images[0]

  return (
    <article
      className="group flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={`/produtos/${product.slug}`} className="block">
        {/* Image Container */}
        <div className="relative mb-5 overflow-hidden rounded-[4px] bg-sand" style={{ aspectRatio: '3/4' }}>
          <Image
            src={currentImage}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-[600ms] ease-[var(--ease-smooth)] group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Category badge */}
          <span className="absolute top-4 left-4 font-body text-[0.65rem] font-[500] tracking-[0.18em] text-moss uppercase">
            {categoryLabels[product.category]}
          </span>
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-1.5 px-1">
          <h3 className="font-display text-[1.2rem] font-[400] text-cocoa leading-tight">
            {product.name}
          </h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-smoke">
            {product.shortDescription}
          </p>
          <p className="font-display mt-1 text-lg font-[300] italic text-amber-500">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </p>
        </div>
      </Link>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        disabled={!product.inStock}
        aria-label={`Adicionar ${product.name} ao carrinho`}
        className="mt-4 cursor-pointer border border-cocoa/30 bg-transparent px-6 py-3 text-[0.72rem] font-[500] tracking-[0.14em] text-cocoa uppercase transition-all duration-300 hover:border-cocoa hover:bg-cocoa hover:text-cream disabled:cursor-not-allowed disabled:opacity-40 rounded-[2px]"
      >
        {!product.inStock ? 'Esgotado' : added ? 'Adicionado ✓' : 'Adicionar ao Ritual'}
      </button>
    </article>
  )
}
