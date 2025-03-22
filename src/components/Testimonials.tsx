import React, { useEffect, useState } from 'react';
import './Testimonials.css';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "The Haven Self-Love Body Care Set has transformed my evening routine. The scents are divine, and my skin has never felt so nourished. Truly a self-care experience worth cherishing.",
    name: "Sarah T.",
    title: "Verified Customer"
  },
  {
    quote: "I love how gentle yet effective the products are. The body scrub leaves my skin so smooth, and the lotion keeps me moisturized all day long.",
    name: "Emma R.",
    title: "Beauty Enthusiast"
  },
  {
    quote: "The attention to detail in each product is remarkable. From the beautiful packaging to the amazing formulations, Haven has exceeded my expectations.",
    name: "Michael P.",
    title: "Wellness Coach"
  },
  {
    quote: "These products have become an essential part of my self-care routine. The body oil is especially amazing - it gives such a beautiful glow!",
    name: "Jessica L.",
    title: "Yoga Instructor"
  },
  {
    quote: "As someone with sensitive skin, I appreciate how gentle yet effective Haven's products are. They're truly worth every penny.",
    name: "David K.",
    title: "Dermatologist"
  },
  {
    quote: "The fragrances are subtle and sophisticated. It's like having a spa experience at home. Absolutely love it!",
    name: "Rachel M.",
    title: "Spa Owner"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;
    
    const touchEnd = e.touches[0].clientX;
    const diff = touchStart - touchEnd;
    
    if (Math.abs(diff) > 50) { // Minimum swipe distance
      if (diff > 0 && currentIndex < testimonials.length - 1) {
        // Swipe left
        setCurrentIndex(prev => prev + 1);
      } else if (diff < 0 && currentIndex > 0) {
        // Swipe right
        setCurrentIndex(prev => prev - 1);
      }
      setTouchStart(null);
    }
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonials-slider">
          {isMobile ? (
            <>
              <div 
                className="testimonials-track mobile"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={`testimonial-${index}`} className="testimonial-card">
                    <blockquote>{testimonial.quote}</blockquote>
                    <div className="testimonial-author">
                      <p className="name">{testimonial.name}</p>
                      <p className="title">{testimonial.title}</p>
                    </div>
                    <div className="stars">
                      {[...Array(5)].map((_, starIndex) => (
                        <svg key={starIndex} viewBox="0 0 24 24" width="24" height="24">
                          <path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-.61L12,2 9.19,8.63 2,9.24l5.46,4.73L5.82,21z" fill="currentColor" />
                        </svg>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mobile-nav">
                <button onClick={prevSlide} className="nav-button prev">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor"/>
                  </svg>
                </button>
                <button onClick={nextSlide} className="nav-button next">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor"/>
                  </svg>
                </button>
              </div>
              <div className="mobile-dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${currentIndex === index ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="testimonials-track">
              {/* Original testimonials */}
              {testimonials.map((testimonial, index) => (
                <div key={`testimonial-${index}`} className="testimonial-card">
                  <blockquote>{testimonial.quote}</blockquote>
                  <div className="testimonial-author">
                    <p className="name">{testimonial.name}</p>
                    <p className="title">{testimonial.title}</p>
                  </div>
                  <div className="stars">
                    {[...Array(5)].map((_, starIndex) => (
                      <svg key={starIndex} viewBox="0 0 24 24" width="24" height="24">
                        <path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-.61L12,2 9.19,8.63 2,9.24l5.46,4.73L5.82,21z" fill="currentColor" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
              {/* Duplicate testimonials for seamless loop */}
              {testimonials.map((testimonial, index) => (
                <div key={`testimonial-duplicate-${index}`} className="testimonial-card">
                  <blockquote>{testimonial.quote}</blockquote>
                  <div className="testimonial-author">
                    <p className="name">{testimonial.name}</p>
                    <p className="title">{testimonial.title}</p>
                  </div>
                  <div className="stars">
                    {[...Array(5)].map((_, starIndex) => (
                      <svg key={starIndex} viewBox="0 0 24 24" width="24" height="24">
                        <path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-.61L12,2 9.19,8.63 2,9.24l5.46,4.73L5.82,21z" fill="currentColor" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 