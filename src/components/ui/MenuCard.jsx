const tagColors = {
  Chaud:    'bg-orange-100 text-orange-700',
  Froid:    'bg-sky-100 text-sky-700',
  Alcool:   'bg-purple-100 text-purple-700',
  Frais:    'bg-emerald-100 text-emerald-700',
  Végé:     'bg-green-100 text-green-700',
  Sucré:    'bg-pink-100 text-pink-700',
  Sportif:  'bg-amber-100 text-amber-700',
}

export function MenuCard({ name, description, tag }) {
  const tagClass = tagColors[tag] ?? 'bg-gray-100 text-gray-600'

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col gap-2">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-deep-blue text-sm leading-snug">{name}</h3>
        <span className={`text-xs px-2 py-0.5 rounded-full font-medium whitespace-nowrap flex-shrink-0 ${tagClass}`}>
          {tag}
        </span>
      </div>
      <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
    </div>
  )
}
