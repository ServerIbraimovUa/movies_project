import React, { FC, useEffect, useState } from "react";
import {
  getAllGenres,
  getAllTrending,
  getMovieWithGenre,
} from "../services/api";
import { Container } from "react-bootstrap";
import Error from "../components/Error/Error";
import Loading from "../components/Loading/Loading";
import { useLanguage } from "../components/Language/LanguageContext";
import HomeList from "../components/Home/HomeList/HomeList";
import { IGenres, Movies } from "../types/homeTypes";

import Sidebar from "../components/Home/Sidebar/Sidebar";

const HomePage: FC = () => {
  const { language } = useLanguage();
  const [movies, setMovies] = useState<Movies[]>([]);
  const [genres, setGenres] = useState<IGenres[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [genreId, setGenreId] = useState<number | null>(null);
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setLoading(false);
    const fetchData = async () => {
      try {
        const { genres } = await getAllGenres();
        if (genreId !== null || year !== null) {
          const data = await getMovieWithGenre(genreId, year);
          setMovies(data.results);
        } else {
          const { results } = await getAllTrending(language);
          setMovies(results);
        }

        setLoading(true);
        setGenres(genres);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    };

    fetchData();
  }, [genreId, language, year]);

  return (
    <section>
      <Container style={{ display: "flex" }}>
        {error && <Error />}
        {movies.length !== 0 ? (
          <>
            <Sidebar
              genres={genres}
              setGenreId={setGenreId}
              setYear={setYear}
            />

            {loading ? (
              <HomeList movies={movies} genres={genres} />
            ) : (
              <Loading />
            )}
          </>
        ) : (
          <Loading />
        )}
      </Container>
    </section>
  );
};

export default HomePage;
