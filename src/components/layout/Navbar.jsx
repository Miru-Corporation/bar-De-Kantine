import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { content } from '../../data/content'
import { useScrollSpy } from '../../hooks/useScrollSpy'

const sectionIds = ['accueil', 'apropos', 'ambiance', 'piscine', 'menu', 'galerie', 'infos']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useScrollSpy(sectionIds)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleLink = () => setOpen(false)

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-deep-blue/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#accueil" className="flex flex-col leading-none" onClick={handleLink}>
          <span className="font-display font-bold text-xl text-white tracking-wide">
            De Kantine
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {content.nav.links.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = active === id
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-aqua bg-white/10'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Desktop CTA */}
        <a
          href={content.info.phone.href}
          className="hidden lg:inline-flex items-center gap-2 px-4 py-2 bg-aqua text-deep-blue rounded-full text-sm font-semibold hover:bg-aqua-light transition-colors duration-200"
        >
          <Phone size={14} />
          {content.nav.ctaLabel}
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-deep-blue/98 px-4 pb-6 pt-2 border-t border-white/10">
          <ul className="flex flex-col gap-1 mb-4">
            {content.nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLink}
                  className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={content.info.phone.href}
            onClick={handleLink}
            className="flex items-center justify-center gap-2 w-full py-3 bg-aqua text-deep-blue rounded-full font-semibold text-sm"
          >
            <Phone size={14} />
            {content.nav.ctaLabel}
          </a>
        </div>
      )}
    </header>
  )
}
