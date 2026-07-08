import React from "react";
import "./Navbar.scss";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import {
  
  FaHeart,
  FaShoppingCart,
  FaUserCircle,
  FaPhoneAlt,
  FaTruck,
} from "react-icons/fa";

function Navbar() {
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
          <SearchBar onSearch={(text) => 
            console.log(text)
          } />

          
        </div>

        <div className="nav-icons">
          <Link to="/wishlist">
            <FaHeart />
            <span>Wishlist</span>
          </Link>

          <Link to="/cart">
            <FaShoppingCart />
            <span>Cart</span>
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