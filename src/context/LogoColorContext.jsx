import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';
import { triggerHaptic } from '../utils/haptics';

const COLOR_SEQUENCE = ['white', 'red', 'purple'];

const COLOR_HEX = {
  white: '#f2f2f2',
  red:   '#dc2626',
  purple:'#A47DAB',
};

// Raw RGB channels used to build rgba() values for glow & subtle variants
const COLOR_RGB = {
  white:  '242, 242, 242',
  red:    '220, 38, 38',
  purple: '164, 125, 171',
};

const COLOR_TEXT = {
  white:  '#040B16', // dark slate for contrast on white background
  red:    '#f2f2f2',
  purple: '#f2f2f2',
};

const LogoColorContext = createContext(null);

export const LogoColorProvider = ({ children }) => {
  const [colorIndex, setColorIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const cycleColor = useCallback(() => {
    if (isAnimating) return;
    triggerHaptic(18); // subtle pulse on logo color change
    setIsAnimating(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setColorIndex((prev) => (prev + 1) % COLOR_SEQUENCE.length);
      setIsAnimating(false);
    }, 180);
  }, [isAnimating]);

  const currentColor = COLOR_SEQUENCE[colorIndex];
  const currentHex   = COLOR_HEX[currentColor];
  const currentRgb   = COLOR_RGB[currentColor];
  const currentText  = COLOR_TEXT[currentColor];

  // Inject CSS custom properties into :root whenever the color changes.
  // All accent-driven styles in App.css / FloatingNav.css / HomePage.css
  // read these variables so the entire theme shifts in one step.
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--theme-accent',        currentHex);
    root.style.setProperty('--theme-accent-text',   currentText);
    root.style.setProperty('--theme-accent-glow',   `rgba(${currentRgb}, 0.4)`);
    root.style.setProperty('--theme-accent-subtle',  `rgba(${currentRgb}, 0.15)`);
    root.style.setProperty('--theme-accent-subtle2', `rgba(${currentRgb}, 0.32)`);
    root.style.setProperty('--theme-accent-border',  `rgba(${currentRgb}, 0.5)`);
    root.style.setProperty('--theme-accent-strong',  `rgba(${currentRgb}, 0.6)`);
    root.style.setProperty('--theme-accent-rgb',     currentRgb);
  }, [currentColor, currentHex, currentRgb, currentText]);

  return (
    <LogoColorContext.Provider value={{ currentColor, currentHex, isAnimating, cycleColor }}>
      {children}
    </LogoColorContext.Provider>
  );
};

export const useLogoColor = () => {
  const ctx = useContext(LogoColorContext);
  if (!ctx) throw new Error('useLogoColor must be used inside LogoColorProvider');
  return ctx;
};

