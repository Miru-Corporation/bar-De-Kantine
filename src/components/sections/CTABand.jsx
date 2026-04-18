import { AnimatedEntry } from '../ui/AnimatedEntry'
import { CTAButton } from '../ui/CTAButton'
import { content } from '../../data/content'

export default function CTABand() {
  const { ctaBand } = content

  return (
    <div className="bg-sand py-16 px-4 sm:px-8">
      <AnimatedEntry>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-deep-blue mb-3">
            {ctaBand.headline}
          </h2>
          <p className="text-deep-blue/70 mb-8">{ctaBand.subtext}</p>
          <CTAButton
            variant="primary"
            label={ctaBand.cta.label}
            href="#infos"
            className="text-base px-8 py-4"
          />
        </div>
      </AnimatedEntry>
    </div>
  )
}
