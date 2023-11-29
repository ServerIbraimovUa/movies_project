import axios from "axios";

const API_KEY = "653def23e19b05e32ecbb873d8b25bac";
const BASE_URL = "https://api.themoviedb.org/3";



axios.defaults.params = {
  api_key: API_KEY,
};

export const getAllTrending = async () => {
  return (await axios.get(`${BASE_URL}/trending/all/day`)).data;
};
<<<<<<< Updated upstream
=======


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

export const getActorById =async (id:number) => {
  return (await axios.get(`${BASE_URL}/person/${id}`)).data;
}

export const getActorCredits =async (id:number) => {
  return (await axios.get(`${BASE_URL}/person/${id}/movie_credits`)).data.cast;
}

>>>>>>> Stashed changes
