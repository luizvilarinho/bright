'use client'

import { useState } from 'react'
import ProductCard from '@/components/produto/ProductCard'
import { produtos } from '@/lib/produtos'
import { ProductCategory } from '@/types'

const categorias: { value: ProductCategory | 'todos'; label: string }[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'relaxamento', label: 'Relaxamento' },
  { value: 'meditacao', label: 'Meditação' },
  { value: 'casa', label: 'Casa' },
  { value: 'presente', label: 'Presente' },
]

export default function ProdutosPage() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'todos'>('todos')

  const filtered =
    activeCategory === 'todos'
      ? produtos
      : produtos.filter((p) => p.category === activeCategory)

  return (
    <>
      {/* Page Header */}
      <div className="bg-linen pb-12 pt-36 text-center md:pb-16 md:pt-44">
        <p className="mb-3 text-[0.72rem] font-[500] tracking-[0.22em] text-sage uppercase">
          A coleção
        </p>
        <h1
          className="font-display mx-auto mb-4 max-w-lg font-[300] text-cocoa"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
        >
          Cada vela, uma pausa.
        </h1>
        <div className="divider-amber" />
        <p className="mx-auto max-w-md text-sm leading-relaxed text-smoke">
          Aromas criados para diferentes momentos do seu ritual diário.
        </p>
      </div>

      {/* Filters */}
      <div className="sticky top-16 z-30 border-b border-mist bg-cream/95 backdrop-blur-sm md:top-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <div className="flex items-center gap-1 overflow-x-auto py-4 scrollbar-hide">
            {categorias.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`flex-shrink-0 cursor-pointer px-5 py-2 text-[0.72rem] font-[500] tracking-[0.12em] uppercase transition-all duration-200 rounded-[2px] ${
                  activeCategory === cat.value
                    ? 'bg-cocoa text-cream'
                    : 'text-smoke hover:text-cocoa'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20 lg:px-20">
        {filtered.length === 0 ? (
          <p className="py-20 text-center text-smoke">
            Nenhum produto nessa categoria no momento.
          </p>
        ) : (
          <>
            <p className="mb-8 text-sm text-smoke/60">
              {filtered.length} {filtered.length === 1 ? 'vela' : 'velas'}
            </p>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 md:gap-10 xl:grid-cols-4">
              {filtered.map((produto) => (
                <ProductCard key={produto.id} product={produto} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  )
}
