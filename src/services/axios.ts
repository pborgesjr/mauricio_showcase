import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_TEMP_UNSPLASH_URL}`;

export const apiClient = (baseURL: string = BASE_URL) =>
  axios.create({
    baseURL,
  });
