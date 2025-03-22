import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="about-hero">
        <div className="container">
          <h1>Our Story</h1>
          <p>Crafting moments of self-care and tranquility</p>
        </div>
      </div>

      <section className="about-story">
        <div className="container story-grid">
          <div className="story-content">
            <h2>The Haven Journey</h2>
            <p>
              Born from a passion for holistic wellness and natural beauty, Haven emerged 
              as a sanctuary for those seeking more than just skincare. Our journey began 
              with a simple belief: that self-care should be a cherished ritual, not just 
              a routine.
            </p>
            <p>
              Each product in our collection is thoughtfully crafted to create moments of 
              tranquility in your daily life, combining the finest natural ingredients 
              with modern skincare science.
            </p>
          </div>
          <div className="story-image">
            <img 
              src="https://placehold.co/800x600/F7C6D0/8B4297?text=Haven+Products" 
              alt="Haven skincare products" 
            />
          </div>
        </div>
      </section>

      <section className="about-mission">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            To transform daily skincare into mindful moments of self-care, providing 
            natural, effective products that nurture both skin and soul.
          </p>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Natural Purity</h3>
              <p>
                We carefully select the purest natural ingredients, ensuring each product 
                delivers gentle yet effective results.
              </p>
            </div>
            <div className="value-card">
              <h3>Mindful Beauty</h3>
              <p>
                Every formula is created to enhance your self-care ritual, turning daily 
                skincare into moments of mindfulness.
              </p>
            </div>
            <div className="value-card">
              <h3>Sustainable Care</h3>
              <p>
                Our commitment to the environment is reflected in our eco-conscious 
                packaging and sustainable practices.
              </p>
            </div>
            <div className="value-card">
              <h3>Scientific Innovation</h3>
              <p>
                We blend traditional botanical wisdom with modern skincare science to 
                create effective, innovative formulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-commitment">
        <div className="container">
          <h2>Our Commitment</h2>
          <p>
            At Haven, we're committed to creating products that not only enhance your 
            natural beauty but also provide moments of peace in your daily routine. 
            Every bottle contains our promise of quality, purity, and mindful luxury.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About; 