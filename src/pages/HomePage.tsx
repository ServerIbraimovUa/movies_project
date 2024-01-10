import React, { FC, useEffect, useState } from "react";
import {
  getAllGenres,
  getAllTrending,
  getMovieWithGenre,
  searchMovies,
} from "../services/api";
import { Container } from "react-bootstrap";
import Error from "../components/Error/Error";
import Loading from "../components/Loading/Loading";
import { useLanguage } from "../components/Language/LanguageContext";
import HomeList from "../components/Home/HomeList/HomeList";
import { IGenres, Movies } from "../types/homeTypes";

import Sidebar from "../components/Home/Sidebar/Sidebar";
import { useSearchParams } from "react-router-dom";

const HomePage: FC = () => {
  const { language } = useLanguage();
  const [movies, setMovies] = useState<Movies[]>([]);
  const [genres, setGenres] = useState<IGenres[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const storedGenre = sessionStorage.getItem("genre");
  const initialGenre = storedGenre ? JSON.parse(storedGenre) : null;
  const storedYear = sessionStorage.getItem("year");
  const initialYear = storedYear ? JSON.parse(storedYear) : null;
  const [genreId, setGenreId] = useState<number | null>(initialGenre);
  const [year, setYear] = useState<number | null>(initialYear);

  const [queryText]: any = useSearchParams();
  const queryParam = queryText.get("query") ?? "";

  useEffect(() => {
    const searchMoviesForQuery = async (q: string) => {
      if (!queryParam) {
        return;
      }

      try {
        const { results } = await searchMovies(q);
        setMovies(results);
      } catch (error) {}
    };
    searchMoviesForQuery(queryParam);
  }, [queryParam]);

  useEffect(() => {
    const setToLocalStorage = (genre: any, year: any) => {
      sessionStorage.setItem("genre", JSON.stringify(genre));
      sessionStorage.setItem("year", JSON.stringify(year));
    };

    setToLocalStorage(genreId, year);
  }, [genreId, year]);

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
              setMovies={setMovies}
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
