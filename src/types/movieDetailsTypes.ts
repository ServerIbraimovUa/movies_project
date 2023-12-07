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
  author_details: {
    avatar_path: string;
  };
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
}
