import { FC } from "react";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { Movies } from "../../../types/homeTypes";

const BASE_IMG = "https://image.tmdb.org/t/p/w200";

interface HomeListItemProps extends Movies {
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
  isFavorite: boolean;
}

const HomeListItem: FC<HomeListItemProps> = ({
  title,
  poster_path,
  id,
  vote_average,
  original_title,
  overview,
  genre_ids,
  release_date,
  name,
  first_air_date,
  addFavorite,
  removeFavorite,
  isFavorite,
}) => {
  const location = useLocation();

  return (
    <li style={{ display: "flex" }}>
      <Link to={`/movie/${id}`} state={{ from: location }}>
        <div className="image-wrapper">
          <img src={`${BASE_IMG}${poster_path}`} alt={title} />
          <span>{vote_average}</span>
        </div>
      </Link>
      <div>
        <h2>{name || title}</h2>
        <p>
          Year:{" "}
          {(release_date || first_air_date) &&
            (release_date?.substring(0, 4) || first_air_date?.substring(0, 4))}
        </p>
        <p>Genre: </p>
        <p>Description: </p>
        <p>{overview}</p>
      </div>
      <div>
        <Link to={`/movie/${id}`} state={{ from: location }}>
          Watch
        </Link>
        {!isFavorite ? (
          <button type="button" onClick={() => addFavorite(id)}>
            <MdOutlineFavoriteBorder />
          </button>
        ) : (
          <button type="button" onClick={() => removeFavorite(id)}>
            <MdOutlineFavorite />
          </button>
        )}
      </div>
    </li>
  );
};

export default HomeListItem;
