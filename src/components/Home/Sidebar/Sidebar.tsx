import React, { FC } from "react";
import Genres from "../Genres/Genres";
import Years from "../Years/Years";
import { IGenres, Movies } from "../../../types/homeTypes";
import { getAllTrending } from "../../../services/api";
import { useSearchParams } from "react-router-dom";

interface ISidebarProps {
  genres: IGenres[];
  setGenreId: (id: number | null) => void;
  setYear: (id: number | null) => void;
  setMovies: (results: Movies[]) => void;
}

const Sidebar: FC<ISidebarProps> = ({
  genres,
  setGenreId,
  setYear,
  setMovies,
}) => {
  const [queryText, setQueryText]: any = useSearchParams();
  const reset = async () => {
    if (queryText.size) {
      const { results } = await getAllTrending();
      setMovies(results);
    }
    setGenreId(null);
    setYear(null);
    setQueryText("");
  };
  return (
    <div>
      <div>
        <p>Genres</p>
        <button type="button" onClick={reset}>
          Reset all
        </button>
        <Genres genres={genres} setGenreId={setGenreId} />
        <p>Year</p>
        <Years setYear={setYear} />
      </div>
    </div>
  );
};

export default Sidebar;
