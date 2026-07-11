import React from "react";
import { useNavigate } from "react-router-dom";
import "./CategoryCard.scss";

function CategoryCard({ category }) {
  const navigate = useNavigate();

  const handleCardClick =() => {
    navigate("/products", {state:{selectedCategory:category.title}});
  };

  return (
    <div
      className="category-card" onClick = {handleCardClick} style={{cursor: "pointer"}}

    >
      <img src={category.image} alt={category.title} />

      <h3>{category.title}</h3>

      { category.description && <p>{category.description}</p>}

      {category.totalProducts && (<span>{category.totalProducts} Products</span>)}
    </div>
  );
}

export default CategoryCard;