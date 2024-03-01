import { FC } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FavoriteMovie } from "../../../types/movieDetailsTypes";
import { Icon, StyledLi } from "./FavoriteItem.styled";

import StarRating from "../../Stars/Stars";
const BASE_IMG = "https://image.tmdb.org/t/p/w200";

interface FavoriteItemProps {
  favoriteMovie: FavoriteMovie;
  removeFavoriteById: (id: number) => void;
}

const FavoriteItem: FC<FavoriteItemProps> = ({
  favoriteMovie,
  removeFavoriteById,
}) => {
  const { id, poster_path, vote_average, title, name } = favoriteMovie;
  const location = useLocation();

  return (
    <StyledLi>
      <Link to={`/movie/${id}`} state={{ from: location }}>
        <div className="img-wrapper">
          <img src={`${BASE_IMG}${poster_path}`} alt={title ? title : name} />
        </div>
        <h2>{title ? title : name}</h2>
        <div className="star-wrapper">
          <StarRating rating={vote_average} />
        </div>
      </Link>
      <div className="wrapper-watch">
        <NavLink to={`/movie/${id}`} className="link" >
          Watch
        </NavLink>
        <button type="button" onClick={() => removeFavoriteById(id)}>
          <Icon />
        </button>
      </div>
    </StyledLi>
  );
};

export default FavoriteItem;
