import { SectionWrapper } from '../ui/SectionWrapper'
import { AnimatedEntry } from '../ui/AnimatedEntry'
import { MenuCard } from '../ui/MenuCard'
import { content } from '../../data/content'

export default function Menu() {
  const { menu } = content

  return (
    <SectionWrapper id="menu" className="bg-off-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedEntry>
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-aqua mb-3 block">
              {menu.sectionLabel}
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-deep-blue mb-3">
              {menu.headline}
            </h2>
            <p className="text-gray-500">{menu.subheadline}</p>
          </div>
        </AnimatedEntry>

        {/* Boissons */}
        <AnimatedEntry delay={0.1}>
          <h3 className="font-display font-semibold text-xl text-deep-blue mb-5 flex items-center gap-3">
            <span className="w-8 h-px bg-aqua block" aria-hidden="true" />
            Boissons
            <span className="w-8 h-px bg-aqua block" aria-hidden="true" />
          </h3>
        </AnimatedEntry>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {menu.drinks.map((item, i) => (
            <AnimatedEntry key={item.name} delay={0.05 * i}>
              <MenuCard name={item.name} description={item.description} tag={item.tag} />
            </AnimatedEntry>
          ))}
        </div>

        {/* Snacks */}
        <AnimatedEntry delay={0.1}>
          <h3 className="font-display font-semibold text-xl text-deep-blue mb-5 flex items-center gap-3">
            <span className="w-8 h-px bg-sand block" aria-hidden="true" />
            Snacks
            <span className="w-8 h-px bg-sand block" aria-hidden="true" />
          </h3>
        </AnimatedEntry>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
          {menu.snacks.map((item, i) => (
            <AnimatedEntry key={item.name} delay={0.05 * i}>
              <MenuCard name={item.name} description={item.description} tag={item.tag} />
            </AnimatedEntry>
          ))}
        </div>

        <AnimatedEntry delay={0.2}>
          <p className="text-center text-gray-400 text-xs italic">{menu.seasonalNote}</p>
        </AnimatedEntry>
      </div>
    </SectionWrapper>
  )
}
