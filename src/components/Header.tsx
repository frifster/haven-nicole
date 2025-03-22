import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <h1>HAVEN</h1>
          </Link>
          <div className="fairy-silhouette">
            <svg width="20" height="20" viewBox="0 0 20 20">
              <path d="M10,-5 C11.5,-10 12,-15 12.5,-5 C13,5 12.5,10 12,15 C11.5,20 10,15 9,10 Z" fill="currentColor" />
              <path d="M11,0 C12,-5 12.5,0 12,5 C11.5,10 10,5 11,0 Z" fill="currentColor" />
            </svg>
          </div>
        </div>
        
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/how-it-works">How It Works</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
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