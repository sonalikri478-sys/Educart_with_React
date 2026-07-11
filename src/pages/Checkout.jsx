import React, { useState } from 'react';
import { useCart } from './CartContext'; // Adjust this path to match your folder hierarchy
import { useNavigate } from 'react-router-dom';
import './Checkout.scss';

function Checkout() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    phone: ''
  });

  // Financial Summary calculations
  const subtotal = cartItems ? cartItems.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0) : 0;
  const shippingCharges = subtotal > 1000 || subtotal === 0 ? 0 : 99; // Free shipping over ₹1000
  const grandTotal = subtotal + shippingCharges;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    if (!formData.fullName || !formData.address || !formData.phone) {
      alert("Please fill in all required fields.");
      return;
    }

    alert(`🎉 Order placed successfully! Thank you for choosing EduMart, ${formData.fullName}!`);
    
    if (clearCart) clearCart();
    navigate('/');
  };

  return (
    <div className="checkout-page container">
      <h2 className="checkout-title">Secure Checkout</h2>
      
      <div className="checkout-layout">
        {/* Left Hand: Input Shipping Form */}
        <div className="shipping-form-section">
          <h3>Shipping Details</h3>
          <form onSubmit={handlePlaceOrder} className="checkout-form">
            <div className="form-group">
              <label>Full Name *</label>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
            </div>
            
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
            </div>
            
            <div className="form-group">
              <label>Delivery Address *</label>
              <input type="text" name="address" value={formData.address} onChange={handleInputChange} required />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>City *</label>
                <input type="text" name="city" value={formData.city} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Postal Code *</label>
                <input type="text" name="postalCode" value={formData.postalCode} onChange={handleInputChange} required />
              </div>
            </div>
            
            <div className="form-group">
              <label>Mobile Number *</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
            </div>
            
            <button type="submit" className="place-order-btn">
              Place Your Order
            </button>
          </form>
        </div>

        {/* Right Hand: Interactive Cost Breakdown Panel */}
        <div className="order-summary-section">
          <h3>Order Summary</h3>
          
          <div className="summary-items-list">
            {cartItems && cartItems.length > 0 ? (
              cartItems.map(item => (
                <div key={item.id} className="summary-item-row">
                  <span className="item-name">
                    {item.name} <strong className="item-qty">x{item.quantity || 1}</strong>
                  </span>
                  <span className="item-price">₹{item.price * (item.quantity || 1)}</span>
                </div>
              ))
            ) : (
              <p className="empty-summary-text">No items in your basket.</p>
            )}
          </div>

          <div className="price-breakdown">
            <div className="breakdown-row">
              <span>Items Subtotal:</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="breakdown-row">
              <span>Shipping Charges:</span>
              <span>{shippingCharges === 0 ? <strong className="free-shipping">FREE</strong> : `₹${shippingCharges}`}</span>
            </div>
            <div className="breakdown-row grand-total-row">
              <span>Order Total:</span>
              <span>₹{grandTotal}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;