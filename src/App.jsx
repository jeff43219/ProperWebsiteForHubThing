import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SubjectHome from './pages/SubjectHome'
import TopicHome from './pages/TopicHome'
import NotFound from './pages/NotFound'
import ResourcePage from './components/ResourcePage'

const Layout = ({ children }) => (
  <div className="min-h-screen bg-[#0f0f0f] font-sans selection:bg-white/10 selection:text-white">
    <Navbar />
    <div className="pt-20 pb-6">
      {children}
    </div>
  </div>
)

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.2, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
)

export default function App() {
  const location = useLocation()

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/:subjectSlug" element={<PageWrapper><SubjectHome /></PageWrapper>} />
          <Route path="/:subjectSlug/:topicSlug" element={<PageWrapper><TopicHome /></PageWrapper>} />
          <Route path="/:subjectSlug/:topicSlug/:resource" element={<PageWrapper><ResourcePage /></PageWrapper>} />
          <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
    </Layout>
  )
}