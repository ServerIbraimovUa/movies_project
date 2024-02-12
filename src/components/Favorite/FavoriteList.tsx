import  { FC } from "react";
import FavoriteItem from "./FavoriteItem/FavoriteItem";

import { useFavoriteMovies } from "../../hooks/useFavoriteMovies";
import { FavoriteMovie } from "../../types/movieDetailsTypes";
import { StyledUl } from "./FavoriteList.styled";


const FavoriteList: FC = () => {
  const storedFavorite = localStorage.getItem("favorite");
  const initialFavorite: FavoriteMovie[] = storedFavorite
    ? JSON.parse(storedFavorite)
    : [];

  const { favorite, removeFavoriteById } = useFavoriteMovies(initialFavorite);
  return (
    <StyledUl>
      {favorite.map((favoriteMovie: FavoriteMovie) => (
        <FavoriteItem
          key={favoriteMovie.id}
          favoriteMovie={favoriteMovie}
          removeFavoriteById={removeFavoriteById}
        />
      ))}
    </StyledUl>
  );
};

export default FavoriteList;
