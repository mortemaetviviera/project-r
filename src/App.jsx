import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RulesPage from './pages/RulesPage'
import ModulesPage from './pages/ModulesPage'
import MasteranPage from './pages/MasteranPage'
import NotFoundPage from './pages/NotFoundPage'
import ScrollToTop from './components/ScrollToTop'
import FloatingNav from './components/FloatingNav'
import BackToTop from './components/BackToTop'
import './styles/App.css'

function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <FloatingNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/modules" element={<ModulesPage />} />
        <Route path="/masteran" element={<MasteranPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <BackToTop />
    </div>
  )
}

export default App
