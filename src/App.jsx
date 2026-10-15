import React, { useEffect } from 'react'
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
import { applyTimeLighting } from './utils/timeLighting'
import { playBloomChime } from './utils/audio'
import { triggerHaptic } from './utils/haptics'
import './styles/App.css'

// Inner component so useLocation can access the BrowserRouter context from main.jsx
function AppInner() {
  // Concept D: Time-of-Day Adaptive Lighting
  useEffect(() => {
    applyTimeLighting();
    const timer = setInterval(applyTimeLighting, 10 * 60 * 1000);
    return () => clearInterval(timer);
  }, []);

  // Concept 6: The Lycoris Bloom Engine & Kinetic Resonance
  useEffect(() => {
    const handleBloom = (e) => {
      const x = e.detail?.x ?? (window.innerWidth / 2);
      const y = e.detail?.y ?? (window.innerHeight / 2);

      playBloomChime();
      triggerHaptic([20, 50, 20]);

      // Spawn native DOM shockwave ring (zero React state remount overhead)
      const ring = document.createElement('div');
      ring.className = 'bloom-shockwave-ring';
      ring.style.left = `${x}px`;
      ring.style.top = `${y}px`;
      document.body.appendChild(ring);
      setTimeout(() => ring.remove(), 900);

      // Kinetic Typography Resonance Flare - using body class
      document.body.classList.add('bloom-active');
      setTimeout(() => {
        document.body.classList.remove('bloom-active');
      }, 850);
    };

    window.addEventListener('lycoris:bloom', handleBloom);
    return () => window.removeEventListener('lycoris:bloom', handleBloom);
  }, []);

  return (
    <div className="app-container">
      {/* Cinematic Film Grain Overlay (Bento 2.0) */}
      <div className="film-grain" aria-hidden="true" />

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
