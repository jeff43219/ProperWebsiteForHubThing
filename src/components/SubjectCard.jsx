import { Link } from 'react-router-dom'
import subjects from '../data/subjects'

export default function SubjectCard({ name, slug, colour }) {
  const subject = subjects.find(s => s.slug === slug)
  const count = subject?.topics?.length ?? 0

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
    </Link>
  )
}