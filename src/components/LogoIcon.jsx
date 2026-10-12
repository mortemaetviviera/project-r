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

  const handleClick = () => {
    if (staticColor) return;
    cycleColor();
  };

  const handleKeyDown = (e) => {
    if (staticColor) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
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
