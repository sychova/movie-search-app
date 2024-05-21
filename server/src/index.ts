import express from "express";
import dotenv from "dotenv";

import { tmdbRouter } from "./app/routes";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello server!");
});

app.use("/api/tmdb", tmdbRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
