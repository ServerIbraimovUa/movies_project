import React, { FC } from "react";
import { IMovieDetailsProps } from "../MovieDetails";

const BASE_IMG = "https://image.tmdb.org/t/p/w300";

const MovieDetailsItem: FC<IMovieDetailsProps> = ({ movie }) => {
  const { title, poster_path, vote_average, release_date, genres, overview } =
    movie;

  return (
    <>
      <img src={`${BASE_IMG}${poster_path}`} alt={title} />
      <h1>{title}</h1>
      <p>{vote_average}</p>
      <h2>Year: </h2>
      <span>{release_date}</span>

      <h2>Genres:</h2>
      <span>
        <ul>
          {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
        </ul>
      </span>

      <h2>Description:</h2>
      <p>{overview}</p>
    </>
  );
};

export default MovieDetailsItem;
