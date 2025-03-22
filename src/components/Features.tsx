import React from 'react';
import './Features.css';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: 'check',
    title: 'Nourishing Ingredients',
    description: 'Formulated with skin-loving natural ingredients'
  },
  {
    icon: 'cruelty-free',
    title: 'Cruelty-Free',
    description: 'Never tested on animals'
  },
  {
    icon: 'fragrance',
    title: 'Long-Lasting Fragrance',
    description: 'Warm, floral, and sophisticated scent'
  },
  {
    icon: 'skin-types',
    title: 'All Skin Types',
    description: 'Gentle formulations for everyone'
  }
];

const Features: React.FC = () => {
  const renderIcon = (type: string) => {
    switch (type) {
      case 'check':
        return (
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M9,16.17L4.83,12l-1.42,1.41L9,19 21,7l-1.41-1.41L9,16.17z" fill="currentColor" />
          </svg>
        );
      case 'cruelty-free':
        return (
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M12,2C6.48,2 2,6.48 2,12s4.48,10 10,10 10-4.48 10-10S17.52,2 12,2zM12,20c-4.41,0 -8-3.59 -8-8s3.59-8 8-8 8,3.59 8,8 -3.59,8 -8,8zM15,9h-2V7h2V9zM15,13h-2v-2h2V13z" fill="currentColor" />
          </svg>
        );
      case 'fragrance':
        return (
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M12,3c-4.97,0 -9,4.03 -9,9s4.03,9 9,9 9-4.03 9-9 -4.03-9 -9-9zM12,19c-3.87,0 -7-3.13 -7-7s3.13-7 7-7 7,3.13 7,7 -3.13,7 -7,7z" fill="currentColor" />
          </svg>
        );
      case 'skin-types':
        return (
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M12,2C6.48,2 2,6.48 2,12s4.48,10 10,10 10-4.48 10-10S17.52,2 12,2zM12,20c-4.41,0 -8-3.59 -8-8s3.59-8 8-8 8,3.59 8,8 -3.59,8 -8,8z" fill="currentColor" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="features">
      <div className="container">
        <h2 className="section-title">Why Choose Haven</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon">
                {renderIcon(feature.icon)}
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