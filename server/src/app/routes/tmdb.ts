import express, { Router } from "express";

import { tmdbController } from "../controllers";

const tmdbRouter: Router = express.Router();

tmdbRouter.get("/movies", tmdbController.getMovies);
tmdbRouter.get("/:id", tmdbController.getMovieById);

tmdbRouter.get("/genres", tmdbController.getGenres);

export default tmdbRouter;
