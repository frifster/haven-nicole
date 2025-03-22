import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { dummyShippingDetails, ShippingDetails } from '../data/orderData';
import './Checkout.css';

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { items, getTotal, getItemCount, clearCart } = useCart();
  const [shippingDetails, setShippingDetails] = useState<ShippingDetails>(dummyShippingDetails);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP'
    }).format(price);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Pass the order data to the confirmation page
    navigate('/order-confirmation', {
      state: {
        items,
        shippingDetails,
        total: getTotal()
      }
    });
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div className="checkout-page">
        <div className="container">
          <div className="empty-cart">
            <h1>Your Cart is Empty</h1>
            <p>Looks like you haven't added any items to your cart yet.</p>
            <button onClick={() => navigate('/shop')} className="button button-primary">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="container">
        <h1>Checkout</h1>
        <div className="checkout-content">
          <div className="shipping-form">
            <h2>Shipping Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={shippingDetails.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={shippingDetails.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={shippingDetails.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={shippingDetails.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={shippingDetails.address}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={shippingDetails.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="province">Province</label>
                  <input
                    type="text"
                    id="province"
                    name="province"
                    value={shippingDetails.province}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="postalCode">Postal Code</label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={shippingDetails.postalCode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={shippingDetails.country}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="button button-primary">
                Place Order
              </button>
            </form>
          </div>

          <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="summary-items">
              {items.map((item) => (
                <div key={item.id} className="summary-item">
                  <span className="item-name">{item.name}</span>
                  <span className="item-quantity">x{item.quantity}</span>
                  <span className="item-price">{formatPrice(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>
            <div className="summary-totals">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout; 