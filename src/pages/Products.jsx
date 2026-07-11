import React from 'react';
import { useLocation } from 'react-router-dom';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import products from '../components/FeaturedProducts/ProductData'; 

function Products() {
  const location = useLocation();
  const selectedCategory = location.state?.selectedCategory || null;
  const searchQuery = location.state?.searchQuery || null;

  if(searchQuery){
    const searchResults = products.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <main className="products-page-container" style={{ padding: '20px 0', minHeight: '60vh' }}>
        <div className="container">
          <h2 style={{ marginBottom: '20px', color: '#3c4043' }}>
            Search Results for: <span style={{ color: '#1a73e8' }}>"{searchQuery}"</span>
          </h2>
          
          {searchResults.length > 0 ? (
            <FeaturedProducts products={searchResults} />
          ) : (
            <div className="no-products" style={{ textAlign: 'center', padding: '50px 20px' }}>
              <div style={{ fontSize: '4rem', marginBottom: '10px' }}>🔍</div>
              <h3 style={{ color: '#5f6368' }}>No products found matching your search.</h3>
              <p style={{ color: '#80868b' }}>Check your spelling or try using broader keywords like "books" or "pens".</p>
            </div>
          )}
        </div>
      </main>
    );
  }


  // 1. If a user clicked a category from the Categories page, filter only that one
  if (selectedCategory) {
    const filteredProducts = products.filter(
      (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
    );

    return (
      <main className="products-page-container" style={{ padding: '20px 0', minHeight: '60vh' }}>
        <div className="container">
          <h2 style={{ textTransform: 'capitalize', marginBottom: '20px', color: '#1a73e8' }}>
            {selectedCategory} Collection
          </h2>
          <FeaturedProducts products={filteredProducts} />
        </div>
      </main>
    );
  }

  // 2. Otherwise (when viewing ALL products), group them by category automatically
  // Get unique categories present in your ProductData file
  const uniqueCategories = [...new Set(products.map((item) => item.category))];

  return (
    <main className="products-page-container" style={{ padding: '20px 0', minHeight: '60vh' }}>
      <div className="container">
        <h1 style={{ marginBottom: '30px', color: '#3c4043' }}>All Departments</h1>
        
        {uniqueCategories.map((categoryName) => {
          // Filter products belonging strictly to this loop's category
          const categorySpecificProducts = products.filter(
            (item) => item.category === categoryName
          );

          return (
            <div key={categoryName} className="category-row-section" style={{ marginBottom: '40px' }}>
              <h2 style={{ 
                fontSize: '1.5rem', 
                color: '#1a73e8', 
                borderBottom: '2px solid #dadce0', 
                paddingBottom: '8px',
                marginBottom: '20px' 
              }}>
                {categoryName}
              </h2>
              
              {/* Reuse your grid component for just this category's items */}
              <FeaturedProducts products={categorySpecificProducts} />
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Products;