import React, { FC } from "react";
import { IGenres } from "../../../types/homeTypes";

interface GenresProps {
  genres: IGenres[];
  setGenreId: (id: number | null) => void;
}

const Genres: FC<GenresProps> = ({ genres, setGenreId }) => {
  const handleId = (id: number) => {
    setGenreId(id);
  };
  return (
    <>
      <ul>
        <li>
          <button type="button" onClick={() => setGenreId(null)}>
            All genres
          </button>
        </li>
        {genres.map(({ id, name }) => (
          <li key={id}>
            <button type="button" onClick={() => handleId(id)}>
              {name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Genres;
