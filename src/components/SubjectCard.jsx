import { Link } from 'react-router-dom'
import subjects from '../data/subjects'

const RESOURCES = ['notes', 'quiz', 'flashcards']
const ICONS = { notes: '📄', quiz: '✏️', flashcards: '🃏' }

export default function SubjectCard({ name, slug, colour }) {
  const subject = subjects.find(s => s.slug === slug)
  const topics = subject?.topics ?? []
  const count = topics.length

  const progress = RESOURCES.reduce((acc, r) => {
    acc[r] = topics.filter(t => t.resources?.[r]).length
    return acc
  }, {})

  const hasAnyProgress = RESOURCES.some(r => progress[r] > 0)

  return (
    <Link
      to={`/${slug}`}
      className="group relative flex flex-col p-6 rounded-2xl overflow-hidden transition-all duration-200 ease-out hover:-translate-y-1"
      style={{
        background: `${colour}18`,
        border: `1px solid ${colour}35`,
        minHeight: '140px',
        boxShadow: '0 0 0 0 transparent',
      }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = `0 0 18px 2px ${colour}35`}
      onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 0 0 transparent'}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ background: `radial-gradient(circle at 30% 50%, ${colour}30 0%, transparent 70%)` }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
        style={{ background: colour }}
      />
      <div className="relative flex items-start justify-between gap-2">
        <span className="text-xl font-bold tracking-tight" style={{ color: colour }}>
          {name}
        </span>
        <span
          className="text-xs font-semibold tabular-nums px-2 py-0.5 rounded-full shrink-0 mt-0.5"
          style={{ background: `${colour}22`, color: `${colour}cc` }}
        >
          {count} {count === 1 ? 'topic' : 'topics'}
        </span>
      </div>
      {hasAnyProgress && count > 0 && (
        <div className="relative flex gap-3 mt-auto pt-4">
          {RESOURCES.map(r => (
            <div key={r} className="flex items-center gap-1">
              <span className="text-xs">{ICONS[r]}</span>
              <span className="text-xs tabular-nums" style={{ color: progress[r] > 0 ? `${colour}cc` : '#444' }}>
                {progress[r]}/{count}
              </span>
            </div>
          ))}
        </div>
      )}
    </Link>
  )
}