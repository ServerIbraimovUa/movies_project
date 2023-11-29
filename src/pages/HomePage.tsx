import React, { FC, useEffect, useState } from "react";
import { getAllTrending } from "../services/api";
import { Container } from "react-bootstrap";
import Error from "../components/Error/Error";
import Loading from "../components/Loading/Loading";
import HomeList from "../components/HomeList/HomeList";
import { Movies } from "../types/homeTypes";

const HomePage: FC = () => {
  const [movies, setMovies] = useState<Movies[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Функція запиту за популярними фільмами
    const details = async () => {
      try {
        const { results } = await getAllTrending();
        setMovies(results);
        setLoading(true);
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(true);
      }
    };
<<<<<<< Updated upstream
    details();
  }, []);
=======


    fetchData();
  }, [language]);



>>>>>>> Stashed changes
  return (
    <section>
      <Container>
        <h1>Popular movies of the day! </h1>
        {error && <Error />}
        {loading ? <HomeList movies={movies} /> : <Loading />}
      </Container>
    </section>
  );
};

export default HomePage;
