import type { Metadata } from 'next'
import CartPageContent from './CartPageContent'

export const metadata: Metadata = {
  title: 'Carrinho — Bright',
  description: 'Seu carrinho de compras Bright.',
}

export default function CarrinhoPage() {
  return <CartPageContent />
}
