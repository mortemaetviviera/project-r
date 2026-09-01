import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RulesPage from './pages/RulesPage'
import ModulesPage from './pages/ModulesPage'
import MasteranPage from './pages/MasteranPage'
import ScrollToTop from './components/ScrollToTop'
import './styles/App.css'

function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/modules" element={<ModulesPage />} />
        <Route path="/masteran" element={<MasteranPage />} />
      </Routes>
    </div>
  )
}

export default App
