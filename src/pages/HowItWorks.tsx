import React, { useState } from 'react';
import { faqs } from '../data/faqs';
import './HowItWorks.css';

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const steps = [
    {
      title: "Step 1: Exfoliate",
      description: "Begin with Haven Muse Body Scrub to gently remove dead skin cells and prepare your skin for the nourishing steps ahead.",
      tips: [
        "Use gentle circular motions",
        "Focus on rough areas like elbows and knees",
        "Rinse thoroughly with warm water"
      ]
    },
    {
      title: "Step 2: Moisturize",
      description: "Apply Haven Bliss Body Lotion while your skin is still slightly damp to lock in maximum hydration.",
      tips: [
        "Pat skin partially dry",
        "Use upward strokes when applying",
        "Pay extra attention to dry areas"
      ]
    },
    {
      title: "Step 3: Nourish",
      description: "Complete your ritual with Haven Glow Body Oil to seal in moisture and add a beautiful, healthy glow.",
      tips: [
        "Warm the oil between your palms",
        "Apply to slightly damp skin",
        "Allow to absorb for 5-10 minutes"
      ]
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="how-it-works">
      <div className="how-it-works-hero">
        <div className="container">
          <h1>How It Works</h1>
          <p>Your guide to the perfect self-care ritual</p>
        </div>
      </div>

      <section className="ritual-steps">
        <div className="container">
          <h2>The Haven Ritual</h2>
          <p className="section-intro">
            Transform your daily body care routine into a luxurious self-care ritual with our three-step process.
          </p>
          
          <div className="steps-container">
            <div className="steps-navigation">
              {steps.map((step, index) => (
                <button
                  key={index}
                  className={`step-button ${activeStep === index ? 'active' : ''}`}
                  onClick={() => setActiveStep(index)}
                >
                  {step.title}
                </button>
              ))}
            </div>

            <div className="step-content">
              <h3>{steps[activeStep].title}</h3>
              <p>{steps[activeStep].description}</p>
              <div className="tips">
                <h4>Pro Tips:</h4>
                <ul>
                  {steps[activeStep].tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faqs">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span className="icon">{activeIndex === index ? '−' : '+'}</span>
                </button>
                <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks; 