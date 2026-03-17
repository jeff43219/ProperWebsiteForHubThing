import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SubjectHome from './pages/SubjectHome'
import TopicHome from './pages/TopicHome'
import NotFound from './pages/NotFound'
import ResourcePage from './components/ResourcePage'

const Layout = ({ children }) => (
  <>
    <Navbar />
    <div className="pt-14 min-h-screen bg-[#0f0f0f]">
      {children}
    </div>
  </>
)

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/:subjectSlug" element={<Layout><SubjectHome /></Layout>} />
      <Route path="/:subjectSlug/:topicSlug" element={<Layout><TopicHome /></Layout>} />
      <Route path="/:subjectSlug/:topicSlug/:resource" element={<Layout><ResourcePage /></Layout>} />
      <Route path="*" element={<Layout><NotFound /></Layout>} />
    </Routes>
  )
}