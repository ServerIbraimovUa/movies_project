import  { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { Movies } from "../../../types/homeTypes";
import { MdOutlineFavorite } from "react-icons/md";
import { FavoriteMovie } from "../../../types/movieDetailsTypes";
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
    <li>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <img src={`${BASE_IMG}${poster_path}`} alt={title ? title : name} />
        <p>{title ? title : name}</p>
        <p>{vote_average}</p>
      </Link>
      <button type="button" onClick={() => removeFavoriteById(id)}>
        <MdOutlineFavorite />
      </button>
    </li>
  );
};

export default FavoriteItem;
