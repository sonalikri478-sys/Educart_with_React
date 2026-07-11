import { useParams } from "react-router-dom";
import React from 'react';
import CategoryCard from '../components/CategoryCard/CategoryCard';
// FIX: Import 'categories' directly without curly braces because it's a default export
import categories from '../components/Category/CategoryData'; 

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
        {/* Map through the imported categories data array */}
        {categories && categories.map((cat) => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>
    </div>
  


           

    );

}

export default CategoryPage;
