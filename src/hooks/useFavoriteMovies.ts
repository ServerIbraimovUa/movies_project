import { useEffect, useState } from "react";
import { FavoriteMovie } from "../types/movieDetailsTypes";

interface FavoriteState {
  favorite: FavoriteMovie[];
  setFavorite: (id: number) => void;
}

export const useFavoriteMovies = (favoriteMovies: FavoriteMovie[]) => {
  const [favorite, setFavorite] = useState<FavoriteMovie[]>(favoriteMovies);

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite]);

  const removeFavoriteById = (id: number) => {
    setFavorite((prevFavorite) =>
      prevFavorite.filter((item) => item.id !== id)
    );
  };

  return { favorite, removeFavoriteById, setFavorite };
};
