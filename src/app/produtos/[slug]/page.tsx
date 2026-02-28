import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getProdutoBySlug, produtos } from '@/lib/produtos'
import AddToCartButton from './AddToCartButton'
import ProductGrid from '@/components/produto/ProductGrid'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return produtos.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = getProdutoBySlug(slug)
  if (!product) return {}
  return {
    title: `${product.name} — Bright`,
    description: product.shortDescription,
  }
}

export default async function ProdutoPage({ params }: Props) {
  const { slug } = await params
  const product = getProdutoBySlug(slug)
  if (!product) notFound()

  // Related products (same category, excluding current)
  const related = produtos
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  return (
    <>
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-2 md:px-12 md:pt-36 lg:px-20">
        <nav className="flex items-center gap-2 text-[0.68rem] tracking-wider text-smoke/60 uppercase">
          <Link href="/" className="transition-colors hover:text-cocoa">Início</Link>
          <span>/</span>
          <Link href="/produtos" className="transition-colors hover:text-cocoa">Coleção</Link>
          <span>/</span>
          <span className="text-cocoa">{product.name}</span>
        </nav>
      </div>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16 lg:px-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Images */}
          <div className="grid grid-cols-2 gap-3">
            {product.images.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-[4px] bg-sand ${
                  i === 0 ? 'col-span-2' : 'col-span-1'
                }`}
                style={{ aspectRatio: i === 0 ? '4/3' : '3/4' }}
              >
                <Image
                  src={img}
                  alt={`${product.name} — imagem ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  sizes={i === 0 ? '(max-width: 1024px) 100vw, 50vw' : '25vw'}
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          {/* Info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="mb-3 text-[0.7rem] font-[500] tracking-[0.2em] text-sage uppercase">
              {product.category}
            </p>

            {/* Name */}
            <h1
              className="font-display mb-2 font-[300] leading-tight text-cocoa"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-display mb-6 text-2xl font-[300] italic text-amber">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </p>

            <div className="mb-6 h-px w-full bg-mist" />

            {/* Short description */}
            <p className="mb-6 text-base leading-[1.9] text-smoke">
              {product.description}
            </p>

            {/* Product details */}
            <div className="mb-8 grid grid-cols-3 gap-4">
              {[
                { label: 'Aroma', value: product.aroma },
                { label: 'Queima', value: product.burnTime },
                { label: 'Tamanho', value: product.size },
              ].map((detail) => (
                <div key={detail.label} className="bg-linen p-4 rounded-[4px]">
                  <p className="mb-1 text-[0.65rem] tracking-[0.16em] text-smoke/60 uppercase">
                    {detail.label}
                  </p>
                  <p className="font-display text-sm font-[400] text-cocoa">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Add to Cart */}
            <AddToCartButton product={product} />

            {/* Care instructions */}
            <div className="mt-8 border-t border-mist pt-6">
              <p className="mb-2 text-[0.68rem] tracking-[0.16em] text-smoke/60 uppercase">
                Cuidados
              </p>
              <ul className="space-y-1.5 text-sm text-smoke">
                <li>• Apague após 4 horas de uso contínuo</li>
                <li>• Mantenha o pavio aparado a 5mm antes de acender</li>
                <li>• Evite correntes de ar durante o uso</li>
                <li>• Não queime até o fim — deixe 1cm de cera no fundo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <ProductGrid
          products={related}
          title="Você também pode gostar"
          subtitle="Da mesma categoria"
        />
      )}
    </>
  )
}
