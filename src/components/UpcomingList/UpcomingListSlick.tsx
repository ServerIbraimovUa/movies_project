import React, { FC, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ContainerSlick, SlickImg, SlickImgMob } from "./UpcomingListSlick.styled";
import "./UpcomingListSlick.css";
import { Link, useLocation } from "react-router-dom";
import Img from '../../images/defaultImg.jpg'
import { UpcomingList } from "../../types/upcomingList";
import { getUpcomingList } from "../../services/api";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import {useMediaQuery} from 'react-responsive';


const BASE_IMG = "https://image.tmdb.org/t/p/w200";

const UpcomingListSlick: React.FC = () => {
  const location = useLocation();
  const [movies, setMovies] = useState<UpcomingList[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const isTabletOrMobile = useMediaQuery({query:'(max-width:1439px)'});

  useEffect(() => {
    const details = async () => {
      try {
        const results = await getUpcomingList();
        setMovies(results);
        setLoading(true);
    
      } catch (error) {
    
        setError(true);
        setLoading(true);
      }
    };
    details();
    }, [])

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 9,
          slidesToScroll: 1,
          initialSlide: 3,
        },
      },
       {
        breakpoint: 1023,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 429,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 324,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    
      <ContainerSlick>
        
      <Slider {...settings}>
        {loading ? (
            movies.map((movie) => {
                const { id, title, poster_path } = movie;
                return (
                  <div key={id}>
                    <Link to={`/movie/${id}`} state={{ from: location }}>
                    {isTabletOrMobile ? (
                      poster_path ? (<SlickImgMob src={`${BASE_IMG}${poster_path}`} alt={title} />):
                      (<SlickImgMob src={Img} alt={title} />)
                    ):(
                      poster_path ? (<SlickImg src={`${BASE_IMG}${poster_path}`} alt={title} />):
                      (<SlickImg src={Img} alt={title} />)
                    )}                    
                      
                      
                    </Link>
                  </div>
                );
              })
        ): (
            <Loading />
          )}
  
          {error && <Error />}
        
      </Slider>
   
      </ContainerSlick>
  );
};

export default UpcomingListSlick;
