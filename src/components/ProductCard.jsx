import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../pages/CartContext'; // Adjust path to your context
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import './ProductCard.scss';

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart, addToWishlist } = useCart(); // Hooks into your global actions

  const handleCardClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="main-shop-card">
      {/* Wishlist Floating Heart Icon */}
      <button 
        className="wishlist-icon-btn" 
        onClick={(e) => { e.stopPropagation(); addToWishlist(product); }}
        title="Add to Wishlist"
      >
        <FaHeart />
      </button>

      {/* Clickable Area to view dynamic details page */}
      <div onClick={handleCardClick} className="card-clickable-area">
        <div className="img-frame">
          <img src={product.image} alt={product.name} />
        </div>
        
        <div className="card-info">
          <span className="card-cat">{product.category}</span>
          <h4 className="card-title">{product.name}</h4>
          
          <div className="card-price-row">
            <span className="price-now">₹{product.price}</span>
            {product.oldPrice && <span className="price-old">₹{product.oldPrice}</span>}
          </div>
        </div>
      </div>

      {/* Quick Add to Cart Button */}
      <button 
        className="quick-add-btn" 
        onClick={(e) => { e.stopPropagation(); addToCart(product); }}
      >
        <FaShoppingCart /> Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;