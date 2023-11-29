import React, { FC, useEffect, useState } from "react";
import { getAllGenres, getAllTrending } from "../services/api";
import { Container } from "react-bootstrap";
import Error from "../components/Error/Error";
import Loading from "../components/Loading/Loading";

import { useLanguage } from "../Language/LanguageContext";

import HomeList from "../components/Home/HomeList/HomeList";
import { IGenres, Movies } from "../types/homeTypes";
import Genres from "../components/Home/Genres/Genres";


const HomePage: FC = () => {
  const { language } = useLanguage();
  const [movies, setMovies] = useState<Movies[]>([]);
  const [genres, setGenres] = useState<IGenres[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const { results } = await getAllTrending(language);
    // Функція запиту за популярними фільмами
        const { genres } = await getAllGenres();
        setGenres(genres);

        setMovies(results);
        setLoading(true);
      } catch (error) {
        console.error(error);
        setError(true);
        setLoading(true);
      }
    };

    fetchData();
  }, [language]);
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
