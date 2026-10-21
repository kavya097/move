import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      <Link to={`/movie/${movie.id}`} className="poster-link" aria-label={`View ${movie.title} details`}>
        <img className="movie-poster-image" src={movie.image} alt={`${movie.title} movie poster`} loading="lazy" decoding="async" width="300" height="450" />
      </Link>
      <div className="movie-card-content">
        <h3>{movie.title}</h3>
        <p>{movie.year} · {movie.genre} · {movie.language}</p>
        <p>{movie.description}</p>
        <p className="movie-price">₹{movie.price} per seat</p>
        <Link className="primary-btn" to={`/movie/${movie.id}`}>Book Now</Link>
      </div>
    </article>
  );
}
