import { motion } from 'framer-motion'
import subjects from '../data/subjects'
import SubjectCard from '../components/SubjectCard'

export default function Home() {
  return (
    <main className="min-h-screen px-8 py-12 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <p className="text-[10px] font-black tracking-[0.3em] uppercase mb-4 text-white/40">
          Educational Resource Hub
        </p>
        <h1 className="text-6xl font-black tracking-tight text-white mb-4">
          Your Subjects
        </h1>
        <p className="text-lg text-[#888] font-medium max-w-2xl leading-relaxed">
          Master your GCSEs with our curated collection of notes, interactive quizzes, and expert-crafted flashcards.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {subjects.map(({ slug, name, colour }) => (
          <SubjectCard key={slug} slug={slug} name={name} colour={colour} />
        ))}
      </motion.div>
    </main>
  )
}