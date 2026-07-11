import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext'; // Hooks directly into your cart engine
import { FaTag, FaClock, FaCopy, FaCheck, FaShoppingCart } from 'react-icons/fa';
import ProductData from "../components/FeaturedProducts/ProductData";
import './Deals.scss';
import {useNavigate} from "react-router-dom"

function Deals() {
  const { addToCart } = useCart();
  const [copiedCode, setCopiedCode] = useState('');

  const navigate = useNavigate();

  // Filter out products that have an oldPrice to find discounted deals
  const dealProducts = ProductData.filter(item => item.oldPrice && item.price < item.oldPrice);

  const promoCoupons = [
    { code: 'EDUSTART20', discount: '20% OFF', desc: 'Valid on all Study Tools & Lamps' },
    { code: 'BOOKWORM15', discount: '15% OFF', desc: 'Valid on all Books and Notebook sets' }
  ];

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  // Calculate percentage discount
  const calculateSavings = (current, old) => {
    return Math.round(((old - current) / old) * 100);
  };

  return (
    <div className="deals-page container">
      {/* Banner Box */}
      <div className="deals-banner">
        <div className="banner-text">
          <span className="badge"><FaClock /> Limited Time Offers</span>
          <h2>Mega Semester Sale</h2>
          <p>Get maximum discounts on your favorite educational supplies. Offers expire soon!</p>
        </div>
      </div>

      {/* Coupon Grid Layout */}
      <h3 className="section-title"><FaTag /> Copy Coupon Codes</h3>
      <div className="coupons-grid">
        {promoCoupons.map((coupon) => (
          <div className="coupon-card" key={coupon.code}>
            <div className="discount-amount">{coupon.discount}</div>
            <div className="coupon-details">
              <h4>{coupon.code}</h4>
              <p>{coupon.desc}</p>
            </div>
            <button 
              className={`copy-btn ${copiedCode === coupon.code ? 'copied' : ''}`}
              onClick={() => copyToClipboard(coupon.code)}
            >
              {copiedCode === coupon.code ? <><FaCheck /> Copied</> : <><FaCopy /> Copy Code</>}
            </button>
          </div>
        ))}
      </div>

      
  <div className="product-grid">
    {ProductData.map((item) => (
      <div 
        key={item.id} 
        className="product-card" 
        onClick={() => navigate(`/products/${item.id}`)} // Takes user to details view
        style={{ cursor: 'pointer' }}
      >
        <img src={item.image} alt={item.name} />
        <h4>{item.name}</h4>
        <span>₹{item.price}</span>
      </div>
    ))}
  </div>


      {/* Active Deals Products List Grid */}
      <h3 className="section-title">Flash Discount Products</h3>
      <div className="deals-grid">
        {dealProducts.map((item) => {
          const discountPercent = calculateSavings(item.price, item.oldPrice);
          return (
            <div className="deal-card" key={item.id}>
              <div className="image-wrapper">
                <span className="save-badge">{discountPercent}% OFF</span>
                <img src={item.image} alt={item.name} />
              </div>
              
              <div className="info-wrapper">
                <span className="cat-text">{item.category}</span>
                <h4>{item.name}</h4>
                
                <div className="price-row">
                  <span className="new-price">₹{item.price}</span>
                  <span className="old-price">₹{item.oldPrice}</span>
                </div>

                <button className="add-deal-btn" onClick={() => addToCart(item)}>
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Deals;