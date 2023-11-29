import React, { FC } from "react";
import { IMovieRecommendations } from "../../../types/movieDetailsTypes";

const RecommendationsItem: FC<IMovieRecommendations> = ({
  title,
  poster_path,
}) => {
  const BASE_IMG = "https://image.tmdb.org/t/p/w200";

  return (
    <li>
      {poster_path ? (
        <img src={`${BASE_IMG}${poster_path}`} alt={title} />
      ) : (
        <img src="" alt={title} />
      )}
      <h3>{title}</h3>
    </li>
  );
};

export default RecommendationsItem;
