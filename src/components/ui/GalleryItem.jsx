export function GalleryItem({ src, alt }) {
  return (
    <div className="overflow-hidden rounded-2xl aspect-square group cursor-pointer">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
  )
}
