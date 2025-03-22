import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { getProductById } from '../data/products';
import './Product.css';

const Product: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addItem } = useCart();
  const product = productId ? getProductById(productId) : null;
  console.log({product, productId});

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP'
    }).format(price);
  };

  if (!product) {
    return (
      <div className="product-page">
        <div className="container">
          <h1>Product Not Found</h1>
          <p>Sorry, the product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      imageType: product.imageType
    });
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="product-content">
          <div className="product-image-section">
            <div className="product-image">
              <iframe
                src={product.modelUrl}
                title={`${product.name} 3D View`}
                width="100%"
                height="500"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="product-details">
            <h1>{product.name}</h1>
            <p className="subtitle">{product.subtitle}</p>
            <p className="description">{product.description}</p>
            <p className="price">{formatPrice(product.price)}</p>
            <p className="size">Size: {product.size}</p>

            <div className="benefits-section">
              <h2>Benefits</h2>
              <ul>
                {product.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div className="ingredients-section">
              <h2>Ingredients</h2>
              <ul>
                {product.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>

            <div className="usage-section">
              <h2>How to Use</h2>
              <p>{product.usage}</p>
            </div>

            <button 
              className="button button-primary"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product; 