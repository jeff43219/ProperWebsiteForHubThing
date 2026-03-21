import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
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
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <Link
        to={`/${slug}`}
        className="group relative flex flex-col p-6 rounded-2xl overflow-hidden glass-card glow-effect transition-shadow duration-300"
        style={{
          '--glow-color': colour,
          minHeight: '160px',
        }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `radial-gradient(circle at 30% 50%, ${colour}15 0%, transparent 70%)` }}
        />
        
        <div
          className="absolute top-0 left-0 right-0 h-[3px] transition-transform duration-300 group-hover:scale-x-110"
          style={{ background: colour }}
        />

        <div className="relative flex items-start justify-between gap-2 mb-4">
          <h3 className="text-xl font-bold tracking-tight" style={{ color: colour }}>
            {name}
          </h3>
          <span
            className="text-[10px] font-bold uppercase tracking-wider tabular-nums px-2 py-1 rounded-full shrink-0 bg-white/5 border border-white/10"
            style={{ color: `${colour}bb` }}
          >
            {count} {count === 1 ? 'topic' : 'topics'}
          </span>
        </div>

        {hasAnyProgress && count > 0 && (
          <div className="relative flex gap-4 mt-auto pt-4 border-t border-white/5">
            {RESOURCES.map(r => (
              <div key={r} className="flex items-center gap-1.5 grayscale-[0.5] group-hover:grayscale-0 transition-all">
                <span className="text-sm">{ICONS[r]}</span>
                <span className="text-xs font-semibold tabular-nums" style={{ color: progress[r] > 0 ? `${colour}cc` : '#666' }}>
                  {progress[r]}/{count}
                </span>
              </div>
            ))}
          </div>
        )}
      </Link>
    </motion.div>
  )
}