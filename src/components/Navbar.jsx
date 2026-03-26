import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar container">
        <div className="nav-brand" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
          <svg className="brand-icon" width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="var(--accent)" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M2 7L12 12V22" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" opacity="0.6"/>
            <path d="M22 7L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" opacity="0.6"/>
            <circle cx="12" cy="12" r="2.5" fill="var(--accent)" className="core-node" />
            <circle cx="2" cy="7" r="1.5" fill="currentColor" opacity="0.8" />
            <circle cx="22" cy="7" r="1.5" fill="currentColor" opacity="0.8" />
            <circle cx="12" cy="22" r="1.5" fill="var(--accent)" />
          </svg>
          <div className="brand-text-container">
            <h1 className="logo serif" style={{ margin: 0, fontSize: '1.6rem', letterSpacing: '-0.02em' }}>
              BioVisionaries<span className="accent-text">.</span>
            </h1>
            <span style={{ 
              display: 'block', 
              fontSize: '0.6rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.35em', 
              color: 'var(--text-secondary)',
              marginTop: '-2px'
            }}>Neural Mapping</span>
          </div>
        </div>

        <div className="nav-actions">
          <ul className="nav-links">
            <li><a href="#hero" className="nav-link">Overview</a></li>
            <li><a href="#about" className="nav-link">The Story</a></li>
            <li><a href="#topics" className="nav-link">Topics</a></li>
            <li><a href="#diseases" className="nav-link">Diseases</a></li>
            <li><a href="#team" className="nav-link">Team</a></li>
          </ul>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
