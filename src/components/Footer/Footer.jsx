import React from "react";
import "./Footer.scss";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-section">
          <h2>EduMart</h2>

          <p>
            Your one-stop destination for books,
            stationery, handwritten notes,
            educational toys, and study essentials.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Categories</li>
            <li>Deals</li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className="footer-section">
          <h3>Support</h3>

          <ul>
            <li>Help Center</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>

          <p>Email: support@edumart.com</p>

          <p>Phone: +91 9876543210</p>

          <div className="social-icons">

            <FaFacebook />

            <FaInstagram />

            <FaLinkedin />

            <FaYoutube />

          </div>
        </div>

      </div>

      <hr />

      <div className="copyright">
        © 2026 EduMart. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;