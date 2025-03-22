import React from 'react';
import { Link } from 'react-router-dom';
import './Bundle.css';

interface Product {
  id: string;
  name: string;
  description: string;
  subtitle: string;
  price: number;
  imageType: string;
  benefits: string[];
}

const products: Product[] = [
  {
    id: 'haven-muse',
    name: 'Haven Muse',
    description: 'Exfoliating Body Scrub',
    subtitle: 'With Sugar Crystals & Coconut Oil',
    price: 999,
    imageType: 'scrub',
    benefits: [
      'Gently removes dead skin cells',
      'Promotes skin renewal',
      'Improves product absorption',
      'Enhances skin texture',
      'Prepares skin for moisturizing'
    ]
  },
  {
    id: 'haven-bliss',
    name: 'Haven Bliss',
    description: 'Moisturizing Body Lotion',
    subtitle: 'With Shea Butter & Almond Oil',
    price: 1299,
    imageType: 'lotion',
    benefits: [
      'Provides 24-hour hydration',
      'Nourishes and softens skin',
      'Locks in moisture',
      'Improves skin elasticity',
      'Creates protective barrier'
    ]
  },
  {
    id: 'haven-glow',
    name: 'Haven Glow',
    description: 'Nourishing Body Oil',
    subtitle: 'With Argan Oil & Vitamin E',
    price: 1499,
    imageType: 'oil',
    benefits: [
      'Seals in moisture',
      'Enhances natural radiance',
      'Provides lasting nourishment',
      'Improves skin tone',
      'Adds healthy sheen'
    ]
  }
];

const Bundle: React.FC = () => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP'
    }).format(price);
  };

  const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
  const discountedPrice = totalPrice * 0.85; // 15% discount
  const savings = totalPrice - discountedPrice;

  return (
    <div className="bundle-page">
      <div className="container">
        <div className="bundle-hero">
          <h1>Self-Love Body Care Set</h1>
          <p>Transform your daily body care routine into a luxurious self-care ritual</p>
        </div>

        <div className="bundle-content">
          <div className="bundle-products">
            <div className="products-display">
              {products.map((product) => (
                <div key={product.id} className="product-display">
                  <div className="product-image">
                    {product.imageType === 'oil' && (
                      <div className="bottle oil">
                        <div className="bottle-body"></div>
                        <div className="bottle-neck"></div>
                      </div>
                    )}
                    {product.imageType === 'lotion' && (
                      <div className="bottle lotion">
                        <div className="bottle-body"></div>
                        <div className="bottle-neck"></div>
                      </div>
                    )}
                    {product.imageType === 'scrub' && (
                      <div className="jar">
                        <div className="jar-body"></div>
                        <div className="jar-lid"></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bundle-pricing">
              <div className="price-details">
                <p className="original-price">Total Value: {formatPrice(totalPrice)}</p>
                <p className="bundle-price">Bundle Price: {formatPrice(discountedPrice)}</p>
                <p className="savings">You Save: {formatPrice(savings)}</p>
              </div>
              <button className="button button-primary">Add Bundle to Cart</button>
            </div>
          </div>

          <div className="bundle-benefits">
            <h2>Why Choose the Complete Set?</h2>
            
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>Perfect Synergy</h3>
                <p>Each product is designed to complement the others, creating a complete and effective body care routine that delivers optimal results.</p>
              </div>
              
              <div className="benefit-card">
                <h3>Save 15%</h3>
                <p>Get the complete set and save 15% compared to buying products individually. Plus, enjoy free shipping on your bundle order.</p>
              </div>
              
              <div className="benefit-card">
                <h3>Complete Care</h3>
                <p>Address all your body care needs with products that work together to exfoliate, moisturize, and nourish your skin.</p>
              </div>
              
              <div className="benefit-card">
                <h3>Self-Care Ritual</h3>
                <p>Transform your daily routine into a luxurious self-care experience that nurtures both your skin and soul.</p>
              </div>
            </div>

            <div className="how-it-works">
              <h2>The Perfect Ritual</h2>
              <div className="steps">
                <div className="step">
                  <h3>Step 1: Exfoliate</h3>
                  <Link to="/product/haven-muse" className="product-link">
                    <h4>Haven Muse Body Scrub</h4>
                  </Link>
                  <ul>
                    {products[0].benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>

                <div className="step">
                  <h3>Step 2: Moisturize</h3>
                  <Link to="/product/haven-bliss" className="product-link">
                    <h4>Haven Bliss Body Lotion</h4>
                  </Link>
                  <ul>
                    {products[1].benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>

                <div className="step">
                  <h3>Step 3: Nourish</h3>
                  <Link to="/product/haven-glow" className="product-link">
                    <h4>Haven Glow Body Oil</h4>
                  </Link>
                  <ul>
                    {products[2].benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bundle; 