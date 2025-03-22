import React, { useState } from 'react';
import { faqs } from '../data/faqs';
import './Contact.css';

const Contact: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-hero">
          <h1>Get in Touch</h1>
          <p>We're here to help you on your self-care journey</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="info-item">
              <h3>Customer Service Hours</h3>
              <p>Monday to Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 3:00 PM</p>
            </div>
            <div className="info-item">
              <h3>Email</h3>
              <p>hello@havenbodycare.com</p>
              <p>support@havenbodycare.com</p>
            </div>
            <div className="info-item">
              <h3>Phone</h3>
              <p>+63 917 123 4567</p>
            </div>
            <div className="info-item">
              <h3>Social Media</h3>
              <div className="social-links">
                <a href="https://facebook.com/havenbodycare" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://instagram.com/havenbodycare" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://tiktok.com/@havenbodycare" target="_blank" rel="noopener noreferrer">TikTok</a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send us a Message</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required></textarea>
              </div>
              <button type="submit" className="button">Send Message</button>
            </form>
          </div>
        </div>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <span className="toggle-icon">{activeIndex === index ? '−' : '+'}</span>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 