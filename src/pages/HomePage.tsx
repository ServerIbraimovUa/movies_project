import React, { FC, useEffect, useState } from "react";
import { getAllTrending } from "../services/api";
import { Container } from "react-bootstrap";
import Error from "../components/Error/Error";
import Loading from "../components/Loading/Loading";
import HomeList from "../components/HomeList/HomeList";
import { Movies } from "../types/homeTypes";
import { useLanguage } from "../components/Language/LanguageContext";

const HomePage: FC = () => {
  const { language } = useLanguage();
  const [movies, setMovies] = useState<Movies[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { results } = await getAllTrending(language);
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
      <Container>
        <h1>Популярні фільми дня!</h1>
        {error && <Error />}
        {loading ? <HomeList movies={movies} /> : <Loading />}
      </Container>
    </section>
  );
};

export default HomePage;
