import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SearchMovies: React.FC = () => {
  const { t } = useTranslation();
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
        <button type="submit">{t("searchmovies.search")}Search</button>

      </label>
    </form>
  );
};

export default SearchMovies;
