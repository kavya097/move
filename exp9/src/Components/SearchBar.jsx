
export default function SearchBar({
  search,
  setSearch,
  genre,
  setGenre,
  genres
}) {
  return (
    <div className="search-bar">
      <input
        type="search"
        aria-label="Search movies"
        placeholder="Search movies..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <select
        aria-label="Filter by genre"
        value={genre}
        onChange={(event) => setGenre(event.target.value)}
      >
        {genres.map((item) => (
          <option key={item} value={item}>
            {item === "All" ? "All Genres" : item}
          </option>
        ))}
      </select>
    </div>
  );
}
