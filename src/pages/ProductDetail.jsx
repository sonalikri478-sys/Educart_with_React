import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import{useCart} from "./CartContext";
import { FaStar,FaHeart, FaShoppingCart, FaChevronRight, FaRegStar } from 'react-icons/fa';
import ProductData from '../components/FeaturedProducts/ProductData'; // Your central data array
import './ProductDetail.scss';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  

   const{ addToCart , addToWishlist }=useCart();

  // Find the exact product being viewed
  const product = ProductData.find(item => item.id === Number(id));

  // Local state for dynamic, interactive reviews
  const [reviews, setReviews] = useState([
    { id: 1, user: "Aarav Sharma", rating: 5, comment: "Excellent quality notebook! The paper density is perfect for fountain pens without bleeding.", date: "10-05-2026" },
    { id: 2, user: "Sneha Patel", rating: 4, comment: "Very sturdy build. Using it daily for university notes. Wish there were more color options.", date: "24-06-2026" }
  ]);
  const [newReview, setNewReview] = useState({ user: '', rating: 5, comment: '' });

  // Scroll to top automatically when switching between dynamic product detail pages
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return <div className="error-container"><h3>Product not found!</h3><Link to="/">Back to Home</Link></div>;
  }

  // Get 3 similar products (Same category, excluding the current product)
  const similarProducts = ProductData.filter(
    item => item.category === product.category && item.id !== product.id
  ).slice(0, 3);

  // Handle Review Submission
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReview.user || !newReview.comment) return alert("Please fill in all fields.");

    const freshReview = {
      id: Date.now(),
      user: newReview.user,
      rating: Number(newReview.rating),
      comment: newReview.comment,
      date: new Date().toLocaleDateString('en-GB')
    };

    setReviews([freshReview, ...reviews]);
    setNewReview({ user: '', rating: 5, comment: '' });
  };

  return (
    <div className="product-detail-container">
      {/* Breadcrumb Navigation Line */}
      <div className="breadcrumb">
        <Link to="/">Home</Link> <FaChevronRight className="sep" /> 
        <Link to="/products">Products</Link> <FaChevronRight className="sep" /> 
        <span className="current">{product.name}</span>
      </div>

      {/* Primary Layout Block: Main Core Info */}
      <div className="main-product-section">
        <div className="product-gallery">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-info-panel">
          <span className="category-tag">{product.category}</span>
          <h2>{product.name}</h2>
          
          <div className="ratings-summary">
            <div className="stars">
              {[...Array(5)].map((_, i) => <FaStar key={i} className={i < 4 ? "gold" : "muted"} />)}
            </div>
            <span className="count">({reviews.length} Customer Reviews)</span>
          </div>

          <div className="pricing-box">
            <span className="current-price">₹{product.price}</span>
            {product.oldPrice && <span className="old-price">₹{product.oldPrice}</span>}
          </div>

          <p className="description">
            This premium {product.name.toLowerCase()} is handpicked specifically for India's educational landscape. Built using high-quality, durable components designed to maximize student focus and organize daily workflow efficiently.
          </p>

          <button className="add-to-cart-action-btn" onClick={() => addToCart(product)}>
            <FaShoppingCart /> Add to Cart
          </button>

          <button className="add-to-wishlist-action-btn" onClick={()=> addToWishlist(product)} style={{background:"#f1f5f9" , color:"#64748b" , border:"none",padding:"16px", borderRadius :"12px" , cursor:"pointer"}}>
            <FaHeart style={{color:"#ef4444"}}/>
          </button>
        </div>
      </div>

      {/* Secondary Layout Block: Similar Recommendations Array */}
      <div className="similar-products-section">
        <h3>You Might Also Like</h3>
        <div className="similar-grid">
          {similarProducts.length > 0 ? (
            similarProducts.map((item) => (
              <div key={item.id} className="similar-card" onClick={() => navigate(`/products/${item.id}`)}>
                <img src={item.image} alt={item.name} />
                <h4>{item.name}</h4>
                <span className="price">₹{item.price}</span>
              </div>
            ))
          ) : (
            <p className="no-similar">No similar alternative products found in this category.</p>
          )}
        </div>
      </div>

      {/* Tertiary Layout Block: Feedback & Reviews Corner */}
      <div className="reviews-feedback-corner">
        <h3>Customer Feedback & Reviews</h3>
        
        <div className="reviews-split-layout">
          {/* Review List Display */}
          <div className="reviews-display-list">
            {reviews.length === 0 ? <p>No reviews yet. Be the first to share your experience!</p> : (
              reviews.map((rev) => (
                <div key={rev.id} className="review-node">
                  <div className="node-header">
                    <strong>{rev.user}</strong>
                    <span className="date">{rev.date}</span>
                  </div>
                  <div className="node-stars">
                    {[...Array(5)].map((_, i) => (
                      i < rev.rating ? <FaStar key={i} className="gold" /> : <FaRegStar key={i} className="muted" />
                    ))}
                  </div>
                  <p>{rev.comment}</p>
                </div>
              ))
            )}
          </div>

          {/* Form to leave a review */}
          <form className="leave-review-form" onSubmit={handleReviewSubmit}>
            <h4>Write a Review</h4>
            
            <div className="form-group">
              <label>Your Name</label>
              <input 
                type="text" 
                placeholder="Enter your name" 
                value={newReview.user} 
                onChange={(e) => setNewReview({...newReview, user: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>Rating Score</label>
              <select 
                value={newReview.rating} 
                onChange={(e) => setNewReview({...newReview, rating: e.target.value})}
              >
                <option value="5">5 Stars - Excellent</option>
                <option value="4">4 Stars - Very Good</option>
                <option value="3">3 Stars - Average</option>
                <option value="2">2 Stars - Poor</option>
                <option value="1">1 Star - Horrible</option>
              </select>
            </div>

            <div className="form-group">
              <label>Your Feedback</label>
              <textarea 
                rows="4" 
                placeholder="Share details of your experience with this item..."
                value={newReview.comment}
                onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
              ></textarea>
            </div>

            <button type="submit" className="submit-review-btn">Post Feedback</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;