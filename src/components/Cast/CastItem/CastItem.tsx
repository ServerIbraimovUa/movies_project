import React, { FC } from "react";
import { ICast } from "../../../types/movieDetailsTypes";
import { Link } from "react-router-dom";
import { StyledClickImg, StyledClickTitle } from "./CastItem.styled";

const CastItem: FC<ICast> = ({ name, profile_path, id }) => {
  const BASE_IMG = "https://image.tmdb.org/t/p/w200";

  return (
    <li>
      <Link to={`/actor/${id}`}>
        {profile_path ? (
          <StyledClickImg src={`${BASE_IMG}${profile_path}`} alt={name} />
        ) : (
          <StyledClickImg src="" alt={name} width="190" height="250" />
        )}
      </Link>
      <StyledClickTitle>{name}</StyledClickTitle>
    </li>
  );
};

export default CastItem;
