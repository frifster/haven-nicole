import React from 'react';
import './Privacy.css';

const Privacy: React.FC = () => {
  return (
    <div className="privacy">
      <div className="privacy-container">
        <h1>Privacy Policy</h1>
        
        <section className="privacy-section">
          <h2>Information We Collect</h2>
          <div className="content-box">
            <p>We collect information that you provide directly to us, including:</p>
            <ul>
              <li>Name and contact information</li>
              <li>Shipping and billing addresses</li>
              <li>Payment information</li>
              <li>Order history</li>
            </ul>
          </div>
        </section>

        <section className="privacy-section">
          <h2>How We Use Your Information</h2>
          <div className="content-box">
            <p>We use the information we collect to:</p>
            <ul>
              <li>Process your orders and payments</li>
              <li>Send you order confirmations and updates</li>
              <li>Communicate with you about products and services</li>
              <li>Improve our website and customer experience</li>
            </ul>
          </div>
        </section>

        <section className="privacy-section">
          <h2>Information Sharing</h2>
          <div className="content-box">
            <p>We do not sell or rent your personal information to third parties. We may share your information with:</p>
            <ul>
              <li>Service providers who assist in our operations</li>
              <li>Shipping partners to deliver your orders</li>
              <li>Payment processors to handle transactions</li>
            </ul>
          </div>
        </section>

        <section className="privacy-section">
          <h2>Your Rights</h2>
          <div className="content-box">
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </div>
        </section>

        <section className="privacy-section">
          <h2>Contact Us</h2>
          <div className="content-box">
            <p>If you have any questions about our privacy policy, please contact us at:</p>
            <a href="/contact" className="contact-button">Contact Us</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Privacy; 