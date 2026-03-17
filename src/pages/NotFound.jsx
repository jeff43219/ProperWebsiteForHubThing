import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
      <div className="text-center">
        <p className="text-8xl font-extrabold tracking-tight text-[#2a2a2a]">404</p>
        <p className="text-lg font-semibold text-[#f0f0f0] mt-2">Page not found</p>
        <p className="text-sm text-[#888] mt-1">That route doesn't exist.</p>
      </div>
      <Link
        to="/"
        className="text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-150"
        style={{ background: '#1a1a1a', color: '#f0f0f0', border: '1px solid #2a2a2a' }}
      >
        ← Back to Home
      </Link>
    </main>
  )
}