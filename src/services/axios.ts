import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_TEMP_UNSPLASH_URL}${
  import.meta.env.VITE_UNSPLASH_ACCESS_KEY
}`;

export const apiClient = (baseURL: string = BASE_URL) =>
  axios.create({
    baseURL,
  });
