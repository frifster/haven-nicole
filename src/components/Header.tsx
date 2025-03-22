import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getItemCount } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" onClick={handleLinkClick} className="logo" draggable="false">
          <img src="/newlogo.png" alt="Haven Logo" className="logo-image" />
        </Link>

        <button
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
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

        <Link to="/cart" className="cart-icon">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M4,4 L8,4 L10,14 L18,14 M8,16 C6.9,16 6,16.9 6,18 C6,19.1 6.9,20 8,20 C9.1,20 10,19.1 10,18 C10,16.9 9.1,16 8,16 Z M18,16 C16.9,16 16,16.9 16,18 C16,19.1 16.9,20 18,20 C19.1,20 20,19.1 20,18 C20,16.9 19.1,16 18,16 Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  fill="none" />
          </svg>
          {getItemCount() > 0 && (
            <span className="cart-count">{getItemCount()}</span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header; 