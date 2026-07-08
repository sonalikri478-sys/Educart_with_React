import React from "react";
import "./Category.scss";
import categories from "./CategoryData";

function Category() {
  return (
    <section className="category-section">
      <h2>Shop by Category</h2>
      <p>Find everything you need for learning.</p>

      <div className="category-container">
        {categories.map((category) => (
          <div className="category-card" key={category.id}>
            <div className="icon">{category.icon}</div>

            <h3>{category.title}</h3>

            <p>{category.items}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Category;