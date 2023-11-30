import React, { FC } from "react";
import { ICast } from "../../../types/movieDetailsTypes";
import { Link } from "react-router-dom";

const CastItem: FC<ICast> = ({ name, profile_path, id }) => {
  const BASE_IMG = "https://image.tmdb.org/t/p/w200";

  return (
    <li>
      <Link to={`/actor/${id}`}>
        {profile_path ? (
          <img src={`${BASE_IMG}${profile_path}`} alt={name} />
        ) : (
          <img src="" alt={name} width="200" height="300" />
        )}
      </Link>
      <h3>{name}</h3>
    </li>
  );
};

export default CastItem;
