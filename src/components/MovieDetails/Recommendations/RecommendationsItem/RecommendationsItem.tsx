import { FC } from "react";
import { IMovieRecommendations } from "../../../../types/movieDetailsTypes";
import { Link } from "react-router-dom";
import {
  StyledClickImg,
  StyledClickTitle,
} from "../../Cast/CastItem/CastItem.styled";
import Img from "../../../../images/defaultImg.jpg";

const RecommendationsItem: FC<IMovieRecommendations> = ({
  id,
  title,
  poster_path,
}) => {
  const BASE_IMG = "https://image.tmdb.org/t/p/w200";

  return (
    <>
      <Link to={`/movie/${id}`}>
        {poster_path ? (
          <StyledClickImg src={`${BASE_IMG}${poster_path}`} alt={title} />
        ) : (
          <StyledClickImg src={Img} alt={title} />
        )}

        <StyledClickTitle>{title}</StyledClickTitle>
      </Link>
    </>
  );
};

export default RecommendationsItem;
