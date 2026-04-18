import { SectionWrapper } from '../ui/SectionWrapper'
import { AnimatedEntry } from '../ui/AnimatedEntry'
import { GalleryItem } from '../ui/GalleryItem'
import { content } from '../../data/content'

export default function Gallery() {
  const { gallery } = content

  return (
    <SectionWrapper id="galerie" className="bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedEntry>
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-aqua mb-3 block">
              {gallery.sectionLabel}
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-deep-blue mb-3">
              {gallery.headline}
            </h2>
            <p className="text-gray-500 max-w-md mx-auto">{gallery.subheadline}</p>
          </div>
        </AnimatedEntry>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {gallery.photos.map((photo, i) => (
            <AnimatedEntry key={photo.src} delay={0.07 * i}>
              <GalleryItem src={photo.src} alt={photo.alt} />
            </AnimatedEntry>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
