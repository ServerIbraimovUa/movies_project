import React, { FC } from "react";
import { IMovieRecommendations } from "../../../types/movieDetailsTypes";
import { Link } from "react-router-dom";
import {
  StyledClickImg,
  StyledClickTitle,
} from "../../Cast/CastItem/CastItem.styled";

const RecommendationsItem: FC<IMovieRecommendations> = ({
  id,
  title,
  poster_path,
}) => {
  const BASE_IMG = "https://image.tmdb.org/t/p/w200";

  return (
    <li>
      <Link to={`/movie/${id}`}>
        {poster_path ? (
          <StyledClickImg src={`${BASE_IMG}${poster_path}`} alt={title} />
        ) : (
          <StyledClickImg src="" alt={title} />
        )}

        <StyledClickTitle>{title}</StyledClickTitle>
      </Link>
    </li>
  );
};

export default RecommendationsItem;
