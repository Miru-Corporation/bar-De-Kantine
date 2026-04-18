import { Clock, MapPin, Phone, Mail } from 'lucide-react'
import { SectionWrapper } from '../ui/SectionWrapper'
import { AnimatedEntry } from '../ui/AnimatedEntry'
import { CTAButton } from '../ui/CTAButton'
import { content } from '../../data/content'

export default function Info() {
  const { info } = content

  return (
    <SectionWrapper id="infos" className="bg-deep-blue text-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedEntry>
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-aqua mb-3 block">
              {info.sectionLabel}
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-2">{info.headline}</h2>
          </div>
        </AnimatedEntry>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Horaires */}
          <AnimatedEntry delay={0.05}>
            <div className="bg-white/8 rounded-3xl p-8 h-full">
              <div className="flex items-center gap-2 mb-6">
                <Clock size={18} className="text-aqua" />
                <h3 className="font-semibold text-white text-sm uppercase tracking-wider">
                  {info.hours.label}
                </h3>
              </div>
              <ul className="flex flex-col gap-3">
                {info.hours.schedule.map((row) => (
                  <li key={row.days} className="flex items-center justify-between gap-4">
                    <span className="text-white/60 text-sm">{row.days}</span>
                    <span className="text-white font-medium text-sm whitespace-nowrap">
                      {row.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedEntry>

          {/* Adresse + Map */}
          <AnimatedEntry delay={0.1}>
            <div className="bg-white/8 rounded-3xl p-8 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-6">
                <MapPin size={18} className="text-aqua" />
                <h3 className="font-semibold text-white text-sm uppercase tracking-wider">
                  {info.address.label}
                </h3>
              </div>
              <p className="text-white/80 mb-4 text-sm">
                {info.address.street}<br />{info.address.city}
              </p>
              <div className="rounded-xl overflow-hidden flex-1 min-h-40 bg-white/10">
                <iframe
                  title="Localisation De Kantine"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2495.8!2d4.2865855!3d50.7998372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c7a3a42ac631%3A0xf87504178445fd1!2sDe%20Kantine!5e0!3m2!1sfr!2sbe!4v1713445200000!5m2!1sfr!2sbe"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '160px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </AnimatedEntry>

          {/* Contact */}
          <AnimatedEntry delay={0.15}>
            <div className="bg-white/8 rounded-3xl p-8 h-full flex flex-col">
              <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-6">
                Contact
              </h3>
              <ul className="flex flex-col gap-3 mb-8">
                <li className="flex items-center gap-2 text-white/70 text-sm">
                  <Phone size={14} className="text-aqua flex-shrink-0" />
                  <a href={info.phone.href} className="hover:text-white transition-colors">
                    {info.phone.display}
                  </a>
                </li>
                <li className="flex items-center gap-2 text-white/70 text-sm">
                  <Mail size={14} className="text-aqua flex-shrink-0" />
                  <a href={info.email.href} className="hover:text-white transition-colors break-all">
                    {info.email.display}
                  </a>
                </li>
                <li className="flex items-start gap-2 text-white/70 text-sm">
                  <MapPin size={14} className="text-aqua flex-shrink-0 mt-0.5" />
                  <span>{info.address.street}, {info.address.city}</span>
                </li>
              </ul>

              <div className="flex flex-col gap-3 mt-auto">
                {info.ctas.map((cta) => (
                  <CTAButton
                    key={cta.type}
                    variant={cta.type}
                    label={cta.label}
                    target={cta.type === 'maps' ? '_blank' : undefined}
                    className="w-full justify-center"
                  />
                ))}
              </div>
            </div>
          </AnimatedEntry>
        </div>
      </div>
    </SectionWrapper>
  )
}
