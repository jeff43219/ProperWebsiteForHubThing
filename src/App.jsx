// src/App.jsx
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Home stub</div>} />
      <Route path="*" element={<div>404 stub</div>} />
    </Routes>
  )
}