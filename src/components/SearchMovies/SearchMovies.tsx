import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SearchButton, SearchForm, SearchInput } from "./SearchMovies.styled";
import Icon from "../Icon/Icon";

const SearchMovies: React.FC = () => {
  const [query, setQuery] = useState("");
  const [queryText, setQueryText]: any = useSearchParams();
  const { t } = useTranslation();
  const updateQuery = (e: any) => {
    e.preventDefault();
    const nextParams = query !== "" ? { query } : {};
    setQueryText(nextParams);
    setQuery("");
  };

  return (
    <SearchForm onSubmit={updateQuery}>
      <label>
        <SearchInput
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <SearchButton type="submit">
          <Icon className="search-icon" id="search" />
        </SearchButton>
      </label>
    </SearchForm>
  );
};

export default SearchMovies;
