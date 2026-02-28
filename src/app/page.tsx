import type { Metadata } from 'next'
import Hero from '@/components/landing/Hero'
import PropositoSection from '@/components/landing/PropositoSection'
import ProductGrid from '@/components/produto/ProductGrid'
import ComoEFeito from '@/components/landing/ComoEFeito'
import BemEstar from '@/components/landing/BemEstar'
import Depoimentos from '@/components/landing/Depoimentos'
import Newsletter from '@/components/landing/Newsletter'
import { getProdutosFeatured } from '@/lib/produtos'

export const metadata: Metadata = {
  title: 'Bright — Velas Artesanais',
  description:
    'Velas feitas à mão com cera natural, óleos essenciais e intenção. Para momentos que importam.',
}

export default function HomePage() {
  const featuredProducts = getProdutosFeatured()

  return (
    <>
      <Hero />
      <PropositoSection />
      <ProductGrid
        products={featuredProducts}
        title="Destaques da Coleção"
        subtitle="Escolhas com intenção"
      />
      <ComoEFeito />
      <BemEstar />
      <Depoimentos />
      <Newsletter />
    </>
  )
}
