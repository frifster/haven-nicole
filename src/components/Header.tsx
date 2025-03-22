import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="header-container">
        <Link to="/" onClick={handleLinkClick} className="logo" draggable="false">
          <h1>HAVEN</h1>
          <div className="butterfly-logo">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
              <path d="M16 8L16 24" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <path d="M8 12C4 8 4 14 8 16C12 18 16 14 14 12C12 10 10 10 8 12Z" fill="currentColor"/>
              <path d="M8 20C4 24 4 18 8 16C12 14 16 18 14 20C12 22 10 22 8 20Z" fill="currentColor" fill-opacity="0.8"/>
              <path d="M24 12C28 8 28 14 24 16C20 18 16 14 18 12C20 10 22 10 24 12Z" fill="currentColor"/>
              <path d="M24 20C28 24 28 18 24 16C20 14 16 18 18 20C20 22 22 22 24 20Z" fill="currentColor" fill-opacity="0.8"/>
              <path d="M16 8C14 4 13 6 15 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M16 8C18 4 19 6 17 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </div>
        </Link>
        
        <button 
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
            <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
            <li><Link to="/shop" onClick={handleLinkClick}>Shop</Link></li>
            <li><Link to="/how-it-works" onClick={handleLinkClick}>How It Works</Link></li>
            <li><Link to="/blog" onClick={handleLinkClick}>Blog</Link></li>
            <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
          </ul>
        </nav>

        <div className="cart-icon">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M4,4 L8,4 L10,14 L18,14 M8,16 C6.9,16 6,16.9 6,18 C6,19.1 6.9,20 8,20 C9.1,20 10,19.1 10,18 C10,16.9 9.1,16 8,16 Z M18,16 C16.9,16 16,16.9 16,18 C16,19.1 16.9,20 18,20 C19.1,20 20,19.1 20,18 C20,16.9 19.1,16 18,16 Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  fill="none" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header; 