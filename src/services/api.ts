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

