import { Request, Response } from "express";

export const getMovies = async (req: Request, res: Response) => {
  try {
    res.json(data);
  } catch (error) {
    console.error(error);
  }
};

export const getMovieById = async (req: Request, res: Response) => {
  try {
    res.json(data);
  } catch (error) {
    console.error(error);
  }
};

export const getGenres = async (req: Request, res: Response) => {
  try {
    res.json(data);
  } catch (error) {
    console.error(error);
  }
};
