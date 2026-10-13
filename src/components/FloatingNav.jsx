import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import LogoIcon from './LogoIcon';
import { isSoundEnabled, setSoundEnabled, playTick } from '../utils/audio';
import { triggerHaptic } from '../utils/haptics';
import { STORAGE_KEY, figmaModules, psModules } from '../data/modulesData';
import '../styles/FloatingNav.css';

/* Minimalist B&W Monochrome SVG Icons */
const HomeIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5h-4v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
  </svg>
);

const RulesIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

const ModulIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const MasteranIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    <line x1="9" y1="7" x2="15" y2="7" />
    <line x1="9" y1="11" x2="15" y2="11" />
  </svg>
);

const SoundOnIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
  </svg>
);

const SoundOffIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <line x1="23" y1="9" x2="17" y2="15" />
    <line x1="17" y1="9" x2="23" y2="15" />
  </svg>
);

const navItems = [
  { path: '/', label: 'Home', Icon: HomeIcon },
  { path: '/rules', label: 'Rules', Icon: RulesIcon },
  { path: '/modules', label: 'Modul', Icon: ModulIcon },
  { path: '/masteran', label: 'Masteran', Icon: MasteranIcon },
  // { path: '/leader', label: 'Wakanit' } // Ditangguhkan sementara
];

const FloatingNav = () => {
  const location = useLocation();
  const [soundOn, setSoundOn] = useState(() => isSoundEnabled());
  const [isCompact, setIsCompact] = useState(false);
  const [moduleProgress, setModuleProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Listen for progress updates
  useEffect(() => {
    const handleProgressUpdate = () => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        setModuleProgress(saved ? JSON.parse(saved) : {});
      } catch {}
    };

    window.addEventListener('lycoris:progress', handleProgressUpdate);
    window.addEventListener('storage', handleProgressUpdate);
    return () => {
      window.removeEventListener('lycoris:progress', handleProgressUpdate);
      window.removeEventListener('storage', handleProgressUpdate);
    };
  }, []);

  // Smart Morphing Scroll Listener
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    let rafId = null;

    const handleScroll = () => {
      if (!ticking) {
        rafId = window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const diff = currentScrollY - lastScrollY;

          // Compact when scrolling down past 160px; expand when scrolling up or near top
          if (currentScrollY > 160 && diff > 8) {
            setIsCompact(true);
          } else if (diff < -12 || currentScrollY <= 80) {
            setIsCompact(false);
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  const handleToggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    setSoundEnabled(next);
    triggerHaptic(15);
    if (next) {
      playTick();
    }
  };

  const isModulesPage = location.pathname === '/modules';
  const figmaDone = figmaModules.filter(n => moduleProgress[n]).length;
  const psDone = psModules.filter(n => moduleProgress[n]).length;
  const totalDone = figmaDone + psDone;

  return (
    <nav
      className={`floating-nav-container ${isCompact ? 'is-compact' : ''}`}
      aria-label="Main Navigation"
    >
      <div className="floating-nav-pill">
        {/* Brand logo — clickable color cycler */}
        <div className="floating-nav-logo-link" aria-label="Change Theme Color">
          <LogoIcon size={30} staticColor={false} />
        </div>

        {/* Concept C: Context-Aware Progress Chip on /modules */}
        {isModulesPage && (
          <div
            className="nav-progress-chip"
            title={`Progres Modul: Figma ${figmaDone}/5 • Photoshop ${psDone}/5`}
            aria-label={`Progres Modul: ${totalDone} dari 10 selesai`}
          >
            <span className="nav-chip-icon">🎯</span>
            <span className="nav-chip-text">{totalDone}/10</span>
          </div>
        )}

        <span className="floating-nav-divider" aria-hidden="true" />
        <div className="floating-nav-links-track">
          {navItems.map((item) => {
            const { Icon } = item;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => playTick()}
                className={({ isActive }) =>
                  `floating-nav-link ${isActive ? 'active' : ''}`
                }
              >
                <span className="nav-icon"><Icon size={18} /></span>
                <span className="nav-label">{item.label}</span>
              </NavLink>
            );
          })}
        </div>
        <span className="floating-nav-divider" aria-hidden="true" />
        <button
          type="button"
          className={`floating-nav-sound-btn ${soundOn ? 'is-active' : 'is-muted'}`}
          onClick={handleToggleSound}
          aria-label={soundOn ? 'Mute sound effects' : 'Unmute sound effects'}
          title={soundOn ? 'Suara Taktil Aktif (Klik untuk bisukan)' : 'Suara Taktil Dibisukan (Klik untuk aktifkan)'}
        >
          {soundOn ? <SoundOnIcon size={16} /> : <SoundOffIcon size={16} />}
        </button>
      </div>
    </nav>
  );
};

export default FloatingNav;
