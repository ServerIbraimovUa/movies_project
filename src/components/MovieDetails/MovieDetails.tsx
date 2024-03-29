import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { IMovieDetails } from "../../types/movieDetailsTypes";
import { MovieCardStyled } from "./MovieDetails.styled";

const BASE_IMG = "https://image.tmdb.org/t/p/w300";

export interface IMovieDetailsProps {
  movie: IMovieDetails;
}

const MovieDetails: FC<IMovieDetailsProps> = ({ movie }) => {
  const { t } = useTranslation();

  const {
    title,
    poster_path,

    release_date,
    genres,
    overview,
  } = movie;

  return (
    <MovieCardStyled>
      {poster_path && (
        <img
          src={`${BASE_IMG}${poster_path}`}
          alt={title}
          className="movie-img"
        />
      )}
      <div className="movie-info">
        <h1 className="movie-title">{title}</h1>
        <p className="subtitle">
          {t("movie.year")}
          <span className="movie-text">{release_date?.substring(0, 4)} </span>
        </p>

        <p className="subtitle">
          {t("movie.genres")}
          <span className="movie-text">
            {genres &&
              genres
                .slice(0, 1)
                .map(({ id, name }) => <span key={id}>{name}</span>)}
          </span>
        </p>
      </div>
      <div className="description">
        <p className="subtitle">{t("movie.description")}</p>
        <p className="movie-text ">{overview}</p>
      </div>
    </MovieCardStyled>
  );
};

export default MovieDetails;
