import { SectionWrapper } from '../ui/SectionWrapper'
import { AnimatedEntry } from '../ui/AnimatedEntry'
import { content } from '../../data/content'

export default function Pool() {
  const { pool } = content

  return (
    <SectionWrapper
      id="piscine"
      className="bg-gradient-to-br from-deep-blue to-[#0e6e9e] text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <AnimatedEntry>
            <span className="text-xs font-semibold uppercase tracking-widest text-aqua-light mb-3 block">
              {pool.sectionLabel}
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl leading-snug mb-6">
              {pool.headline}
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">{pool.body}</p>
            <p className="text-white/60 text-sm leading-relaxed">{pool.subtext}</p>
          </AnimatedEntry>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {pool.stats.map((stat, i) => (
              <AnimatedEntry key={stat.label} delay={0.15 * i}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-colors">
                  <p className="font-display font-bold text-4xl sm:text-5xl text-white mb-2">
                    {stat.value}
                  </p>
                  <p className="text-white/70 text-xs font-medium uppercase tracking-wide leading-snug">
                    {stat.label}
                  </p>
                </div>
              </AnimatedEntry>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
