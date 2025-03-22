import React from 'react';
import { Link } from 'react-router-dom';
import './BundleOffer.css';

const BundleOffer: React.FC = () => {
  const totalPrice = 1499 + 1299 + 999; // Sum of all product prices
  const discountedPrice = totalPrice * 0.85; // 15% discount

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP'
    }).format(price);
  };

  return (
    <section className="bundle-offer">
      <div className="container">
        <div className="bundle-card">
          <div className="bundle-content">
            <h2>Self-Love Body Care Set</h2>
            <p>Experience the complete Haven ritual with our signature body care collection and save 15%.</p>
            <div className="bundle-price">
              <span className="price">{formatPrice(discountedPrice)}</span>
              <span className="original-price">{formatPrice(totalPrice)}</span>
              <span className="savings">Save 15%</span>
            </div>
            <div className="bundle-items">
              <p>Set includes:</p>
              <ul>
                <li>Haven Glow - Nourishing Body Oil</li>
                <li>Haven Bliss - Moisturizing Body Lotion</li>
                <li>Haven Muse - Exfoliating Body Scrub</li>
              </ul>
            </div>
          </div>
          <Link to="/bundle" className="button button-primary">Shop Bundle</Link>
        </div>
      </div>
    </section>
  );
};

export default BundleOffer; 