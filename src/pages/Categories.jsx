
import React from 'react';
import CategoryCard from '../components/CategoryCard/CategoryCard';
// FIX: Import 'categories' directly without curly braces because it's a default export
import categories from '../components/Category/CategoryData'; 
import ProductCard from "../components/ProductCard";
import products from "../components/FeaturedProducts/ProductData";

function CategoryPage() {

    
    return (

        

            


    <div className="categories-page container" style={{ padding: '40px 20px', minHeight: '70vh' }}>
      <h2 style={{ marginBottom: '20px', fontSize: '2rem', color: '#1a73e8' }}>
        Shop By Category
      </h2>
      
      <div 
        className="category-grid" 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '20px' 
        }}
      >

        {products.map(product => <ProductCard key ={product.id} product={product} />)}
       


        {/* Map through the imported categories data array */}
        {categories && categories.map((cat) => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>
    </div>
  


           

    );

}

export default CategoryPage;
