import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import subjects from '../data/subjects'

export default function ResourcePage() {
  const { subjectSlug, topicSlug, resource } = useParams()
  const navigate = useNavigate()
  const [Component, setComponent] = useState(null)

  const subject = subjects.find(s => s.slug === subjectSlug)
  const topic = subject?.topics.find(t => t.slug === topicSlug)
  const available = topic?.resources?.[resource]

  useEffect(() => {
    if (!subject || !topic || !available) {
      navigate(`/${subjectSlug}/${topicSlug}`, { replace: true })
      return
    }
    setComponent(null)

    const resourceFile = resource.charAt(0).toUpperCase() + resource.slice(1)

    import(`../pages/${subjectSlug}/${topicSlug}/${resourceFile}.jsx`)
      .then(mod => setComponent(() => mod.default))
      .catch(() => navigate(`/${subjectSlug}/${topicSlug}`, { replace: true }))
  }, [subjectSlug, topicSlug, resource, available])

  if (!Component) return (
    <div className="flex items-center justify-center h-64 text-[#888] text-sm">
      Loading...
    </div>
  )

  return <Component />
}