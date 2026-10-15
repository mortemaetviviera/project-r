import React from 'react';
import { useLogoColor } from '../context/LogoColorContext';
import '../styles/LogoIcon.css';

/**
 * LogoIcon component
 *
 * Props:
 *  - staticColor: boolean — If true, logo stays white and does not participate in color cycling.
 *  - size: number — Width/height in px. Default: 28.
 *  - className: string — Extra CSS class.
 *
 * Color state is lifted into LogoColorContext so all instances sync globally.
 */

const LOGO_SRC = {
  white: '/logo/logo-white.svg',
  red: '/logo/logo-red.svg',
  purple: '/logo/logo-purple.svg',
};

const LogoIcon = ({ staticColor = false, size = 28, className = '' }) => {
  const { currentColor, isAnimating, cycleColor } = useLogoColor();

  const src = LOGO_SRC[staticColor ? 'white' : currentColor];

  const triggerBloom = (el) => {
    try {
      const rect = el?.getBoundingClientRect();
      const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
      const y = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
      window.dispatchEvent(new CustomEvent('lycoris:bloom', { detail: { x, y } }));
    } catch {}
  };

  const handleClick = (e) => {
    if (staticColor) return;
    triggerBloom(e.currentTarget);
    // Defer color cycle to next frame to avoid layout thrash on mobile
    requestAnimationFrame(() => {
      cycleColor();
    });
  };

  const handleKeyDown = (e) => {
    if (staticColor) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      triggerBloom(e.currentTarget);
      cycleColor();
    }
  };

  return (
    <img
      src={src}
      alt="LYCORIS logo"
      width={size}
      height={size}
      role={staticColor ? undefined : 'button'}
      tabIndex={staticColor ? undefined : 0}
      className={[
        'lycoris-logo-icon',
        !staticColor ? 'lycoris-logo-icon--clickable' : '',
        isAnimating ? 'lycoris-logo-icon--flash' : '',
        `lycoris-logo-icon--${staticColor ? 'white' : currentColor}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      draggable={false}
      aria-label={staticColor ? 'LYCORIS logo' : `LYCORIS logo (${currentColor}, click to change)`}
      title={staticColor ? 'LYCORIS' : 'Klik untuk ganti warna logo!'}
    />
  );
};

export default LogoIcon;
