import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Shop.css';

interface Product {
  id: string;
  name: string;
  description: string;
  subtitle: string;
  price: number;
  imageType: string;
}

const products: Product[] = [
  {
    id: 'haven-glow',
    name: 'Haven Glow',
    description: 'Nourishing Body Oil',
    subtitle: 'With Argan Oil & Vitamin E',
    price: 1499,
    imageType: 'oil'
  },
  {
    id: 'haven-bliss',
    name: 'Haven Bliss',
    description: 'Moisturizing Body Lotion',
    subtitle: 'With Shea Butter & Almond Oil',
    price: 1299,
    imageType: 'lotion'
  },
  {
    id: 'haven-muse',
    name: 'Haven Muse',
    description: 'Exfoliating Body Scrub',
    subtitle: 'With Sugar Crystals & Coconut Oil',
    price: 999,
    imageType: 'scrub'
  }
];

const BUNDLE_DISCOUNT = 0.15; // 15% discount

const Shop: React.FC = () => {
  const { addItem } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP'
    }).format(price);
  };

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      imageType: product.imageType
    });
  };

  const handleAddBundle = () => {
    const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
    const discountedPrice = totalPrice * (1 - BUNDLE_DISCOUNT);
    
    // Add bundle as a single item with discounted price
    addItem({
      id: 'bundle',
      name: 'Self-Love Body Care Set',
      price: discountedPrice,
      imageType: 'bundle'
    });
  };

  return (
    <div className="shop-page">
      <div className="container">
        <h1>Our Products</h1>
        <p className="section-subtitle">Discover your perfect self-care ritual</p>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <Link to={`/product/${product.id}`} className="product-link">
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
              
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="description">{product.description}</p>
                  <p className="subtitle">{product.subtitle}</p>
                  <p className="price">{formatPrice(product.price)}</p>
                </div>
              </Link>
              <button 
                className="button button-primary"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <div className="bundle-section">
          <h2>Self-Love Body Care Set</h2>
          <p>Experience the complete Haven ritual and save 15%</p>
          <div className="bundle-content">
            <div className="bundle-products">
              <ul>
                <li>Haven Glow - Nourishing Body Oil</li>
                <li>Haven Bliss - Moisturizing Body Lotion</li>
                <li>Haven Muse - Exfoliating Body Scrub</li>
              </ul>
              <div className="bundle-pricing">
                <p className="original-price">Total: {formatPrice(products.reduce((sum, product) => sum + product.price, 0))}</p>
                <p className="bundle-price">Bundle Price: {formatPrice(products.reduce((sum, product) => sum + product.price, 0) * (1 - BUNDLE_DISCOUNT))}</p>
              </div>
              <button 
                className="button button-primary"
                onClick={handleAddBundle}
              >
                Add Bundle to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop; 