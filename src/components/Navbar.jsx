import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import subjects from '../data/subjects'

export default function Navbar() {
  const location = useLocation()
  const pathParts = location.pathname.split('/').filter(Boolean)
  const subjectSlug = pathParts[0]
  const topicSlug = pathParts[1]
  const resource = pathParts[2]
  
  const navigate = useNavigate()
  const subject = subjectSlug ? subjects.find(s => s.slug === subjectSlug) : null
  const topic = subject && topicSlug ? subject.topics.find(t => t.slug === topicSlug) : null

  const canGoBack = !!subjectSlug
  const RESOURCE_LABELS = { notes: 'Notes', quiz: 'Quiz', flashcards: 'Flashcards' }

  const handleBack = () => {
    if (resource) navigate(`/${subjectSlug}/${topicSlug}`)
    else if (topicSlug) navigate(`/${subjectSlug}`)
    else if (subjectSlug) navigate('/')
  }

  const accentColor = subject?.colour || '#e8e8e8'

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center px-8 h-16 gap-4 border-b border-white/5 bg-[#0f0f0f]/80 backdrop-blur-xl">
      <div 
        className="absolute bottom-[-1px] left-0 right-0 h-[1px] opacity-40 transition-colors duration-200"
        style={{ 
          background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
          boxShadow: `0 0 15px 1px ${accentColor}44`
        }} 
      />

      <div className="flex items-center gap-4">
        {canGoBack ? (
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleBack}
              className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M11 4L6 9L11 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
            <Link
              to="/"
              className="group flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 border border-white/10 transition-all hover:bg-white/10"
            >
              <svg
                width="16" height="16" viewBox="0 0 16 16" fill="none"
                className="transition-transform duration-150 group-hover:scale-110"
              >
                <path
                  d="M2 6.5L8 2L14 6.5V14H10V10H6V14H2V6.5Z"
                  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  className="transition-all duration-150 group-hover:fill-white/10"
                  stroke="currentColor" fill="transparent"
                />
              </svg>
            </Link>
          </div>
        ) : (
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="text-xl group-hover:rotate-12 transition-transform duration-300">🎓</span>
            <span className="text-sm font-black tracking-tight text-white uppercase font-outfit">GCSE Hub</span>
          </Link>
        )}
      </div>

      <div className="h-4 w-px bg-white/10 mx-1 hidden sm:block" />

      <div className="flex items-center gap-1 overflow-hidden">
        {subject && (
          <>
            <Link
              to={`/${subject.slug}`}
              className="text-sm font-bold transition-all duration-200 rounded-lg px-2 py-1 hover:bg-white/5 truncate max-w-[120px]"
              style={{ color: topic || resource ? '#666' : subject.colour }}
            >
              {subject.name}
            </Link>
          </>
        )}

        {topic && (
          <>
            <span className="text-[#333] text-xs select-none">/</span>
            <Link
              to={`/${subjectSlug}/${topic.slug}`}
              className="text-sm font-bold transition-all duration-200 rounded-lg px-2 py-1 hover:bg-white/5 truncate max-w-[150px]"
              style={{ color: resource ? '#666' : subject.colour }}
            >
              {topic.title}
            </Link>
          </>
        )}

        {resource && RESOURCE_LABELS[resource] && (
          <>
            <span className="text-[#333] text-xs select-none">/</span>
            <span
              className="text-sm font-bold rounded-lg px-2 py-1 bg-white/5 border border-white/10 cursor-default"
              style={{ color: subject.colour }}
            >
              {RESOURCE_LABELS[resource]}
            </span>
          </>
        )}
      </div>
    </nav>
  )
}