import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import subjects from '../data/subjects'
import ResourceCard from '../components/ResourceCard'

export default function TopicHome() {
  const { subjectSlug, topicSlug } = useParams()
  const subject = subjects.find(s => s.slug === subjectSlug)
  const topic = subject?.topics.find(t => t.slug === topicSlug)

  if (!subject || !topic) return (
    <div className="flex items-center justify-center h-64 text-[#888] text-sm">Topic not found.</div>
  )

  const resources = topic.resources ?? { notes: false, quiz: false, flashcards: false }

  return (
    <main className="px-8 py-12 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3 opacity-60" style={{ color: subject.colour }}>
          {subject.name}
        </p>
        <h1 className="text-5xl font-black tracking-tight text-[#f0f0f0]">{topic.title}</h1>
      </motion.div>

      {Object.keys(resources).length === 0 ? (
        <div className="flex items-center justify-center h-48 text-[#888] text-sm">No resources yet.</div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {['notes', 'quiz', 'flashcards'].map(slug => (
            <ResourceCard
              key={slug}
              slug={slug}
              subjectSlug={subjectSlug}
              topicSlug={topicSlug}
              available={resources[slug] ?? false}
              colour={subject.colour}
            />
          ))}
        </motion.div>
      )}
    </main>
  )
}