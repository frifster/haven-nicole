import React from 'react';
import './Newsletter.css';

const Newsletter: React.FC = () => {
  return (
    <section className="newsletter">
      <div className="container">
        <h2 className="section-title">Join Our Community</h2>
        <p className="section-subtitle">Subscribe to receive updates, skincare advice, and exclusive deals</p>
        
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button className="button button-primary">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter; 