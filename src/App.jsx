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
import { LogoColorProvider } from './context/LogoColorContext'
import './styles/App.css'

// Inner component so useLocation can access the BrowserRouter context from main.jsx
function AppInner() {
  return (
    <div className="app-container">
      {/* Global elements: not re-animated on every route change */}
      <ScrollToTop />
      <FloatingNav />
      <BackToTop />

      {/* CSS-only enter animation — no forced remount on pathname change */}
      <div className="page-route-transition">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rules" element={<RulesPage />} />
          <Route path="/modules" element={<ModulesPage />} />
          <Route path="/masteran" element={<MasteranPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  )
}

function App() {
  return (
    <LogoColorProvider>
      <AppInner />
    </LogoColorProvider>
  )
}

export default App
