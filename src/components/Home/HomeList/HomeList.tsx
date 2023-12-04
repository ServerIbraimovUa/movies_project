import React, { FC } from "react";

import HomeListItem from "../HomeListItem/HomeListItem";
import { Movies } from "../../../types/homeTypes";

interface HomeListProps {
  movies: Movies[];
}

const HomeList: FC<HomeListProps> = ({ movies }) => {
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
          />
        );
      })}
    </ul>
  );
};

export default HomeList;
