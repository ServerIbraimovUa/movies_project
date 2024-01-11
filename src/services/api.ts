import axios from "axios";

const API_KEY = "653def23e19b05e32ecbb873d8b25bac";
const BASE_URL = "https://api.themoviedb.org/3";

axios.defaults.params = {
  api_key: API_KEY,
};

export const getAllTrending = async (language: string) => {
  const url = `${BASE_URL}/trending/all/day?language=${language}`;
  return (await axios.get(url)).data;
};

export const getMovieWithGenre = async (
  id: number | null,
  year: number | null
) => {
  return (
    await axios.get(
      `${BASE_URL}/discover/movie?with_genres=${id}&primary_release_year=${year}`
    )
  ).data;
};

export const searchMovies = async (query: string) => {
  return (await axios.get(`${BASE_URL}/search/movie?query=${query}`)).data;
};

export const getAllGenres = async () => {
  return (await axios.get(`${BASE_URL}/genre/movie/list`)).data;
};

export const getMovieDetails = async (id: number) => {
  return (await axios.get(`${BASE_URL}/movie/${id}`)).data;
};

export async function getMovieCast(id: number) {
  return (await axios(`${BASE_URL}/movie/${id}/credits`)).data;
}

export async function getMovieReview(id: number) {
  return (await axios(`${BASE_URL}/movie/${id}/reviews`)).data;
}

export async function getMovieRecommendations(id: number) {
  return (await axios(`${BASE_URL}/movie/${id}/similar`)).data;
}

export async function getMovieTrailer(id: number) {
  return (await axios(`${BASE_URL}/movie/${id}/videos`)).data;
}

export const getActorById = async (id: number) => {
  return (await axios.get(`${BASE_URL}/person/${id}`)).data;
};

export const getActorCredits = async (id: number) => {
  return (await axios.get(`${BASE_URL}/person/${id}/movie_credits`)).data.cast;
};
