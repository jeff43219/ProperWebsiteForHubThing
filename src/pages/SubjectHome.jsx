import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import subjects from '../data/subjects'
import ProgressRing from '../components/ProgressRing'

const RESOURCES = ['notes', 'quiz', 'flashcards']
const ICONS = { notes: '📄', quiz: '✏️', flashcards: '🃏' }

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 400, damping: 25 }
  }
}

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
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-12"
      >
        <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3 opacity-60" style={{ color: subject.colour }}>
          GCSE {subject.name}
        </p>
        <h1 className="text-5xl font-black tracking-tight text-[#f0f0f0] mb-6">{subject.name}</h1>
        
        {count > 0 && (
          <div className="flex flex-wrap gap-8 items-center bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-white leading-none">{count}</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#888]">Total Topics</span>
            </div>
            
            <div className="h-8 w-px bg-white/10 hidden sm:block" />

            <div className="flex gap-6">
              {RESOURCES.map(r => (
                <div key={r} className="flex items-center gap-3">
                  <ProgressRing 
                    progress={progress[r]} 
                    total={count} 
                    colour={subject.colour} 
                    size={44}
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white leading-none uppercase tracking-tighter">{r}</span>
                    <span className="text-[10px] font-semibold text-[#888] tabular-nums">{progress[r]}/{count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {count === 0 ? (
        <div className="flex items-center justify-center h-48 text-[#888] text-sm">No topics yet.</div>
      ) : (
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {topics.map(({ slug, title, resources: r }, i) => (
            <motion.div key={slug} variants={itemVariants}>
              <Link
                to={`/${subjectSlug}/${slug}`}
                className="group relative flex flex-col justify-between p-6 rounded-2xl glass-card glow-effect overflow-hidden transition-all duration-300"
                style={{ 
                  '--glow-color': subject.colour,
                  minHeight: '140px' 
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ background: `radial-gradient(circle at 10% 10%, ${subject.colour}10 0%, transparent 80%)` }}
                />
                
                <div className="relative flex justify-between items-start">
                  <span className="text-[10px] font-black tracking-widest tabular-nums opacity-40" style={{ color: subject.colour }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {r && (
                    <div className="flex gap-1.5 bg-black/20 px-2 py-1 rounded-full border border-white/5">
                      {RESOURCES.map(res => (
                        <span key={res} className="text-xs transition-opacity" style={{ opacity: r[res] ? 1 : 0.1 }}>
                          {ICONS[res]}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <h3 className="relative text-lg font-bold text-[#f0f0f0] leading-tight mt-4 group-hover:text-white transition-colors">
                  {title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </main>
  )
}