import React from 'react';
import './Features.css';

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: 'Nourishing Ingredients',
    description: 'Formulated with skin-loving natural ingredients'
  },
  {
    title: 'Cruelty-Free',
    description: 'Never tested on animals'
  },
  {
    title: 'Long-Lasting Fragrance',
    description: 'Warm, floral, and sophisticated scent'
  },
  {
    title: 'All Skin Types',
    description: 'Gentle formulations for everyone'
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
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path 
                    d="M9,16.17L4.83,12l-1.42,1.41L9,19 21,7l-1.41-1.41L9,16.17z" 
                    fill="currentColor" 
                  />
                </svg>
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