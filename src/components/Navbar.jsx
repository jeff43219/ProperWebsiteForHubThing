import { Link, useParams, useNavigate } from 'react-router-dom'
import subjects from '../data/subjects'

export default function Navbar() {
  const { subjectSlug, topicSlug, resource } = useParams()
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center px-6 h-14 gap-3 border-b border-[#2a2a2a] bg-[#0f0f0f]/90 backdrop-blur-sm">
      {canGoBack ? (
        <>
          <button
            onClick={handleBack}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#222] border border-[#333] shrink-0 transition-transform duration-150 hover:scale-110 active:scale-95"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11 4L6 9L11 14" stroke="#e8e8e8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <Link
            to="/"
            className="group flex items-center justify-center w-10 h-10 rounded-full bg-[#222] border border-[#333] shrink-0 transition-all duration-150 hover:bg-[#2a2a2a]"
          >
            <svg
              width="16" height="16" viewBox="0 0 16 16" fill="none"
              className="transition-transform duration-150 group-hover:scale-125"
            >
              <path
                d="M2 6.5L8 2L14 6.5V14H10V10H6V14H2V6.5Z"
                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                className="transition-all duration-150 group-hover:fill-[#e8e8e8] group-hover:stroke-[#e8e8e8]"
                stroke="#e8e8e8" fill="transparent"
              />
            </svg>
          </Link>
        </>
      ) : (
        <Link to="/" className="flex items-center gap-2 no-underline shrink-0">
          <span className="text-lg">🎓</span>
          <span className="text-sm font-bold tracking-tight text-[#f0f0f0]">GCSE Hub</span>
        </Link>
      )}

      {subject && (
        <>
          <span className="text-[#333] text-sm select-none">/</span>
          <Link
            to={`/${subject.slug}`}
            className="text-sm font-medium transition-all duration-150 rounded px-1 hover:px-2 hover:bg-white/5"
            style={{ color: topic || resource ? '#888' : subject.colour }}
          >
            {subject.name}
          </Link>
        </>
      )}

      {topic && (
        <>
          <span className="text-[#333] text-sm select-none">/</span>
          <Link
            to={`/${subjectSlug}/${topic.slug}`}
            className="text-sm font-medium transition-all duration-150 rounded px-1 hover:px-2 hover:bg-white/5"
            style={{ color: resource ? '#888' : subject.colour }}
          >
            {topic.title}
          </Link>
        </>
      )}

      {resource && RESOURCE_LABELS[resource] && (
        <>
          <span className="text-[#333] text-sm select-none">/</span>
          <span
            className="text-sm font-medium rounded px-1 transition-all duration-150 hover:px-2 hover:bg-white/5 cursor-default"
            style={{ color: subject.colour }}
          >
            {RESOURCE_LABELS[resource]}
          </span>
        </>
      )}
    </nav>
  )
}