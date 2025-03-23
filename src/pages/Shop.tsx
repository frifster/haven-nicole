import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Product, getBundlePrice, getProductList, getTotalPrice } from '../data/products';
import './Shop.css';

const Shop: React.FC = () => {
  const { addItem } = useCart();
  const products = getProductList();

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
    const discountedPrice = getBundlePrice();
    
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
                  <iframe
                    src={product.modelUrl}
                    title={`${product.name} 3D View`}
                    width="100%"
                    height="300"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
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
            <div className="bundle-image">
              <img
                src="/images/bundle.png"
                alt="Haven Self-Love Body Care Set"
                width="100%"
                height="400"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="bundle-products">
              <ul>
                {products.map(product => (
                  <li key={product.id}>{product.name} - {product.description}</li>
                ))}
              </ul>
              <div className="bundle-pricing">
                <p className="original-price">Total: {formatPrice(getTotalPrice())}</p>
                <p className="bundle-price">{formatPrice(getBundlePrice())}</p>
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