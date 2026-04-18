export function SectionWrapper({ id, className = '', children }) {
  return (
    <section id={id} className={`py-20 px-4 sm:px-8 lg:px-16 ${className}`}>
      {children}
    </section>
  )
}
