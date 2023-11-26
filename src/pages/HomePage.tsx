import React, { FC, useEffect, useState } from "react";
import { getAllGenres, getAllTrending } from "../services/api";
import { Container } from "react-bootstrap";
import Error from "../components/Error/Error";
import Loading from "../components/Loading/Loading";
import HomeList from "../components/Home/HomeList/HomeList";
import { IGenres, Movies } from "../types/homeTypes";
import Genres from "../components/Home/Genres/Genres";

const HomePage: FC = () => {
  const [movies, setMovies] = useState<Movies[]>([]);
  const [genres, setGenres] = useState<IGenres[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Функція запиту за популярними фільмами
    const getMoviesDetails = async () => {
      try {
        const { results } = await getAllTrending();
        const { genres } = await getAllGenres();
        setGenres(genres);
        setMovies(results);
        setLoading(true);
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(true);
      }
    };
    getMoviesDetails();
  }, []);
  return (
    <section>
      <Container style={{ display: "flex" }}>
        {error && <Error />}
        {loading ? (
          <>
            <Genres genres={genres} />
            <HomeList movies={movies} />
          </>
        ) : (
          <Loading />
        )}
      </Container>
    </section>
  );
};

export default HomePage;
