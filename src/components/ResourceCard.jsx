import { Link } from 'react-router-dom'

const META = {
  notes: {
    icon: '📄',
    label: 'Notes',
    description: 'Clear, concise revision notes covering all key concepts.',
  },
  quiz: {
    icon: '✏️',
    label: 'Quiz',
    description: 'Test your knowledge with timed multiple choice questions.',
  },
  flashcards: {
    icon: '🃏',
    label: 'Flashcards',
    description: 'Active recall practice with flip cards and self-marking.',
  },
}

export default function ResourceCard({ slug, subjectSlug, topicSlug, available, colour }) {
  const { icon, label, description } = META[slug]
  const to = `/${subjectSlug}/${topicSlug}/${slug}`

  const inner = (
    <div
      className="relative flex flex-col gap-3 p-6 rounded-xl h-full transition-transform duration-200 ease-out"
      style={{
        background: available ? `${colour}12` : '#1a1a1a',
        border: `1px solid ${available ? `${colour}30` : '#2a2a2a'}`,
        opacity: available ? 1 : 0.45,
      }}
    >
      {available && (
        <div
          className="absolute top-0 left-0 right-0 h-[2px] rounded-t-xl"
          style={{ background: colour }}
        />
      )}
      <span className="text-2xl">{icon}</span>
      <div>
        <p className="text-sm font-bold text-[#f0f0f0] mb-1">{label}</p>
        <p className="text-xs text-[#888] leading-relaxed">{description}</p>
      </div>
      {available ? (
        <span className="text-xs font-semibold mt-auto transition-colors duration-150" style={{ color: colour }}>
          Start →
        </span>
      ) : (
        <span className="text-xs font-semibold text-[#555] mt-auto">Not available yet</span>
      )}
    </div>
  )

  return available ? (
    <Link to={to} className="group hover:-translate-y-1 transition-transform duration-200 block h-full">
      {inner}
    </Link>
  ) : (
    <div className="cursor-not-allowed h-full">{inner}</div>
  )
}