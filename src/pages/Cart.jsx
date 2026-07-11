import React from 'react';
import { useCart } from './CartContext'; // Adjust path if needed
import { useNavigate, Link } from 'react-router-dom';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import './Cart.scss';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  // Calculate Subtotal safely
  const subtotal = cartItems ? cartItems.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0) : 0;

  return (
    <div className="cart-page container">
      <h2>Your Shopping Cart</h2>

      {cartItems && cartItems.length > 0 ? (
        <div className="cart-layout">
          {/* Left Side: Items List */}
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item-card">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="item-category">{item.category}</p>
                  <p className="item-price">₹{item.price}</p>
                </div>

                {/* Quantity Controls */}
                <div className="quantity-controls">
                  <button 
                    onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                    disabled={(item.quantity || 1) <= 1}
                  >
                    <FaMinus />
                  </button>
                  <span>{item.quantity || 1}</span>
                  <button onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}>
                    <FaPlus />
                  </button>
                </div>

                {/* Remove Button */}
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          {/* Right Side: Total Summary & Checkout Button */}
          <div className="cart-summary-card">
            <h3>Subtotal ({cartItems.length} items):</h3>
            <h2 className="subtotal-price">₹{subtotal}</h2>
            <p className="shipping-note">
              {subtotal > 1000 ? "🎉 Eligible for FREE Delivery" : "Add items worth ₹" + (1000 - subtotal) + " more for FREE delivery"}
            </p>
            
            {/* THIS IS YOUR CHECKOUT BUTTON */}
            <button className="checkout-btn" onClick={() => navigate('/checkout')}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <div className="empty-icon">🛒</div>
          <h3>Your Cart is empty!</h3>
          <p>Explore our departments and add educational items to your basket.</p>
          <Link to="/products" className="shop-now-btn">Shop Now</Link>
        </div>
      )}
    </div>
  );
}

export default Cart;