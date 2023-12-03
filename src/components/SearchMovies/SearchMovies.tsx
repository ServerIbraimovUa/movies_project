import React from "react";
import { useTranslation } from 'react-i18next';

const SearchMovies: React.FC = () => {
  const { t } = useTranslation();
  return (
    <form>
      <label>
        <input type="text" />
        <button type="submit">{t('search.search')}</button>
      </label>
    </form>
  );
};

export default SearchMovies;
