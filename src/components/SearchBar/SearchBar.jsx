import React, { useState } from "react";
import "./SearchBar.scss";
import { FaSearch } from "react-icons/fa";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search books, notes, stationery..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button onClick={handleSearch}>
        <FaSearch />
      </button>
    </div>
  );
}

export default SearchBar;