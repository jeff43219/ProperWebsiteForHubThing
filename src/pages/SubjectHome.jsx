import { Link, useParams } from 'react-router-dom'
import subjects from '../data/subjects'

const RESOURCES = ['notes', 'quiz', 'flashcards']
const ICONS = { notes: '📄', quiz: '✏️', flashcards: '🃏' }

export default function SubjectHome() {
  const { subjectSlug } = useParams()
  const subject = subjects.find(s => s.slug === subjectSlug)

  if (!subject) return (
    <div className="flex items-center justify-center h-64 text-[#888]">Subject not found.</div>
  )

  const topics = subject.topics
  const count = topics.length

  const progress = RESOURCES.reduce((acc, r) => {
    acc[r] = topics.filter(t => t.resources?.[r]).length
    return acc
  }, {})

  return (
    <main className="px-8 py-12 max-w-5xl mx-auto">
      <div className="mb-10">
        <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: subject.colour }}>
          GCSE {subject.name}
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight text-[#f0f0f0]">{subject.name}</h1>
        {count > 0 && (
          <p className="text-base font-semibold text-[#888] mt-2">{count} {count === 1 ? 'topic' : 'topics'}</p>
        )}
        {count > 0 && (
          <div className="flex gap-4 mt-3">
            {RESOURCES.map(r => (
              <div key={r} className="flex items-center gap-1.5">
                <span className="text-sm">{ICONS[r]}</span>
                <span className="text-xs font-semibold tabular-nums" style={{ color: progress[r] > 0 ? subject.colour : '#444' }}>
                  {progress[r]}/{count}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {count === 0 ? (
        <div className="flex items-center justify-center h-48 text-[#888] text-sm">No topics yet.</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {topics.map(({ slug, title, resources: r }, i) => (
            <Link
              key={slug}
              to={`/${subjectSlug}/${slug}`}
              className="group relative flex flex-col justify-between p-5 rounded-xl overflow-hidden transition-transform duration-200 ease-out hover:-translate-y-1"
              style={{ background: `${subject.colour}12`, border: `1px solid ${subject.colour}30`, minHeight: '120px' }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ background: `radial-gradient(circle at 30% 50%, ${subject.colour}20 0%, transparent 70%)` }}
              />
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: subject.colour }}
              />
              <span className="relative text-xs font-bold tabular-nums" style={{ color: `${subject.colour}99` }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="relative text-sm font-semibold text-[#f0f0f0] leading-snug mt-2">
                {title}
              </span>
              {r && (
                <div className="relative flex gap-2 mt-3">
                  {RESOURCES.map(res => (
                    <span key={res} className="text-xs" style={{ opacity: r[res] ? 1 : 0.25 }}>
                      {ICONS[res]}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      )}
    </main>
  )
}