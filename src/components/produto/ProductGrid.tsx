import { Product } from '@/types'
import ProductCard from './ProductCard'

type ProductGridProps = {
  products: Product[]
  title?: string
  subtitle?: string
}

export default function ProductGrid({ products, title, subtitle }: ProductGridProps) {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        {(title || subtitle) && (
          <div className="mb-16 text-center">
            {subtitle && (
              <p className="mb-3 text-[0.72rem] font-[500] tracking-[0.22em] text-sage uppercase">
                {subtitle}
              </p>
            )}
            {title && (
              <>
                <h2 className="font-display text-4xl font-[300] text-cocoa md:text-5xl">
                  {title}
                </h2>
                <div className="divider-amber" />
              </>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 md:gap-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
