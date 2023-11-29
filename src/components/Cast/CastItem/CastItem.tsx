import React, { FC } from "react";
import { ICast } from "../../../types/movieDetailsTypes";

const CastItem: FC<ICast> = ({ name, profile_path }) => {
  const BASE_IMG = "https://image.tmdb.org/t/p/w200";

  return (
    <li>
      {profile_path ? (
        <img src={`${BASE_IMG}${profile_path}`} alt={name} />
      ) : (
        <img src="" alt={name} width="200" height="300" />
      )}
      <h3>{name}</h3>
    </li>
  );
};

export default CastItem;
