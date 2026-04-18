import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { CTAButton } from '../ui/CTAButton'
import { content } from '../../data/content'
import { asset } from '../../utils/asset'

export default function Hero() {
  const { hero } = content

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${asset('images/hero-bg.jpg')})` }}
        aria-hidden="true"
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-deep-blue/80 via-deep-blue/60 to-deep-blue/40"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-8 text-center text-white py-32">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <span className="h-2 w-2 rounded-full bg-green animate-pulse" />
          <span className="text-sm font-medium bg-white/15 backdrop-blur-sm px-4 py-1.5 rounded-full">
            {hero.badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold text-6xl sm:text-7xl lg:text-8xl leading-none mb-3"
        >
          {hero.headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-aqua-light text-xl sm:text-2xl font-medium mb-6 tracking-wide"
        >
          {hero.subheadline}
        </motion.p>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-white/80 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10"
        >
          {hero.body}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <CTAButton variant="call" label={hero.cta1.label} className="text-base px-8 py-4" />
          <CTAButton variant="maps" label={hero.cta2.label} target="_blank" className="text-base px-8 py-4" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/60 text-xs"
      >
        <span>{hero.scrollHint}</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
