import React, { FC, useEffect, useState } from "react";
import {Movies} from '../types/homeTypes';
import FavoriteList from "../components/Favorite/FavoriteList";


const cards: Movies[] = [{
  id: 10,
  title: 'Movie',
  poster_path: "/movies/57243",
  vote_average: 7.1,
  original_title: 'Movie',
  release_date: "23.12.2015",
  overview: "Description",
  genre_ids: [1, 2],
},
   { id: 11,
  title: 'Video',
  poster_path: "/movies/57243",
  vote_average: 7.1,
  original_title: 'Movie',
  release_date: "23.12.2015",
  overview: "Description",
  genre_ids: [1, 2],
},
];

const FavoritePage: FC = () => {
  return <FavoriteList cards={cards} />;
};

export default FavoritePage;
