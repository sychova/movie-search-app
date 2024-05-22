import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.TMDB_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.TMDB_API_AUTH_TOKEN}`,
    accept: "application/json",
  },
});

export default axiosInstance;
