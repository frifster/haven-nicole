import React from 'react';
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
            <a href="#shop" className="button button-primary">Shop Now</a>
            <a href="#learn-more" className="button button-secondary">Learn More</a>
          </div>
        </div>

        <div className="hero-image">
          <div className="product-glow"></div>
          <div className="product-bottle">
            <div className="bottle-body"></div>
            <div className="bottle-neck"></div>
            <div className="bottle-shadow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 