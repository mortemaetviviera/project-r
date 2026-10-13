import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import LogoIcon from './LogoIcon';
import { isSoundEnabled, setSoundEnabled, playTick } from '../utils/audio';
import { triggerHaptic } from '../utils/haptics';
import { STORAGE_KEY, figmaModules, psModules } from '../data/modulesData';
import '../styles/FloatingNav.css';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/rules', label: 'Rules' },
  { path: '/modules', label: 'Modul' },
  { path: '/masteran', label: 'Masteran' }
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
          <LogoIcon size={36} staticColor={false} />
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
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => playTick()}
            className={({ isActive }) =>
              `floating-nav-link ${isActive ? 'active' : ''}`
            }
          >
            <span className="nav-label">{item.label}</span>
          </NavLink>
        ))}
        <span className="floating-nav-divider" aria-hidden="true" />
        <button
          type="button"
          className={`floating-nav-sound-btn ${soundOn ? 'is-active' : 'is-muted'}`}
          onClick={handleToggleSound}
          aria-label={soundOn ? 'Mute sound effects' : 'Unmute sound effects'}
          title={soundOn ? 'Suara Taktil Aktif (Klik untuk bisukan)' : 'Suara Taktil Dibisukan (Klik untuk aktifkan)'}
        >
          {soundOn ? '🔊' : '🔇'}
        </button>
      </div>
    </nav>
  );
};

export default FloatingNav;
