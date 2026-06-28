import axios from "axios";
import { MovieResponse } from "../models/movie-response";
import { MovieRequest } from "../models/movie-request";

const _axios = axios.create({
  baseURL: "https://6a4136971ff1d27becc15964.mockapi.io/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const ApiService = {
  getMovies: () => _axios.get<Array<MovieResponse>>("/movies"),
  createMovie: (payload: MovieRequest) =>
    _axios.post<MovieResponse>("/movies", payload),
  deleteMovie: (id: string) => _axios.delete<MovieResponse>(`/movies/${id}`),
};