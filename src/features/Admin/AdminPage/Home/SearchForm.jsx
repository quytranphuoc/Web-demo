import React, { useState } from "react";
import MovieResult from "./MovieResult"; // Component to display movie search results
import Header from "../../../../Components/layout/Header";

const SearchForm = () => {
  const [query, setQuery] = useState(""); // State to store search query
  const [results, setResults] = useState([]); // State to store search results

  const handleChange = (e) => {
    setQuery(e.target.value); // Update search query state as user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call API to search for movies using the query
    try {
      const response = await fetch(
        `https://api.example.com/search?query=${query}`
      );
      const data = await response.json();
      setResults(data.results); // Update search results state with API response
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search for movies..."
        />
        <button type="submit">Search</button>
      </form>
      {/* Display search results */}
      {results.map((movie) => (
        <MovieResult key={movie.id} movie={movie} />
      ))}
    </Header>
  );
};

export default SearchForm;
