import { useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FC, useEffect, useRef, useState } from "react";

import { IMovieDetails } from "../types/movieDetailsTypes";
import { getMovieDetails } from "../services/api";
import Error from "../components/Error/Error";
import Loading from "../components/Loading/Loading";
import Cast from "../components/MovieDetails/Cast/Cast";
import Reviews from "../components/MovieDetails/Reviews/Reviews";
import Recommendations from "../components/MovieDetails/Recommendations/Recommendations";
import MovieTrailer from "../components/MovieDetails/MovieTrailer/MovieTrailer";
import UpcomingListSlick from "../components/UpcomingList/UpcomingListSlick";
import {
  BackBtnStyled,
  MovieSectionStyled,
} from "./PagesStyles/MovieDetailPage.styled";
import MovieDetails from "../components/MovieDetails/MovieDetails";

const MovieDetailsPage: FC = () => {
  const [movie, setMovie] = useState<IMovieDetails>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { t } = useTranslation();
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "/");

  useEffect(() => {
    setLoading(true);
    // Функція запиту одного фільму за id
    const getMovieById = async (id: number) => {
      try {
        const response = await getMovieDetails(id);
        setMovie(response);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    getMovieById(Number(movieId));
  }, [movieId]);

  return (
    <MovieSectionStyled className="main-container">
      {loading ? (
        <Loading />
      ) : (
        <>
          <BackBtnStyled to={backLinkLocationRef.current}>
            {t("detalies.back")}
          </BackBtnStyled>
          <UpcomingListSlick />
          <MovieDetails movie={movie} />
          <MovieTrailer />
          <Cast />
          <Recommendations />
          <Reviews />
        </>
      )}
      {error && <Error />}
    </MovieSectionStyled>
  );
};

export default MovieDetailsPage;
