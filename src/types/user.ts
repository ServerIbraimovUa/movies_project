import { FavoriteMovie } from "./movieDetailsTypes";

export interface UserType {
  uid: string;
  name: string;
  theme: 'light' | 'dark';
  language: 'ua' | 'en';
  country?: string;
  sex?: string;
  favorites?: FavoriteMovie[];
  imageUrl?: string;
}
