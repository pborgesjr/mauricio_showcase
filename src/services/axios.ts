import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}`;

export const apiClient = (baseURL: string = BASE_URL) =>
  axios.create({
    baseURL,
  });
