import { FC } from "react";
import { ICast } from "../../../../types/movieDetailsTypes";
import { Link } from "react-router-dom";
import { StyledClickImg, StyledClickTitle } from "./CastItem.styled";
import Img from "../../../../images/defaultImg.jpg";

const CastItem: FC<ICast> = ({ name, profile_path, id }) => {
  const BASE_IMG = "https://image.tmdb.org/t/p/w200";

  return (
    <>
      <Link to={`/actor/${id}`}>
        {profile_path ? (
          <StyledClickImg src={`${BASE_IMG}${profile_path}`} alt={name} />
        ) : (
          <StyledClickImg src={Img} alt={name} width="190" height="250" />
        )}
      </Link>
      <StyledClickTitle>{name}</StyledClickTitle>
    </>
  );
};

export default CastItem;
