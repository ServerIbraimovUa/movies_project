import React, { FC } from "react";
import { Credits } from "../../../types/actorTypes";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HeadingDesk, SlickBodyDesk, SlickContainer, SlickImg } from "./CreditsSlick.styled";
import "./CreditsSlick.css";
import { Link, useLocation } from "react-router-dom";
import Img from '../../../images/defaultImg.jpg'
import { useTranslation } from "react-i18next";

const BASE_IMG = "https://image.tmdb.org/t/p/w200";

interface CreditsSlickProprs {
  credits: Credits[];
}

const CreditsSlickDesk: FC<CreditsSlickProprs> = ({ credits }) => {
  const location = useLocation();
  const { t } = useTranslation();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 0,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <SlickContainer>
      <HeadingDesk>{t("actor.know")}</HeadingDesk>
      <Slider {...settings}>
        {credits.map((credit) => {
          const { id, title, poster_path } = credit;
          return (
            <SlickBodyDesk key={id}>
              <Link to={`/movie/${id}`} state={{ from: location }}>                
              {poster_path ? (<SlickImg src={`${BASE_IMG}${poster_path}`} alt={title} />):
                 (<SlickImg src={Img} alt={title} />)
              } 
                
              </Link>
            </SlickBodyDesk>
          );
        })}
      </Slider>
    </SlickContainer>
  );
};

export default CreditsSlickDesk;
     