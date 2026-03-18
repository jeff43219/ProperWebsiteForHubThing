import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import subjects from '@/data/subjects'

export default function ResourcePage() {
  const { subjectSlug, topicSlug, resource } = useParams()
  const [Component, setComponent] = useState(null)
  const [error, setError] = useState(false)

  const subject = subjects.find(s => s.slug === subjectSlug)
  const topic = subject?.topics.find(t => t.slug === topicSlug)
  const available = topic?.resources?.[resource]

  useEffect(() => {
    if (!available) { setError(true); return }
    setComponent(null)
    setError(false)

    const resourceFile = resource.charAt(0).toUpperCase() + resource.slice(1)

    import(`../pages/${subjectSlug}/${topicSlug}/${resourceFile}.jsx`)
      .then(mod => setComponent(() => mod.default))
      .catch(() => setError(true))
  }, [subjectSlug, topicSlug, resource, available])

  if (error) return (
    <div className="flex items-center justify-center h-64 text-[#888] text-sm">
      This resource isn't available yet.
    </div>
  )

  if (!Component) return (
    <div className="flex items-center justify-center h-64 text-[#888] text-sm">
      Loading...
    </div>
  )

  return <Component />
}