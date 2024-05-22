import axiosInstance from "../requestConfig";
import { TMovieDetails, TMoviesResponse } from "../constants/types";

export class TmdbMovieApi {
  static async getAll(query: string): Promise<TMoviesResponse> {
    try {
      const { data } = await axiosInstance.get(
        `/discover/movie?${query || ""}`
      );

      return data;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id: number): Promise<TMovieDetails> {
    try {
      const { data } = await axiosInstance.get(`/movie/${id}`);

      return data;
    } catch (error) {
      throw error;
    }
  }
}
