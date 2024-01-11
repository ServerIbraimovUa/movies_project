export interface IMovieDetails {
  id?: number;
  title?: string;
  poster_path?: string;
  vote_average?: number;
  release_date?: string;
  genres?: {
    id: number;
    name: string;
  }[];
  overview?: string;
  backdrop_path?: string;
}

export interface ICast {
  id: number;
  name: string;
  profile_path: string;
}
export interface IMovieReview {
  id: number;
  author: string;
  content: string;
<<<<<<< HEAD
  avatar_path: string;
=======
  author_details: {
    avatar_path: string;
  };
  created_at: string;
>>>>>>> 27eaf5a267dff3c0abb74e4cd1ebcc4d86b5c360
}

export interface IMovieRecommendations {
  id: number;
  title: string;
  poster_path: string;
}

export interface IMovieTrailer {
  id?: number;
  site?: string;
  key?: string;
<<<<<<< HEAD
=======
}

export interface FavoriteMovie {
  id: number;
  poster_path: string;
  vote_average: number;
  title: string;
  name: string;
  isFavorite: boolean;
>>>>>>> 27eaf5a267dff3c0abb74e4cd1ebcc4d86b5c360
}
