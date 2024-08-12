import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="mb-8">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-3 py-2 border rounded-lg"
        placeholder="Search articles or videos"
      />
    </form>
  );
};

export default SearchBar;
