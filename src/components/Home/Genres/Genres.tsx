import React, { FC } from "react";
import { IGenres } from "../../../types/homeTypes";
import { GenresItem, GenresList } from "./Genres.styled";

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
      <GenresList>
        {genres.map(({ id, name }) => (
          <GenresItem key={id}>
            <button type="button" onClick={() => handleId(id)}>
              {name}
            </button>
          </GenresItem>
        ))}
      </GenresList>
    </>
  );
};

export default Genres;
