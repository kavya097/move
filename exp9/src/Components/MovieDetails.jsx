import { Link, useParams } from "react-router-dom";
import { movies } from "../Movie.js";
import useBooking from "../hooks/useBooking.js";
import TheaterList from "./TheatreList.jsx";
import ShowTiming from "./ShowTiming.jsx";
import SeatSelection from "./SeatSelection.jsx";
import BookingSummary from "./BookingSummary.jsx";
import Payment from "./Payment.jsx";

export default function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find((item) => item.id === Number(id));

  const {
    theater,
    showTime,
    seats,
    setTheater,
    setShowTime,
    toggleSeat,
    resetSeats
  } = useBooking();

  if (!movie) {
    return (
      <main className="page">
        <h2>Movie not found</h2>
        <Link to="/" className="primary-btn">Return Home</Link>
      </main>
    );
  }

  return (
    <main className="page">
      <Link to="/#movies" className="back-link">← Back to Movies</Link>

      <div className="details-layout">
        <section className="details-main">
          <div className="details-banner">
            <img className="details-poster" src={movie.image} alt={`${movie.title} movie poster`} loading="lazy" decoding="async" width="300" height="450" />
            <div>
              <p className="eyebrow">NOW SHOWING</p>
              <h1>{movie.title}</h1>
              <p>{movie.year} · {movie.genre}</p>
            </div>
          </div>

          <div className="panel">
            <h2>Movie Details</h2>
            <p>{movie.description}</p>
            <p className="movie-price">Ticket price: ₹{movie.price}</p>
          </div>

          <div className="panel">
            <h2>1. Select Theatre</h2>
            <TheaterList theater={theater} setTheater={setTheater} />
          </div>

          <div className="panel">
            <h2>2. Select Show Time</h2>
            <ShowTiming showTime={showTime} setShowTime={setShowTime} />
          </div>

          <div className="panel">
            <h2>3. Select Seats</h2>
            <SeatSelection
              selectedSeats={seats}
              toggleSeat={toggleSeat}
            />
          </div>

          <BookingSummary
            movie={movie}
            theater={theater}
            showTime={showTime}
            seats={seats}
          />

          <Payment
            movie={movie}
            theater={theater}
            showTime={showTime}
            seats={seats}
            resetSeats={resetSeats}
          />
        </section>
      </div>
    </main>
  );
}