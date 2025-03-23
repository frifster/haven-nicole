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
        <Link to="/bundle" className="bundle-link">
          <div className="bundle-card">
            <div className="discount-ribbon">Save 15%</div>
            <div className="bundle-content">
              <div className="bundle-image">
                <img 
                  src="/images/bundle.png" 
                  alt="Haven Self-Love Body Care Set"
                  style={{ width: '100%', objectFit: 'contain' }}
                />
              </div>
              <h2>Self-Love Body Care Set</h2>
              <p>Experience the complete Haven ritual with our signature body care collection.</p>
              <div className="bundle-price">
                <div className="price-tag">
                  <span className="price">{formatPrice(discountedPrice)}</span>
                  <span className="original-price">{formatPrice(totalPrice)}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default BundleOffer; 