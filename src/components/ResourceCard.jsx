import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

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
      className={`relative flex flex-col gap-4 p-7 rounded-2xl h-full transition-all duration-300 ${
        available ? 'glass-card glow-effect' : 'bg-[#1a1a1a] opacity-30 cursor-not-allowed border border-white/5'
      }`}
      style={available ? { '--glow-color': colour } : {}}
    >
      {available && (
        <div
          className="absolute top-0 left-0 right-0 h-[2px] transition-transform duration-300 group-hover:scale-x-105"
          style={{ background: colour }}
        />
      )}
      
      <div className="flex items-center justify-between mb-2">
        <span className="text-3xl grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500">{icon}</span>
        {available && (
          <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md bg-white/5 border border-white/10 text-white/50 group-hover:text-white transition-colors">
            Ready
          </span>
        )}
      </div>

      <div>
        <h3 className="text-lg font-bold text-white mb-2 font-outfit">{label}</h3>
        <p className="text-sm text-[#888] leading-relaxed font-medium">{description}</p>
      </div>

      <div className="mt-auto pt-6 flex items-center justify-between">
        {available ? (
          <span className="text-xs font-black uppercase tracking-widest transition-all duration-300 group-hover:translate-x-1" style={{ color: colour }}>
            Start Learning →
          </span>
        ) : (
          <span className="text-[10px] font-black uppercase tracking-widest text-[#555]">Locked</span>
        )}
      </div>
    </div>
  )

  return available ? (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className="h-full"
    >
      <Link to={to} className="group block h-full">
        {inner}
      </Link>
    </motion.div>
  ) : (
    <div className="h-full">{inner}</div>
  )
}