import React from "react";
import "./FeaturedProducts.scss";
import ProductData from "./ProductData";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { useCart } from '../../pages/CartContext';
import { useWishlist } from '../../pages/WishlistContext';
import {useNavigate} from "react-router-dom";

// const filteredProducts = product.filter((product) => 

// product.name.toLowerCase().includes(searchText.toLowerCase())
// );

function FeaturedProducts({products}) {

  const { addToCart } =useCart();

const { toggleWishlist } = useWishlist();

const navigate= useNavigate();


  return (
    <section className="featured">
      <h2>Featured Products</h2>
      <p>Most loved products by students</p>

      
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


      <div className="product-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <span className="category">{item.category}</span>

            <h3>{item.name}</h3>

            <div className="rating">
              <FaStar />
              {item.rating}
            </div>

            <div className="price">
              <span className="new">₹{item.price}</span>
              <span className="old">₹{item.oldPrice}</span>
            </div>

            <div className="buttons"  >
              <button onClick={()=> toggleWishlist(item)}>
                <FiHeart />
              </button>

              <button className="cart" onClick={()=> addToCart(item)} >
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;