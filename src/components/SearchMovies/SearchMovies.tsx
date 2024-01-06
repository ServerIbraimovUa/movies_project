import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchMovies: React.FC = () => {
  const [query, setQuery] = useState("");
  const [queryText, setQueryText]: any = useSearchParams();

  const updateQuery = (e: any) => {
    e.preventDefault();
    const nextParams = query !== "" ? { query } : {};
    setQueryText(nextParams);
  };

  return (
    <form onSubmit={updateQuery}>
      <label>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </label>
    </form>
  );
};

export default SearchMovies;
