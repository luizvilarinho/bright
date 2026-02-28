import Link from 'next/link'

const footerLinks = {
  navegacao: [
    { href: '/', label: 'Início' },
    { href: '/produtos', label: 'Coleção' },
    { href: '/sobre', label: 'Nossa História' },
    { href: '/carrinho', label: 'Carrinho' },
  ],
  info: [
    { href: '#', label: 'Política de Privacidade' },
    { href: '#', label: 'Termos de Uso' },
    { href: '#', label: 'Trocas e Devoluções' },
    { href: '#', label: 'FAQ' },
  ],
}

const socialLinks = [
  { href: '#', label: 'Instagram', abbr: 'IG' },
  { href: '#', label: 'Pinterest', abbr: 'PT' },
]

export default function Footer() {
  return (
    <footer className="bg-cocoa text-cream/60">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <p className="font-display mb-4 text-2xl font-[300] tracking-[0.2em] text-cream uppercase">
              Bright
            </p>
            <p className="font-display mb-8 text-base font-[300] italic text-cream/50">
              &ldquo;Cada vela, uma pausa.&rdquo;
            </p>
            <p className="max-w-xs text-sm leading-relaxed">
              Velas artesanais feitas com cera de soja pura, óleos essenciais e
              intenção. Para quem encontra paz nas coisas pequenas.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="mb-5 text-[0.72rem] tracking-[0.18em] text-cream/40 uppercase">
              Navegação
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.navegacao.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-amber"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="mb-5 text-[0.72rem] tracking-[0.18em] text-cream/40 uppercase">
              Informações
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.info.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-amber"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-cream/30">
            © {new Date().getFullYear()} Bright. Feito com intenção.
          </p>

          <div className="flex gap-6">
            {socialLinks.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="text-xs tracking-widest text-cream/40 uppercase transition-colors duration-200 hover:text-amber"
              >
                {s.abbr}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
