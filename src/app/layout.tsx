import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartSidebar from '@/components/carrinho/CartSidebar'

const cormorant = Cormorant_Garamond({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const jost = Jost({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://bright-velas.vercel.app'), // TODO: Change to your production domain
  title: {
    default: 'Bright — Velas Artesanais',
    template: '%s | Bright',
  },
  description:
    'Velas feitas à mão com cera natural, óleos essenciais e intenção. Para momentos que importam.',
  openGraph: {
    title: 'Bright — Velas Artesanais',
    description:
      'Velas feitas à mão com cera natural, óleos essenciais e intenção. Para momentos que importam.',
    url: 'https://bright-velas.vercel.app',
    siteName: 'Bright Velas Artesanais',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bright — Velas Artesanais',
    description:
      'Velas feitas à mão com cera natural, óleos essenciais e intenção.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <CartSidebar />
      </body>
    </html>
  )
}
