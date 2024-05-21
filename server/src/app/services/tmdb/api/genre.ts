import axiosInstance from "../requestConfig";
import { TGenres } from "../constants/types";

export class TmdbGenreApi {
  static async getAll(): Promise<TGenres> {
    try {
      const { data } = await axiosInstance.get("/genre/movie/list?language=en");

      return data;
    } catch (error) {
      throw error;
    }
  }
}
