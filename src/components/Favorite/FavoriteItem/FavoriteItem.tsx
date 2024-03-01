import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { FavoriteMovie } from "../../../types/movieDetailsTypes";
import { StyledLi } from "./FavoriteItem.styled";
import { IconBorder } from "../../Home/HomeListItem/HomeListItem.styled";
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
  console.log(favoriteMovie);
  return (
    <StyledLi>
      <Link to={`/movie/${id}`} state={{ from: location }}>
        <div className="img-wrapper">
          <img src={`${BASE_IMG}${poster_path}`} alt={title ? title : name} />
        </div>

        <h2>{title ? title : name}</h2>
        <p>{vote_average}</p>
      </Link>
      <div className="wrapper-watch">
        <a className="link" href="#">
          Watch
        </a>
        <button type="button" onClick={() => removeFavoriteById(id)}>
          <IconBorder />
        </button>
      </div>
    </StyledLi>
  );
};

export default FavoriteItem;
