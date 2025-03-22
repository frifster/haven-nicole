import React, { useState } from 'react';
import './HowItWorks.css';

interface Step {
  title: string;
  description: string;
  tips: string[];
}

interface FAQ {
  question: string;
  answer: string;
}

const steps: Step[] = [
  {
    title: "Step 1: Exfoliate",
    description: "Begin with Haven Muse Body Scrub to gently remove dead skin cells and prepare your skin for optimal absorption of the following products.",
    tips: [
      "Use 2-3 times a week",
      "Apply in circular motions",
      "Focus on rough areas",
      "Rinse thoroughly with warm water"
    ]
  },
  {
    title: "Step 2: Moisturize",
    description: "While skin is still slightly damp, apply Haven Bliss Body Lotion to lock in hydration and create a protective moisture barrier.",
    tips: [
      "Apply to damp skin",
      "Use upward strokes",
      "Pay attention to dry areas",
      "Allow to absorb fully"
    ]
  },
  {
    title: "Step 3: Nourish",
    description: "Complete your ritual with Haven Glow Body Oil to seal in moisture and add a luminous finish to your skin.",
    tips: [
      "Layer over lotion",
      "Warm oil between palms",
      "Massage into skin",
      "Focus on dry or dull areas"
    ]
  }
];

const faqs: FAQ[] = [
  {
    question: "How often should I use the products?",
    answer: "For best results, use Haven Bliss and Haven Glow daily. Haven Muse should be used 2-3 times per week, depending on your skin's needs."
  },
  {
    question: "Can I use the products on sensitive skin?",
    answer: "Yes, all Haven products are formulated with gentle, natural ingredients suitable for sensitive skin. However, we recommend doing a patch test before first use."
  },
  {
    question: "What's the best time to apply the products?",
    answer: "The best time is right after bathing when your skin is still slightly damp, as this helps lock in maximum moisture. However, you can apply the products whenever your skin needs nourishment."
  },
  {
    question: "How long will the products last?",
    answer: "With regular use as directed, each product should last approximately 2-3 months. The Body Oil may last longer as you need less product per application."
  },
  {
    question: "Are your products natural?",
    answer: "Yes, Haven products are formulated with natural, sustainably sourced ingredients. We prioritize botanical extracts and oils known for their skin-nourishing properties."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Currently, we ship within the Philippines only. We're working on expanding our shipping options to serve our international customers soon."
  }
];

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [openFAQs, setOpenFAQs] = useState<Set<number>>(new Set());

  const toggleFAQ = (index: number) => {
    const newOpenFAQs = new Set(openFAQs);
    if (newOpenFAQs.has(index)) {
      newOpenFAQs.delete(index);
    } else {
      newOpenFAQs.add(index);
    }
    setOpenFAQs(newOpenFAQs);
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
                  className={`faq-question ${openFAQs.has(index) ? 'active' : ''}`}
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span className="icon">{openFAQs.has(index) ? '−' : '+'}</span>
                </button>
                <div className={`faq-answer ${openFAQs.has(index) ? 'active' : ''}`}>
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