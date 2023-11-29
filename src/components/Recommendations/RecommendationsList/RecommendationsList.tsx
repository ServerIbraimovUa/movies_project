import React, { FC } from "react";
import { IMovieRecommendations } from "../../../types/movieDetailsTypes";
import RecommendationsItem from "../RecommendationsItem/RecommendationsItem";
import { StyledRecommendationsList } from "./RecommendationsList.styled";

interface RecommendationsProps {
  recommendations: IMovieRecommendations[];
}

const RecommendationsList: FC<RecommendationsProps> = ({ recommendations }) => {
  return (
    <StyledRecommendationsList>
      {recommendations &&
        recommendations.map(({ id, poster_path, title }) => {
          return (
            <RecommendationsItem
              key={id}
              title={title}
              id={id}
              poster_path={poster_path}
            />
          );
        })}
    </StyledRecommendationsList>
  );
};

export default RecommendationsList;
