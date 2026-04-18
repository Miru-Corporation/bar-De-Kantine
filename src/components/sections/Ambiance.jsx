import { Coffee, Activity, Users } from 'lucide-react'
import { SectionWrapper } from '../ui/SectionWrapper'
import { AnimatedEntry } from '../ui/AnimatedEntry'
import { content } from '../../data/content'

const iconMap = { coffee: Coffee, activity: Activity, users: Users }

export default function Ambiance() {
  const { ambiance } = content

  return (
    <SectionWrapper id="ambiance" className="bg-soft-grey">
      <div className="max-w-7xl mx-auto">
        {/* Pull quote */}
        <AnimatedEntry>
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-wood mb-4 block">
              {ambiance.sectionLabel}
            </span>
            <blockquote className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-deep-blue mb-6 leading-snug max-w-2xl mx-auto">
              "{ambiance.pullQuote}"
            </blockquote>
            <h2 className="text-lg font-semibold text-gray-500 mb-4">{ambiance.headline}</h2>
            <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">{ambiance.body}</p>
          </div>
        </AnimatedEntry>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ambiance.features.map((feat, i) => {
            const Icon = iconMap[feat.icon]
            return (
              <AnimatedEntry key={feat.title} delay={0.1 * i}>
                <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-deep-blue/5 flex items-center justify-center mx-auto mb-5">
                    <Icon size={24} className="text-deep-blue" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-deep-blue mb-3">
                    {feat.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feat.text}</p>
                </div>
              </AnimatedEntry>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
