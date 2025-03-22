import React from 'react';
import './Philosophy.css';

const Philosophy: React.FC = () => {
  return (
    <section className="philosophy">
      <div className="container">
        <div className="philosophy-content">
          <h2>The Way You Treat Yourself Matters</h2>
          <div className="philosophy-text">
            <p>
              At Haven, we believe that self-care is more than just a routine—it's a form of self-respect. 
              Our formulations are designed to enhance confidence by providing gentle yet effective care for all skin types.
            </p>
            <p>
              With high-quality ingredients and a focus on overall well-being, we create products that promote 
              balance, relaxation, and a lasting sense of self-appreciation.
            </p>
          </div>
          <a href="#read-more" className="read-more">Read More →</a>
        </div>
        <div className="philosophy-decoration">
          <div className="circle outer"></div>
          <div className="circle inner"></div>
          <div className="circle accent"></div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy; 