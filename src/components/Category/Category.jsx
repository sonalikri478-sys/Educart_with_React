import React from "react";
import "./Category.scss";
import categories from "./CategoryData";
import CategoryCard from "../CategoryCard/CategoryCard";

function Category() {
  return (
    <section className="category-section">
      <h2>Shop by Category</h2>

      <div className="category-container">

        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
          />
        ))}

      </div>
    </section>
  );
}

export default Category;