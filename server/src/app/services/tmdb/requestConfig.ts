import axios from "axios";

// TODO
const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: "",
    "content-type": "application/json",
  },
});

export default axiosInstance;
