import React from 'react';
import { Link } from 'react-router-dom';
import { getProductList } from '../data/products';
import './FeaturedProducts.css';

const FeaturedProducts: React.FC = () => {
  const products = getProductList();
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP'
    }).format(price);
  };

  return (
    <section className="featured-products">
      <div className="container">
        <h2 className="section-title">Our Signature Collection</h2>
        <p className="section-subtitle">Experience the perfect trio for your self-care ritual</p>
        
        <div className="products-grid">
          {products.map((product) => (
            <Link 
              key={product.id} 
              to={`/product/${product.id}`} 
              className="product-card"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts; 