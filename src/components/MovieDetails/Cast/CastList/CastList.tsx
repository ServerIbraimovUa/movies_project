import React, { FC } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { ICast } from "../../../../types/movieDetailsTypes";
import CastItem from "../CastItem/CastItem";

import { SlickContainer } from "../../../Actor/CreditsSlick/CreditsSlick.styled";

interface CastProps {
  cast: ICast[];
}

const CastList: FC<CastProps> = ({ cast }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 9,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <SlickContainer>
      <ul>
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
      </ul>
    </SlickContainer>
  );
};

export default CastList;
