import useMovies from "../hooks/useMovies.js";
import MovieCard from "./MovieCard.jsx";
import SearchBar from "./SearchBar.jsx";

export default function MovieList() {
  const {
    movies,
    search,
    setSearch,
    genre,
    setGenre,
    genres
  } = useMovies();

  return (
    <section id="movies" className="movies-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">NOW SHOWING</p>
          <h2>Available Movies</h2>
        </div>
        <span>{movies.length} movies</span>
      </div>

      <SearchBar
        search={search}
        setSearch={setSearch}
        genre={genre}
        setGenre={setGenre}
        genres={genres}
      />

      {movies.length > 0 ? (
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3>No movies found</h3>
          <p>Try another search or genre.</p>
          <button
            className="secondary-btn"
            onClick={() => {
              setSearch("");
              setGenre("All");
            }}
          >
            Clear Filters
          </button>
        </div>
      )}
    </section>
  );
}