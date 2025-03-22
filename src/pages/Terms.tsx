import React from 'react';
import './Terms.css';

const Terms: React.FC = () => {
  return (
    <div className="terms">
      <div className="terms-container">
        <h1>Terms of Service</h1>
        
        <section className="terms-section">
          <h2>Agreement to Terms</h2>
          <div className="content-box">
            <p>By accessing and using this website, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our website.</p>
          </div>
        </section>

        <section className="terms-section">
          <h2>Use License</h2>
          <div className="content-box">
            <p>Permission is granted to temporarily access and use our website for personal, non-commercial purposes only. This license does not include:</p>
            <ul>
              <li>Modifying or copying our materials</li>
              <li>Using materials for commercial purposes</li>
              <li>Attempting to decompile or reverse engineer our software</li>
              <li>Removing any copyright or proprietary notations</li>
              <li>Transferring materials to another person</li>
            </ul>
          </div>
        </section>

        <section className="terms-section">
          <h2>Product Information</h2>
          <div className="content-box">
            <p>We strive to display accurate product information, including:</p>
            <ul>
              <li>Product descriptions</li>
              <li>Pricing</li>
              <li>Availability</li>
              <li>Shipping information</li>
            </ul>
            <p>However, we reserve the right to correct any errors and modify prices without notice.</p>
          </div>
        </section>

        <section className="terms-section">
          <h2>Order Acceptance</h2>
          <div className="content-box">
            <p>All orders are subject to acceptance and availability. We reserve the right to:</p>
            <ul>
              <li>Refuse service to anyone</li>
              <li>Cancel orders at our discretion</li>
              <li>Limit quantities of items</li>
              <li>Modify or discontinue products</li>
            </ul>
          </div>
        </section>

        <section className="terms-section">
          <h2>Limitations</h2>
          <div className="content-box">
            <p>We shall not be liable for any damages arising from:</p>
            <ul>
              <li>Use or inability to use our website</li>
              <li>Any products purchased through our website</li>
              <li>Third-party actions or content</li>
              <li>Service interruptions or data loss</li>
            </ul>
          </div>
        </section>

        <section className="terms-section">
          <h2>Contact Information</h2>
          <div className="content-box">
            <p>If you have any questions about these Terms of Service, please contact us at:</p>
            <a href="/contact" className="contact-button">Contact Us</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Terms; 