import React, { FC } from "react";
import { IMovieRecommendations } from "../../../types/movieDetailsTypes";
import { Link } from "react-router-dom";

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
          <img src={`${BASE_IMG}${poster_path}`} alt={title} />
        ) : (
          <img src="" alt={title} />
        )}

        <h3>{title}</h3>
      </Link>
    </li>
  );
};

export default RecommendationsItem;
