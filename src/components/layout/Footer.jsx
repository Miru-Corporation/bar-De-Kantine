import { Phone, MapPin, Mail } from 'lucide-react'
import { content } from '../../data/content'

export default function Footer() {
  const { footer, info, siteName } = content

  return (
    <footer className="bg-deep-blue-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="font-display font-bold text-2xl mb-4">{siteName}</p>
            <p className="text-white/60 text-sm leading-relaxed">{footer.tagline}</p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-aqua mb-4">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2">
              {footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-aqua mb-4">
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-white/70 text-sm">
                <MapPin size={15} className="mt-0.5 flex-shrink-0 text-aqua" />
                <span>
                  {info.address.street}<br />{info.address.city}
                </span>
              </li>
              <li>
                <a
                  href={info.phone.href}
                  className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <Phone size={15} className="text-aqua" />
                  {info.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={info.email.href}
                  className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <Mail size={15} className="text-aqua" />
                  {info.email.display}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/40 text-xs">{footer.copyright}</p>
          <a
            href={info.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-aqua text-xs transition-colors flex items-center gap-1"
          >
            <MapPin size={11} />
            Voir sur Google Maps
          </a>
        </div>
      </div>
    </footer>
  )
}
