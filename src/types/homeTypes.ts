export interface Movies {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  original_title: string;
  release_date: string;
  overview: string;
  genre_ids: number[];
}

export interface IGenres {
  id: number;
  name: string;
}
