import { TGenres } from "./genre";

export type TMovie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type TMovieCollection = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
};

type TMovieProductionCompany = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

type TMovieProductionCompanyCountry = {
  iso_3166_1: string;
  name: string;
};

type TMovieSpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type TMovieDetails = Omit<TMovie, "genre_ids"> & {
  belongs_to_collection: TMovieCollection;
  budget: number;
  genres: TGenres; // different
  homepage: string;
  imdb_id: string;
  origin_country: string[];
  production_companies: TMovieProductionCompany[];
  production_countries: TMovieProductionCompanyCountry[];
  revenue: number;
  runtime: number;
  spoken_languages: TMovieSpokenLanguage[];
  status: string;
  tagline: string;
};

export type TMoviesResponse = {
  page: number;
  results: [];
  total_pages: number;
  total_results: number;
};
