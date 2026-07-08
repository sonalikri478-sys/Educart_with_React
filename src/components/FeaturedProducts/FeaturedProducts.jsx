import React from "react";
import "./FeaturedProducts.scss";
import products from "./ProductData";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

// const filteredProducts = product.filter((product) => 

// product.name.toLowerCase().includes(searchText.toLowerCase())
// );

function FeaturedProducts() {
  return (
    <section className="featured">
      <h2>Featured Products</h2>
      <p>Most loved products by students</p>

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

            <div className="buttons">
              <button>
                <FaHeart />
              </button>

              <button className="cart">
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