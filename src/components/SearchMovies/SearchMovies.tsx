import React from "react";

const SearchMovies: React.FC = () => {
  return (
    <form>
      <label>
        <input type="text" />
        <button type="submit">Search</button>
      </label>
    </form>
  );
};

export default SearchMovies;
