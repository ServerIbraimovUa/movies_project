import { FC } from "react";

import { Link, useLocation } from "react-router-dom";
import { Movies } from "../../../types/homeTypes";

const BASE_IMG = "https://image.tmdb.org/t/p/w200";

interface HomeListItemProps extends Movies {}

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
}) => {
  const location = useLocation();

  return (
    <li style={{ display: "flex" }}>
      <Link to={`/movie/${id}`} state={{ from: location }}>
        <div>
          <img src={`${BASE_IMG}${poster_path}`} alt={title} />
          <span>{vote_average}</span>
        </div>
      </Link>
      <div>
        <h2>{name || (title && title.substring(0, 20))}</h2>
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
        <button type="button">Watch</button>
        <button type="button">Add Favorite</button>
      </div>
    </li>
  );
};

export default HomeListItem;
