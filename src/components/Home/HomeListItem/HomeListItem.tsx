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
}) => {
  const location = useLocation();
  return (
    <li style={{ display: "flex" }}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <div>
          <img src={`${BASE_IMG}${poster_path}`} alt={title} />
          <span>{vote_average}</span>
        </div>
      </Link>
      <div>
        <p>Release data: {release_date}</p>
        {title && original_title && title.substring(0, 20)}
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
      </div>
    </li>
  );
};

export default HomeListItem;
