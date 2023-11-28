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
}
