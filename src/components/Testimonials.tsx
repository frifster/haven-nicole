import React from 'react';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonial-card">
          <blockquote>
            "The Haven Self-Love Body Care Set has transformed my evening routine. 
            The scents are divine, and my skin has never felt so nourished. 
            Truly a self-care experience worth cherishing."
          </blockquote>
          <div className="testimonial-author">
            <p className="name">Sarah T.</p>
            <p className="title">Verified Customer</p>
          </div>
          <div className="stars">
            {[...Array(5)].map((_, index) => (
              <svg key={index} viewBox="0 0 24 24" width="24" height="24">
                <path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-.61L12,2 9.19,8.63 2,9.24l5.46,4.73L5.82,21z" fill="currentColor" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 