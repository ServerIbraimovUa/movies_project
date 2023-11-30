import React, { FC } from "react";
import { ICast } from "../../../types/movieDetailsTypes";
import CastItem from "../CastItem/CastItem";
// import { StyledCastList } from "./CastList.styled";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CastClick.css";
import { SlickContainer } from "../../Actor/CreditsSlick/CreditsSlick.styled";

interface CastProps {
  cast: ICast[];
}

const CastList: FC<CastProps> = ({ cast }) => {
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
        {cast &&
          cast.map(({ id, name, profile_path }) => {
            return (
              <CastItem
                key={id}
                id={id}
                name={name}
                profile_path={profile_path}
              />
            );
          })}
      </Slider>
    </SlickContainer>
  );
};

export default CastList;
