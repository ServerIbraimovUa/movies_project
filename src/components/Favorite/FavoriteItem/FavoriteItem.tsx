import React, { FC, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Movies } from "../../../types/homeTypes";
const BASE_IMG = "https://image.tmdb.org/t/p/w200";

const FavoriteItem: FC<Partial<Movies>> = ({
  poster_path,
  vote_average,
  title,
  id,
}) => {
  const location = useLocation();
  return (
    <Link to={`/movies/${id}`} state={{ from: location }}>
      <img src={`${BASE_IMG}${poster_path}`} alt={title} />
      <p>{vote_average}</p>
      <p>favorite</p>
    </Link>
  );
};

export default FavoriteItem;
