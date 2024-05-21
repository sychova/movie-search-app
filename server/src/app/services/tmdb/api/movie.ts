import axiosInstance from "../requestConfig";
// TODO
import { buildQueryString } from "../../../utils/queryStringBuilder";
import { TMovieDetails, TMoviesResponse } from "../constants/types";

export class TmdbMovieApi {
  static async getAll(): Promise<TMoviesResponse> {
    try {
      const { data } = await axiosInstance.get(`/discover/movie`);

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
