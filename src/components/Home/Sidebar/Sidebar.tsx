import React, { FC } from "react";
import Genres from "../Genres/Genres";
import Years from "../Years/Years";
import { IGenres } from "../../../types/homeTypes";

interface ISidebarProps {
  genres: IGenres[];
  setGenreId: (id: number | null) => void;
  setYear: (id: number) => void;
}

const Sidebar: FC<ISidebarProps> = ({ genres, setGenreId, setYear }) => {
  return (
    <div>
      <div>
        <p>Genre</p>
        <Genres genres={genres} setGenreId={setGenreId} />
        <p>Year</p>
        <Years setYear={setYear} />
      </div>
      ;
    </div>
  );
};

export default Sidebar;
