import React  from "react";
import "./Navbar.scss";
import SearchBar from "../SearchBar/SearchBar";
import { Link ,useNavigate } from "react-router-dom";
import { useCart } from '../../pages/CartContext';
import { useWishlist } from '../../pages/WishlistContext';
import {
  
  FaHeart,
  FaShoppingCart,
  FaUserCircle,
  FaPhoneAlt,
  FaTruck,
} from "react-icons/fa";

function Navbar() {
  const navigate=useNavigate();
  
 

  const {cartItems}=useCart();
  const {wishlistItems}=useWishlist();
    
  return (
    <>
      <div className="top-bar">
        <div className="left">
          <FaPhoneAlt /> +91 98765432xx
        </div>

        <div className="center">
          <FaTruck /> Free Shipping above ₹999
        </div>

        <div className="right">
          Back to School Sale 🔥
        </div>
      </div>

      <nav className="navbar">
        <div className="logo">
          <Link to="/">EduMart</Link>
        </div>

        <div className="search-box">
          <SearchBar onSearch={(text) => {
           navigate("/products",{state: {searchQuery:text}});

          } }
          />

          
        </div>

        <div className="nav-icons">
          <Link to="/wishlist">
            <FaHeart />
          Wishlist({wishlistItems.length})
            
          </Link>

          <Link to="/cart">
            <FaShoppingCart />
            <span>Cart{cartItems.length}</span>
           

          </Link>

          <Link to="/login">
            <FaUserCircle />
            <span>Login</span>
          </Link>

        
        </div>
      </nav>

      <div className="menu-bar">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/deals">Deals</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </>
  );
}

export default Navbar;