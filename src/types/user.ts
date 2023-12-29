import { FavoriteMovie } from "./movieDetailsTypes";

export interface UserType {
  uid: string;
  name: string;
  theme: string;
  language: string;
  country?: string;
  sex?: string;
  favorites?: FavoriteMovie[];
  imageUrl?: string;
  isLoggedIn: boolean;
}
