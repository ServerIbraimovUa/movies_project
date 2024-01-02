import React, { FC } from "react";
import Genres from "../Genres/Genres";
import Years from "../Years/Years";
import { IGenres } from "../../../types/homeTypes";

interface ISidebarProps {
  genres: IGenres[];
  setGenreId: (id: number | null) => void;
  setYear: (id: number | null) => void;
}

const Sidebar: FC<ISidebarProps> = ({ genres, setGenreId, setYear }) => {
  const reset = () => {
    setGenreId(null);
    setYear(null);
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
