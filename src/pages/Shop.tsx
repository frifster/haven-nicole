import React from 'react';
import './Shop.css';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  size: string;
  image: string;
  benefits: string[];
  ingredients: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Haven Glow",
    description: "A luxurious body oil that deeply nourishes and illuminates your skin, leaving it with a radiant, healthy glow.",
    price: 1499,
    size: "200ml",
    image: "https://placehold.co/600x800/F7C6D0/8B4297?text=Haven+Glow",
    benefits: [
      "Deep nourishment and hydration",
      "Enhances natural skin radiance",
      "Improves skin elasticity",
      "Long-lasting moisture"
    ],
    ingredients: [
      "Argan Oil",
      "Vitamin E",
      "Sweet Almond Oil",
      "Jojoba Oil"
    ]
  },
  {
    id: 2,
    name: "Haven Bliss",
    description: "A rich, creamy body lotion that provides lasting hydration while pampering your skin with natural moisturizers.",
    price: 1299,
    size: "250ml",
    image: "https://placehold.co/600x800/F7C6D0/8B4297?text=Haven+Bliss",
    benefits: [
      "24-hour hydration",
      "Silky smooth finish",
      "Non-greasy formula",
      "Gentle and soothing"
    ],
    ingredients: [
      "Shea Butter",
      "Almond Oil",
      "Glycerin",
      "Vitamin B5"
    ]
  },
  {
    id: 3,
    name: "Haven Muse",
    description: "A gentle yet effective body scrub that exfoliates and polishes your skin, revealing its natural softness and glow.",
    price: 999,
    size: "200g",
    image: "https://placehold.co/600x800/F7C6D0/8B4297?text=Haven+Muse",
    benefits: [
      "Gentle exfoliation",
      "Skin brightening",
      "Improves texture",
      "Promotes circulation"
    ],
    ingredients: [
      "Sugar Crystals",
      "Coconut Oil",
      "Vitamin E",
      "Natural Extracts"
    ]
  }
];

const Shop: React.FC = () => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP'
    }).format(price);
  };

  return (
    <div className="shop">
      <div className="shop-hero">
        <div className="container">
          <h1>Our Products</h1>
          <p>Discover your perfect self-care ritual</p>
        </div>
      </div>

      <section className="product-grid">
        <div className="container">
          <div className="products">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h2>{product.name}</h2>
                  <p className="product-size">{product.size}</p>
                  <p className="product-description">{product.description}</p>
                  <div className="product-details">
                    <div className="benefits">
                      <h3>Key Benefits</h3>
                      <ul>
                        {product.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="ingredients">
                      <h3>Key Ingredients</h3>
                      <ul>
                        {product.ingredients.map((ingredient, index) => (
                          <li key={index}>{ingredient}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="product-footer">
                    <span className="price">{formatPrice(product.price)}</span>
                    <button className="add-to-cart">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="shop-bundle">
        <div className="container">
          <h2>Self-Love Body Care Set</h2>
          <p>Experience the complete Haven ritual with our signature body care collection and save 15%</p>
          <div className="bundle-offer">
            <div className="bundle-content">
              <h3>The Complete Set Includes:</h3>
              <ul>
                {products.map(product => (
                  <li key={product.id}>{product.name} ({product.size})</li>
                ))}
              </ul>
              <div className="bundle-pricing">
                <div className="original-price">
                  <span>Regular Price:</span>
                  {formatPrice(products.reduce((sum, product) => sum + product.price, 0))}
                </div>
                <div className="bundle-price">
                  <span>Bundle Price:</span>
                  {formatPrice(products.reduce((sum, product) => sum + product.price, 0) * 0.85)}
                </div>
              </div>
              <button className="add-bundle">Add Bundle to Cart</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop; 