import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Bundle.css';

interface Product {
  id: string;
  name: string;
  description: string;
  subtitle: string;
  price: number;
  imageType: string;
  modelUrl: string;
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
    modelUrl: 'https://www.pacdora.com/share?filter_url=psc7mpldah',
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
    modelUrl: 'https://www.pacdora.com/share?filter_url=pss3674dl4',
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
    modelUrl: 'https://www.pacdora.com/share?filter_url=pst4uiokns',
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
  const { addItem } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP'
    }).format(price);
  };

  const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
  const discountedPrice = totalPrice * 0.85; // 15% discount
  const savings = totalPrice - discountedPrice;

  const handleAddBundle = () => {
    addItem({
      id: 'bundle',
      name: 'Self-Love Body Care Set',
      price: discountedPrice,
      imageType: 'bundle',
      isBundle: true,
      bundleItems: products.map(product => ({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        imageType: product.imageType
      }))
    });
  };

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
              <div className="product-display">
                <div className="product-image">
                  <iframe
                    src={products[0].modelUrl}
                    title={`${products[0].name} 3D View`}
                    width="100%"
                    height="300"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="product-display">
                <div className="product-image">
                  <iframe
                    src={products[1].modelUrl}
                    title={`${products[1].name} 3D View`}
                    width="100%"
                    height="300"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="product-display">
                <div className="product-image">
                  <iframe
                    src={products[2].modelUrl}
                    title={`${products[2].name} 3D View`}
                    width="100%"
                    height="300"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            <div className="bundle-pricing">
              <div className="price-details">
                <p className="original-price">Total Value: {formatPrice(totalPrice)}</p>
                <p className="bundle-price">Bundle Price: {formatPrice(discountedPrice)}</p>
                <p className="savings">You Save: {formatPrice(savings)}</p>
              </div>
              <button 
                className="button button-primary"
                onClick={handleAddBundle}
              >
                Add Bundle to Cart
              </button>
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

            <div className="ritual-section">
              <h2>The Perfect Ritual</h2>
              <div className="steps">
                <div className="step">
                  <h3>Step 1: Exfoliate</h3>
                  <Link to={`/product/${products[0].id}`} className="product-link">
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
                  <Link to={`/product/${products[1].id}`} className="product-link">
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
                  <Link to={`/product/${products[2].id}`} className="product-link">
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