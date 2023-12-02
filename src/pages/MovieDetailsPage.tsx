import React, { FC, useEffect, useState } from "react";
import { IMovieDetails } from "../types/movieDetailsTypes";
import { getMovieDetails } from "../services/api";
import { useParams } from "react-router-dom";
import Error from "../components/Error/Error";
import Loading from "../components/Loading/Loading";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import Cast from "../components/Cast/Cast";
import Reviews from "../components/Reviews/Reviews";
import Recommendations from "../components/Recommendations/Recommendations";
import MovieTrailer from "../MovieTrailer/MovieTrailer";
import { Container } from "react-bootstrap";

const MovieDetailsPage: FC = () => {
  const [movie, setMovie] = useState<IMovieDetails>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();

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
    <section>
      <Container>
        {error && <Error />}
        {loading ? (
          <Loading />
        ) : (
          <>
            <MovieDetails movie={movie} />
            <MovieTrailer />
            <Cast />
            <Reviews />
            <Recommendations />
          </>
        )}
      </Container>
    </section>
  );
};

export default MovieDetailsPage;
