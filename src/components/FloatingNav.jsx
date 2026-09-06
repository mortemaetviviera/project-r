import React from 'react';
import { NavLink } from 'react-router-dom';
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
