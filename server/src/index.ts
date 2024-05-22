import dotenv from "dotenv";
import express from "express";
dotenv.config();
import { tmdbRouter } from "./app/routes";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello server!");
});

app.use("/api/tmdb", tmdbRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
