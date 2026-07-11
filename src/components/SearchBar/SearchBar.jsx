import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import ProductData from '../FeaturedProducts/ProductData'; // Adjust to your product data path
import './SearchBar.scss';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Close suggestions dropdown if user clicks anywhere outside the search box
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle Input Changes & Filter Data
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim().length > 1) {
      // Filter products matching text query in title or category
      const filtered = ProductData.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase()) ||
        product.category.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 6); // Limit dropdown to top 6 beautiful results
      
      setSuggestions(filtered);
      setShowDropdown(true);
    } else {
      setSuggestions([]);
      setShowDropdown(false);
    }
  };

  // When a user clicks a specific suggestion item
  const handleSuggestionClick = (product) => {
    setQuery(product.name);
    setShowDropdown(false);
    // Navigate straight to that specific item detail page
    navigate(`/products/${product.id}`); 
  };

  return (
    <div className="search-container-wrapper" ref={searchRef}>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search books, notes, stationery..."
          value={query}
          onChange={handleInputChange}
          onFocus={() => query.trim().length > 1 && setShowDropdown(true)}
        />
        <button className="search-btn">
          <FaSearch />
        </button>
      </div>

      {/* Floating Suggestions Dropdown Box */}
      {showDropdown && suggestions.length > 0 && (
        <ul className="search-suggestions-dropdown">
          {suggestions.map((item) => (
            <li key={item.id} onClick={() => handleSuggestionClick(item)}>
              <img src={item.image} alt={item.name} className="suggest-thumb" />
              <div className="suggest-info">
                <span className="suggest-title">{item.name}</span>
                <span className="suggest-meta">in {item.category}</span>
              </div>
              <span className="suggest-price">₹{item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;