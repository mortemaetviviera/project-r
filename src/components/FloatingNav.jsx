import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import LogoIcon from './LogoIcon';
import '../styles/FloatingNav.css';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/rules', label: 'Rules' },
  { path: '/modules', label: 'Modul' },
  { path: '/masteran', label: 'Masteran' }
];

const FloatingNav = () => {
  return (
    <nav className="floating-nav-container" aria-label="Main Navigation">
      <div className="floating-nav-pill">
        {/* Brand logo — clickable color cycler */}
        <div className="floating-nav-logo-link" aria-label="Change Theme Color">
          <LogoIcon size={36} staticColor={false} />
        </div>
        <span className="floating-nav-divider" aria-hidden="true" />
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `floating-nav-link ${isActive ? 'active' : ''}`
            }
          >
            {item.icon && <span className="nav-icon">{item.icon}</span>}
            <span className="nav-label">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default FloatingNav;
