import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Product.css';

interface ProductData {
  id: string;
  name: string;
  description: string;
  subtitle: string;
  price: number;
  size: string;
  benefits: string[];
  ingredients: string[];
  usage: string;
  imageType: string;
}

const products: Record<string, ProductData> = {
  'haven-glow': {
    id: 'haven-glow',
    name: 'Haven Glow',
    description: 'Nourishing Body Oil',
    subtitle: 'With Argan Oil & Vitamin E',
    price: 1499,
    size: '200ml',
    benefits: [
      'Deep nourishment and hydration',
      'Improves skin elasticity',
      'Enhances natural glow',
      'Non-greasy formula',
      'Quick absorption'
    ],
    ingredients: [
      'Argan Oil',
      'Vitamin E',
      'Sweet Almond Oil',
      'Jojoba Oil',
      'Natural Fragrance'
    ],
    usage: 'Apply generously to damp skin after bathing. Massage in circular motions until fully absorbed. For best results, use daily.',
    imageType: 'oil'
  },
  'haven-bliss': {
    id: 'haven-bliss',
    name: 'Haven Bliss',
    description: 'Moisturizing Body Lotion',
    subtitle: 'With Shea Butter & Almond Oil',
    price: 1299,
    size: '250ml',
    benefits: [
      '24-hour hydration',
      'Smooths and softens skin',
      'Improves skin texture',
      'Fast-absorbing formula',
      'Non-sticky finish'
    ],
    ingredients: [
      'Shea Butter',
      'Sweet Almond Oil',
      'Glycerin',
      'Vitamin E',
      'Natural Fragrance'
    ],
    usage: 'Apply liberally to clean skin. Massage until fully absorbed. Can be used morning and night for optimal results.',
    imageType: 'lotion'
  },
  'haven-muse': {
    id: 'haven-muse',
    name: 'Haven Muse',
    description: 'Exfoliating Body Scrub',
    subtitle: 'With Sugar Crystals & Coconut Oil',
    price: 999,
    size: '200g',
    benefits: [
      'Gentle exfoliation',
      'Removes dead skin cells',
      'Promotes cell renewal',
      'Leaves skin soft and smooth',
      'Prepares skin for moisturizing'
    ],
    ingredients: [
      'Sugar Crystals',
      'Coconut Oil',
      'Vitamin E',
      'Sweet Almond Oil',
      'Natural Fragrance'
    ],
    usage: 'Use 2-3 times per week. Apply to damp skin in circular motions, focusing on rough areas. Rinse thoroughly.',
    imageType: 'scrub'
  }
};

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP'
  }).format(price);
};

const Product: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products[productId || ''];
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="product-not-found">
        <h1>Product Not Found</h1>
        <p>The product you're looking for doesn't exist.</p>
        <Link to="/shop" className="button button-primary">Return to Shop</Link>
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

          <div className="product-details">
            <h1>{product.name}</h1>
            <h2>{product.description}</h2>
            <p className="subtitle">{product.subtitle}</p>
            <p className="size">{product.size}</p>
            <p className="price">{formatPrice(product.price)}</p>
            
            <button 
              className="button button-primary"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>

            <div className="product-info">
              <div className="info-section">
                <h3>Benefits</h3>
                <ul>
                  {product.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <div className="info-section">
                <h3>Key Ingredients</h3>
                <ul>
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>

              <div className="info-section">
                <h3>How to Use</h3>
                <p>{product.usage}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product; 