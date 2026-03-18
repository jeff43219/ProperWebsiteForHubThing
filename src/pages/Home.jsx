import subjects from '@/data/subjects';
import SubjectCard from '@/components/SubjectCard';

export default function Home() {
  return (
    <main className="min-h-screen px-8 py-12 max-w-5xl mx-auto">
      <div className="mb-10">
        <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#888' }}>
          GCSE Hub
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight" style={{ color: '#f0f0f0' }}>
          Your Subjects
        </h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {subjects.map(({ slug, name, colour }) => (
          <SubjectCard key={slug} slug={slug} name={name} colour={colour} />
        ))}
      </div>
    </main>
  )
}