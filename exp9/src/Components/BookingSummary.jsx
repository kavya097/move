import { calculateTotal } from "../Booking.js";

export default function BookingSummary({ movie, theater, showTime, seats }) {
  return (
    <section className="summary-card">
      <h3>Booking Summary</h3>

      <div className="summary-row">
        <span>Movie</span>
        <strong>{movie.title}</strong>
      </div>

      <div className="summary-row">
        <span>Theatre</span>
        <strong>{theater}</strong>
      </div>

      <div className="summary-row">
        <span>Show time</span>
        <strong>{showTime}</strong>
      </div>

      <div className="summary-row">
        <span>Seats</span>
        <strong>{seats.length ? seats.join(", ") : "Not selected"}</strong>
      </div>

      <div className="summary-row">
        <span>Ticket price</span>
        <strong>₹{movie.price} × {seats.length}</strong>
      </div>

      <div className="summary-total">
        <span>Total Amount</span>
        <strong>₹{calculateTotal(seats, movie.price)}</strong>
      </div>
    </section>
  );
}