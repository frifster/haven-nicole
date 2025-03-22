import React from 'react';
import './ShippingAndReturns.css';

const ShippingAndReturns: React.FC = () => {
  return (
    <div className="shipping-and-returns">
      <div className="shipping-and-returns-container">
        <h1>Shipping & Returns</h1>
        
        <section className="shipping-section">
          <h2>Shipping Information</h2>
          <div className="content-box">
            <h3>Processing Time</h3>
            <p>Orders are typically processed within 1-2 business days after payment confirmation.</p>
            
            <h3>Shipping Methods</h3>
            <ul>
              <li>Standard Shipping (3-5 business days)</li>
              <li>Express Shipping (1-2 business days)</li>
              <li>International Shipping (7-14 business days)</li>
            </ul>
            
            <h3>Shipping Costs</h3>
            <p>Shipping costs are calculated at checkout based on your location and selected shipping method.</p>
          </div>
        </section>

        <section className="returns-section">
          <h2>Returns Policy</h2>
          <div className="content-box">
            <h3>Return Window</h3>
            <p>We offer a 30-day return window for all unused items in their original packaging.</p>
            
            <h3>How to Return</h3>
            <ol>
              <li>Log into your account and select the order you wish to return</li>
              <li>Print the provided return shipping label</li>
              <li>Package your item securely in its original packaging</li>
              <li>Drop off the package at any authorized shipping location</li>
            </ol>
            
            <h3>Refund Process</h3>
            <p>Refunds will be processed within 5-7 business days after we receive and inspect your return. The refund will be issued to your original payment method.</p>
          </div>
        </section>

        <section className="contact-section">
          <h2>Need Help?</h2>
          <div className="content-box">
            <p>If you have any questions about shipping or returns, please don't hesitate to contact our customer service team.</p>
            <a href="/contact" className="contact-button">Contact Us</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ShippingAndReturns; 