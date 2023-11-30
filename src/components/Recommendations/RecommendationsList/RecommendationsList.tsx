import React, { FC } from "react";
import { IMovieRecommendations } from "../../../types/movieDetailsTypes";
import RecommendationsItem from "../RecommendationsItem/RecommendationsItem";
// import { StyledRecommendationsList } from "./RecommendationsList.styled";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./RecommendationsClick.css";
import { SlickContainer } from "../../Actor/CreditsSlick/CreditsSlick.styled";
interface RecommendationsProps {
  recommendations: IMovieRecommendations[];
}

const RecommendationsList: FC<RecommendationsProps> = ({ recommendations }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 379,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <SlickContainer>
      <Slider {...settings}>
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
      </Slider>
    </SlickContainer>
  );
};

export default RecommendationsList;
