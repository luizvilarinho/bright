import type { Metadata } from 'next'
import CheckoutContent from './CheckoutContent'

export const metadata: Metadata = {
  title: 'Checkout — Bright',
  description: 'Finalize seu pedido.',
}

export default function CheckoutPage() {
  return <CheckoutContent />
}
