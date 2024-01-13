import React, { FC } from "react";
import { Credits } from "../../../types/actorTypes";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Heading, SlickContainer, SlickImg } from "./CreditsSlick.styled";
import "./CreditsSlick.css";
import { Link, useLocation } from "react-router-dom";
import Img from '../../../images/defaultImg.jpg'

const BASE_IMG = "https://image.tmdb.org/t/p/w200";

interface CreditsSlickProprs {
  credits: Credits[];
}

const CreditsSlick: FC<CreditsSlickProprs> = ({ credits }) => {
  const location = useLocation();

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
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
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
      <Heading>Known for</Heading>
      <Slider {...settings}>
        {credits.map((credit) => {
          const { id, title, poster_path } = credit;
          return (
            <div key={id}>
              <Link to={`/movie/${id}`} state={{ from: location }}>                
                
                {poster_path ? (<SlickImg src={`${BASE_IMG}${poster_path}`} alt={title} />):
                 (<SlickImg src={Img} alt={title} />)
                } 
                
              </Link>
            </div>
          );
        })}
      </Slider>
    </SlickContainer>
  );
};

export default CreditsSlick;
     