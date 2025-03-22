import React, { JSX } from 'react';
import './Features.css';

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: Feature[] = [
  {
    title: 'Nourishing Ingredients',
    description: 'Formulated with skin-loving natural ingredients',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path d="M12 20V12M12 12C9 12 7 10 7 7C9 7 11 9 12 5M12 12C15 12 17 10 17 7C15 7 13 9 12 5" 
          stroke="currentColor" 
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: 'Cruelty-Free',
    description: 'Never tested on animals',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
          fill="currentColor"/>
      </svg>
    )
  },
  {
    title: 'Long-Lasting Fragrance',
    description: 'Warm, floral, and sophisticated scent',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path d="M12 4C13.5 4 15 5.5 15 7C15 8.5 13.5 10 12 10C10.5 10 9 8.5 9 7C9 5.5 10.5 4 12 4Z" fill="currentColor"/>
        <path d="M7 9C8.5 9 10 10.5 10 12C10 13.5 8.5 15 7 15C5.5 15 4 13.5 4 12C4 10.5 5.5 9 7 9Z" fill="currentColor"/>
        <path d="M17 9C18.5 9 20 10.5 20 12C20 13.5 18.5 15 17 15C15.5 15 14 13.5 14 12C14 10.5 15.5 9 17 9Z" fill="currentColor"/>
        <path d="M12 14C13.5 14 15 15.5 15 17C15 18.5 13.5 20 12 20C10.5 20 9 18.5 9 17C9 15.5 10.5 14 12 14Z" fill="currentColor"/>
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
      </svg>
    )
  },
  {
    title: 'All Skin Types',
    description: 'Gentle formulations for everyone',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path d="M12 2.1L7.2 7.7C5.8 9.2 5 11.1 5 13.2c0 3.9 3.1 7 7 7s7-3.1 7-7c0-2.1-0.8-4-2.2-5.5L12 2.1zM12 18.2c-2.8 0-5-2.2-5-5 0-1.5 0.6-2.9 1.6-4L12 5.4l3.4 3.8c1 1.1 1.6 2.5 1.6 4 0 2.8-2.2 5-5 5z" 
          fill="currentColor"/>
      </svg>
    )
  }
];

const Features: React.FC = () => {
  return (
    <section className="features">
      <div className="container">
        <h2 className="section-title">Why Choose Haven</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 