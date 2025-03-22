import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart: React.FC = () => {
  const { items, removeItem, updateQuantity, getTotal, getItemCount } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP'
    }).format(price);
  };

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="empty-cart">
            <h1>Your Cart is Empty</h1>
            <p>Looks like you haven't added any items to your cart yet.</p>
            <Link to="/shop" className="button button-primary">Continue Shopping</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1>Shopping Cart</h1>
        <div className="cart-content">
          <div className="cart-items">
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  {item.imageType === 'oil' && (
                    <div className="bottle oil">
                      <div className="bottle-body"></div>
                      <div className="bottle-neck"></div>
                    </div>
                  )}
                  {item.imageType === 'lotion' && (
                    <div className="bottle lotion">
                      <div className="bottle-body"></div>
                      <div className="bottle-neck"></div>
                    </div>
                  )}
                  {item.imageType === 'scrub' && (
                    <div className="jar">
                      <div className="jar-body"></div>
                      <div className="jar-lid"></div>
                    </div>
                  )}
                  {item.imageType === 'bundle' && (
                    <div className="bundle-image">
                      <div className="bundle-products">
                        <div className="bottle oil">
                          <div className="bottle-body"></div>
                          <div className="bottle-neck"></div>
                        </div>
                        <div className="bottle lotion">
                          <div className="bottle-body"></div>
                          <div className="bottle-neck"></div>
                        </div>
                        <div className="jar">
                          <div className="jar-body"></div>
                          <div className="jar-lid"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  {item.id === 'bundle' && (
                    <p className="bundle-description">
                      Complete set includes:<br />
                      • Haven Glow - Nourishing Body Oil<br />
                      • Haven Bliss - Moisturizing Body Lotion<br />
                      • Haven Muse - Exfoliating Body Scrub
                    </p>
                  )}
                  <p className="price">{formatPrice(item.price)}</p>
                  <div className="quantity-controls">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="quantity-btn"
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-details">
              <div className="summary-row">
                <span>Subtotal ({getItemCount()} items)</span>
                <span>{formatPrice(getTotal())}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>{formatPrice(getTotal())}</span>
              </div>
            </div>
            <button className="button button-primary checkout-btn">
              Proceed to Checkout
            </button>
            <Link to="/shop" className="continue-shopping">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 