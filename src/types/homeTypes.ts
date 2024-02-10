export interface Movies {
  id: number;
  title: string;
  name: string;
  poster_path: string;
  vote_average: number;
  original_title: string;
  release_date: string;
  first_air_date: string;
  overview: string;
  genre_ids: number[];
  original_language:string
}

export interface IGenres {
  id: number;
  name: string;
}
