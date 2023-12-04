import React, { FC, useEffect, useState } from "react";

import HomeListItem from "../HomeListItem/HomeListItem";
import { Movies } from "../../../types/homeTypes";

interface HomeListProps {
  movies: Movies[];
}

const HomeList: FC<HomeListProps> = ({ movies }) => {
  const storedFavorite = localStorage.getItem("favorite");
  const initialFavorite: Movies[] = storedFavorite
    ? JSON.parse(storedFavorite)
    : [];

  const [favorite, setFavorite] = useState<Movies[]>(initialFavorite);

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite]);

  const isFavorite = (id: number) => favorite.some((item) => item.id === id);

  const addFavorite = (id: number) => {
    const isAlreadyFavorite = favorite.some((item) => item.id === id);

    if (!isAlreadyFavorite) {
      const movieToAdd = movies.find((movie) => movie.id === id);
      if (movieToAdd) {
        setFavorite((prevFavorite) => [...prevFavorite, movieToAdd]);
      }
    }
  };

  const removeFavorite = (id: number) => {
    setFavorite((prevFavorite) =>
      prevFavorite.filter((item) => item.id !== id)
    );
  };
  return (
    <ul>
      {movies.map((movie) => {
        const {
          title,
          name,
          id,
          vote_average,
          poster_path,
          overview,
          original_title,
          genre_ids,
          release_date,
          first_air_date,
        } = movie;
        return (
          <HomeListItem
            key={id}
            title={title}
            name={name}
            vote_average={vote_average}
            poster_path={poster_path}
            id={id}
            original_title={original_title}
            overview={overview}
            genre_ids={genre_ids}
            release_date={release_date}
            first_air_date={first_air_date}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
            isFavorite={isFavorite(movie.id)}
          />
        );
      })}
    </ul>
  );
};

export default HomeList;
