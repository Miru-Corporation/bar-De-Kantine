import { Phone, MapPin, Mail } from 'lucide-react'
import { content } from '../../data/content'

const variants = {
  call: {
    icon: Phone,
    href: content.info.phone.href,
    className: 'bg-aqua text-deep-blue hover:bg-aqua-light',
  },
  maps: {
    icon: MapPin,
    href: content.info.googleMapsUrl,
    className: 'bg-sand text-deep-blue hover:bg-sand-light',
  },
  email: {
    icon: Mail,
    href: content.info.email.href,
    className: 'bg-green text-white hover:opacity-90',
  },
  primary: {
    icon: null,
    href: '#',
    className: 'bg-deep-blue text-off-white hover:bg-deep-blue-dark',
  },
  secondary: {
    icon: null,
    href: '#',
    className: 'border-2 border-off-white text-off-white hover:bg-white/10',
  },
  'primary-outline': {
    icon: null,
    href: '#',
    className: 'border-2 border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-off-white',
  },
}

export function CTAButton({ variant = 'primary', label, href, className = '', target }) {
  const cfg = variants[variant] ?? variants.primary
  const Icon = cfg.icon
  const resolvedHref = href ?? cfg.href

  return (
    <a
      href={resolvedHref}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm
                  transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer
                  ${cfg.className} ${className}`}
    >
      {Icon && <Icon size={16} />}
      {label}
    </a>
  )
}
