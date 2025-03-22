import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { generateOrderNumber, OrderItem, ShippingDetails } from '../data/orderData';
import './OrderConfirmation.css';

interface OrderConfirmationState {
  items: OrderItem[];
  shippingDetails: ShippingDetails;
  total: number;
}

const OrderConfirmation: React.FC = () => {
  const location = useLocation();
  const { items, shippingDetails, total } = location.state as OrderConfirmationState;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP'
    }).format(price);
  };

  return (
    <div className="order-confirmation-page">
      <div className="container">
        <div className="confirmation-content">
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h1>Thank You for Your Order!</h1>
            <p>Your order has been successfully placed.</p>
            <p className="order-number">Order Number: {generateOrderNumber()}</p>
            <p className="order-date">Order Date: {new Date().toLocaleDateString('en-PH', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</p>
          </div>

          <div className="order-details">
            <h2>Order Details</h2>
            <div className="items-list">
              {items.map((item) => (
                <div key={item.id} className="order-item">
                  <span className="item-name">{item.name}</span>
                  <span className="item-quantity">x{item.quantity}</span>
                  <span className="item-price">{formatPrice(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>
            <div className="order-totals">
              <div className="total-row">
                <span>Subtotal ({items.length} items)</span>
                <span>{formatPrice(total)}</span>
              </div>
              <div className="total-row">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="total-row final">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
          </div>

          <div className="shipping-details">
            <h2>Shipping Details</h2>
            <div className="shipping-info">
              <p>{shippingDetails.firstName} {shippingDetails.lastName}</p>
              <p>{shippingDetails.address}</p>
              <p>{shippingDetails.city}, {shippingDetails.province} {shippingDetails.postalCode}</p>
              <p>{shippingDetails.country}</p>
              <p>Phone: {shippingDetails.phone}</p>
              <p>Email: {shippingDetails.email}</p>
            </div>
          </div>

          <div className="next-steps">
            <h2>What's Next?</h2>
            <p>You will receive an email confirmation with your order details shortly.</p>
            <p>We'll notify you when your order ships.</p>
          </div>

          <div className="action-buttons">
            <Link to="/shop" className="button button-primary">
              Continue Shopping
            </Link>
            <Link to="/" className="button button-secondary">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation; 