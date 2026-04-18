import { Heart, MapPin, Zap } from 'lucide-react'
import { SectionWrapper } from '../ui/SectionWrapper'
import { AnimatedEntry } from '../ui/AnimatedEntry'
import { content } from '../../data/content'

const iconMap = { heart: Heart, 'map-pin': MapPin, zap: Zap }

export default function About() {
  const { about } = content

  return (
    <SectionWrapper id="apropos" className="bg-off-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <AnimatedEntry>
              <span className="text-xs font-semibold uppercase tracking-widest text-aqua mb-3 block">
                {about.sectionLabel}
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-deep-blue mb-6 leading-snug">
                {about.headline}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">{about.p1}</p>
              <p className="text-gray-600 leading-relaxed mb-10">{about.p2}</p>
            </AnimatedEntry>

            {/* Values */}
            <div className="flex flex-col gap-5">
              {about.values.map((val, i) => {
                const Icon = iconMap[val.icon]
                return (
                  <AnimatedEntry key={val.title} delay={0.1 * (i + 1)}>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-aqua/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-aqua" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-deep-blue mb-0.5">{val.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{val.text}</p>
                      </div>
                    </div>
                  </AnimatedEntry>
                )
              })}
            </div>
          </div>

          {/* Image */}
          <AnimatedEntry delay={0.2}>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
                <img
                  src="/images/about.jpg"
                  alt="L'intérieur chaleureux de De Kantine"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative blob */}
              <div
                className="absolute -bottom-6 -left-6 w-48 h-48 bg-aqua/10 rounded-full -z-10"
                aria-hidden="true"
              />
              <div
                className="absolute -top-6 -right-6 w-32 h-32 bg-sand/20 rounded-full -z-10"
                aria-hidden="true"
              />
            </div>
          </AnimatedEntry>
        </div>
      </div>
    </SectionWrapper>
  )
}
