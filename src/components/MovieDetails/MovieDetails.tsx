import React, { FC } from "react";
import { IMovieDetails } from "../../types/movieDetailsTypes";
import MovieDetailsItem from "./MovieDetailsItem/MovieDetailsItem";

export interface IMovieDetailsProps {
  movie: IMovieDetails;
}

const MovieDetails: FC<IMovieDetailsProps> = ({ movie }) => {
  return (
    <>
      <MovieDetailsItem movie={movie} />
    </>
  );
};

export default MovieDetails;
