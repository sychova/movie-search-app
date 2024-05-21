import express from "express";
import dotenv from "dotenv";

import { genresRouter, moviesRouter } from "./app/routes";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello server!");
});

app.use("/genres", genresRouter);
app.use("/movies", moviesRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
