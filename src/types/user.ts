import { FavoriteMovie } from './movieDetailsTypes';

export interface UserType {
  uid: string;
  username: string;
  theme: 'light' | 'dark';
  language: 'ua' | 'en';
  country?: object;
  sex?: string;
  favorites?: FavoriteMovie[];
  imageUrl?: string;
  socials?: object;
}
