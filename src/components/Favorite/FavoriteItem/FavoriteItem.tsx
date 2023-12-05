import  { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { Movies } from "../../../types/homeTypes";
const BASE_IMG = "https://image.tmdb.org/t/p/w200";

interface FavoriteItemProps{
  card: Movies;
}

const FavoriteItem: FC<FavoriteItemProps> = ({card}) => {
  const { id, poster_path, vote_average, title } = card;
  const location = useLocation();
  return (
    <li>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <img src={`${BASE_IMG}${poster_path}`} alt={title} />
        <p>{vote_average}</p>
        <p>favorite</p>
      </Link>
    </li>
  );
};

export default FavoriteItem;
