import { useState, useEffect } from "react";
import { MovieResponse } from "./models/movie-response";
import { MovieRequest } from "./models/movie-request";
import { Button, Card, Spinner } from "flowbite-react";
import { ApiService } from "./services/api-service";
import { MdDeleteForever } from "react-icons/md";

export default function App() {
  const [movies, setMovies] = useState<Array<MovieResponse>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [createLoading, setCreateLoading] = useState<boolean>(false);
  const [error, setError] = useState("");

  async function deleteMovie(id: string) {
    try {
      const response = await ApiService.deleteMovie(id);
      if (response?.data) {
        setMovies((prev) =>
          prev.filter((movie) => movie.id !== response?.data.id),
        );
      } else {
        setError("Error - Delete Movie");
      }
    } catch (error) {
      setError("Error - Delete Movie");
      console.error(error);
    }
  }

  async function createMovie() {
    try {
      setCreateLoading(true);
      const request: MovieRequest = {
        director: "Israel",
        name: "HackerU",
        year: "2022",
        isNew: false,
      };

      const response = await ApiService.createMovie(request);
      if (response?.data) {
        setMovies((prev) => [...prev, response?.data]);
      } else {
        setError("Error - Cannot Create new movie");
      }
    } catch (error) {
      setError("Error - Create New Movie");
      console.error(error);
    } finally {
      setCreateLoading(false);
    }
  }

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        const response = await ApiService.getMovies();
        if (response?.data) {
          setMovies(response.data);
        } else {
          setError("Error - Cant find any movies..");
        }
      } catch (error) {
        setError("Error - Gel All Movies");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, []);

  if (isLoading)
    return (
      <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    );

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <Button onClick={createMovie} outline className="cursor-pointer">
          {createLoading ? (
            <Spinner aria-label="Spinner button example" size="sm" light />
          ) : (
            <span>Create Movie</span>
          )}
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie, i) => (
          <Card key={`movie_${i}`}>
            <h4 className="text-2xl font-bold tracking-tight text-gray-900">
              {movie.name}
            </h4>
            <p className="text-lg font-normal text-gray-700">
              {movie.director}
            </p>
            <p className="text-md font-normal text-gray-600">{movie.year}</p>
            <hr />
            <div className="flex gap-4">
              <Button
                color="red"
                className="cursor-pointer"
                onClick={() => deleteMovie(movie.id)}
              >
                <MdDeleteForever />
              </Button>
              <Button color="blue" className="cursor-pointer">
                Update
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
