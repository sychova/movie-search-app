import { Request, Response } from "express";
import { TmdbMovieApi, TmdbGenreApi } from "../services/tmdb/api";

export const getMovies = async (req: Request, res: Response) => {
  try {
    const data = await TmdbMovieApi.getAll();

    res.json(data);
  } catch (error) {
    console.error(error);
  }
};

export const getMovieById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const data = await TmdbMovieApi.getById(parseInt(id));

    res.json(data);
  } catch (error) {
    console.error(error);
  }
};

export const getGenres = async (req: Request, res: Response) => {
  try {
    const data = await TmdbGenreApi.getAll();

    res.json(data);
  } catch (error) {
    console.error(error);
  }
};
