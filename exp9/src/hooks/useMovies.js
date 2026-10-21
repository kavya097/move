import { useMemo, useState } from "react";
import { movies as allMovies } from "../Movie.js";

export default function useMovies() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const genres = ["All", ...new Set(allMovies.map((movie) => movie.genre))];
  const filteredMovies = useMemo(() => allMovies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase()) &&
    (genre === "All" || movie.genre === genre)
  ), [search, genre]);
  return { movies: filteredMovies, search, setSearch, genre, setGenre, genres };
}
