import { FavoriteMovie } from './movieDetailsTypes';

export interface UserType {
  uid: string;
  username: string;
  theme: 'light' | 'dark';
  language: 'ua' | 'en';
  country?: { value: string; label: string };
  sex?: string;
  favorites?: FavoriteMovie[];
  imageUrl?: string;
  socials?: {
    [key: string]: string;
  };
}
