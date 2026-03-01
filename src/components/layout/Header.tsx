'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useCartStore } from '@/store/cartStore'

const navLinks = [
  { href: '/produtos', label: 'Coleção' },
  { href: '/sobre', label: 'Nossa História' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { totalItems, openCart } = useCartStore()

  useEffect(() => {
    setMounted(true)
  }, [])

  const count = mounted ? totalItems() : 0

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/95 [box-shadow:var(--shadow-card)] backdrop-blur-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-12 lg:px-20">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-cocoa text-xl font-[300] tracking-[0.2em] uppercase md:text-2xl"
            onClick={() => setMobileOpen(false)}
          >
            Bright
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link font-body text-cocoa/80 hover:text-cocoa text-[0.82rem] font-[400] tracking-[0.1em] uppercase"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Cart Icon */}
            <button
              aria-label={`Carrinho — ${count} ${count === 1 ? 'item' : 'itens'}`}
              onClick={openCart}
              className="text-cocoa relative flex h-9 w-9 cursor-pointer items-center justify-center transition-opacity duration-200 hover:opacity-60"
            >
              <CartIcon />
              {count > 0 && (
                <span className="bg-amber text-linen absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full text-[0.6rem] font-[500]">
                  {count > 9 ? '9+' : count}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-9 w-9 cursor-pointer flex-col items-center justify-center gap-[5px] md:hidden"
            >
              <span
                className={`bg-cocoa h-px w-5 transition-all duration-300 ${mobileOpen ? 'translate-y-[7px] rotate-45' : ''}`}
              />
              <span
                className={`bg-cocoa h-px w-5 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`bg-cocoa h-px w-5 transition-all duration-300 ${mobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`bg-cream fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          mobileOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-display text-cocoa text-3xl font-[300] tracking-wide transition-opacity duration-200 hover:opacity-60"
              style={{ transitionDelay: mobileOpen ? `${i * 60}ms` : '0ms' }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/carrinho"
            onClick={() => setMobileOpen(false)}
            className="font-display text-cocoa text-3xl font-[300] tracking-wide transition-opacity duration-200 hover:opacity-60"
          >
            Carrinho{' '}
            {count > 0 && <span className="text-amber">({count})</span>}
          </Link>
        </nav>
      </div>
    </>
  )
}

function CartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}
