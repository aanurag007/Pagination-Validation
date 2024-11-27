// src/components/SearchBar.jsx
const SearchBar = ({ onSearch }) => {
    return (
      <input
        type="text"
        placeholder="Search items..."
        onChange={(e) => onSearch(e.target.value)}
        className="search-bar"
      />
    );
  };
  
  export default SearchBar;
  