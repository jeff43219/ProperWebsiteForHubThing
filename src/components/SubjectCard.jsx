import { Link } from 'react-router-dom'

export default function SubjectCard({ name, slug, colour }) {
  return (
    <Link
      to={`/${slug}`}
      className="group relative flex items-end p-6 rounded-2xl overflow-hidden transition-transform duration-200 ease-out hover:-translate-y-1"
      style={{ background: `${colour}18`, border: `1px solid ${colour}35`, minHeight: '140px' }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ background: `radial-gradient(circle at 30% 50%, ${colour}22 0%, transparent 70%)` }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
        style={{ background: colour }}
      />
      <span
        className="relative text-xl font-bold tracking-tight"
        style={{ color: colour }}
      >
        {name}
      </span>
    </Link>
  )
}