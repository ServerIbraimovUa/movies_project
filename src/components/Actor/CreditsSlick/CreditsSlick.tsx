import React, { FC, useState } from "react";
import { Credits } from "../../../types/actorTypes";
import { Button, Card, Image, ListGroup } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlickContainer, SlickImg } from "./CreditsSlick.styled";
import "./CreditsSlick.css";
import { Link, useLocation } from "react-router-dom";

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
    slidesToShow: 9,
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
      <h2>Known for</h2>
      <Slider {...settings}>
        {credits.map((credit) => {
          const { id, title, vote_average, poster_path, release_date } = credit;
          return (
            <div key={id}>
              <Link to={`/movie/${id}`} state={{ from: location }}>
                <SlickImg src={`${BASE_IMG}${poster_path}`} alt={title} />
              </Link>
            </div>
          );
        })}
      </Slider>
    </SlickContainer>
  );
};

export default CreditsSlick;
