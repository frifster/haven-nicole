import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h2>A scent to remember,</h2>
          <h2>a self-care moment</h2>
          <h2>to cherish.</h2>
          <p>Indulge in luxurious skincare that nurtures both your skin and soul.</p>
          
          <div className="hero-buttons">
            <Link to="/shop" className="button button-primary">Shop Now</Link>
            <Link to="/how-it-works" className="button button-secondary">Learn More</Link>
          </div>
        </div>

        <div className="hero-image">
        </div>
      </div>
    </section>
  );
};

export default Hero; 