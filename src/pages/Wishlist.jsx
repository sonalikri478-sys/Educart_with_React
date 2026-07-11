import React from 'react';
import { useWishlist } from './WishlistContext'; // Adjust path if needed
import { useCart } from './CartContext'; // To allow moving items straight to cart
import { useNavigate, Link } from 'react-router-dom';
import { FaTrash, FaShoppingCart, FaStar } from 'react-icons/fa';
import './Wishlist.scss';

function Wishlist() {
  const { wishlistItems, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="wishlist-page container">
      <h2>Your Favourites Basket</h2>

      {wishlistItems && wishlistItems.length > 0 ? (
        <div className="wishlist-grid">
          {wishlistItems.map((item) => (
            <div className="wishlist-card" key={item.id}>
              {/* Image & Category Overlay */}
              <div className="image-container" onClick={() => navigate(`/products`)}>
                <img src={item.image} alt={item.name} />
                <span className="category-badge">{item.category}</span>
              </div>

              {/* Text Description Details */}
              <div className="wishlist-item-details">
                <h3>{item.name}</h3>
                
                <div className="rating">
                  <FaStar /> <span>{item.rating || '4.5'}</span>
                </div>

                <div className="price-tag">
                  <span className="current-price">₹{item.price}</span>
                  {item.oldPrice && <span className="old-price">₹{item.oldPrice}</span>}
                </div>
              </div>

              {/* Control Action Buttons */}
              <div className="wishlist-actions">
                <button 
                  className="add-to-cart-btn" 
                  onClick={() => {
                    addToCart(item);
                    // Optional: remove from wishlist once added to cart
                    // toggleWishlist(item); 
                  }}
                >
                  <FaShoppingCart /> Add to Cart
                </button>
                
                <button 
                  className="remove-wishlist-btn" 
                  onClick={() => toggleWishlist(item)}
                  title="Remove from Wishlist"
                >
                  <FaTrash /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-wishlist">
          <div className="empty-heart-icon">❤️</div>
          <h3>Your Wishlist is empty!</h3>
          <p>Tap the heart icon on items you love to save them here for later.</p>
          <Link to="/products" className="continue-shopping-btn">Explore Products</Link>
        </div>
      )}
    </div>
  );
}

export default Wishlist;