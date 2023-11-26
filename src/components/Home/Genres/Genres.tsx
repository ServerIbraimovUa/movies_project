import React, { FC } from "react";
import { IGenres } from "../../../types/homeTypes";
import { Link } from "react-router-dom";

interface GenresProps {
  genres: IGenres[];
}

const Genres: FC<GenresProps> = ({ genres }) => {
  return (
    <>
      <ul>
        {genres.map(({ id, name }) => (
          <li key={id}>
            <Link to={"/"}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Genres;
