
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validatePhone, calculateTotal } from "../Booking.js";
import { useBookings } from "./BookingContext.jsx";

export default function Payment({
  movie,
  theater,
  showTime,
  seats,
  resetSeats
}) {
  const navigate = useNavigate();
  const { confirmBooking } = useBookings();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("UPI");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!validatePhone(phone)) {
      alert("Enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (seats.length === 0) {
      alert("Please select at least one seat.");
      return;
    }

    confirmBooking({
      movieId: movie.id,
      movieTitle: movie.title,
      theater,
      showTime,
      seats: [...seats],
      customerName: name.trim(),
      phone,
      paymentMethod,
      total: calculateTotal(seats, movie.price),
      bookingDate: new Date().toLocaleString()
    });

    resetSeats();
    alert("Your booking is confirmed!");
    navigate("/bookings");
  }

  return (
    <section className="payment-card">
      <h2>Customer Details & Payment</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="customerName">Full Name</label>
          <input
            id="customerName"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Mobile Number</label>
          <input
            id="phone"
            type="tel"
            inputMode="numeric"
            maxLength={10}
            value={phone}
            onChange={(event) =>
              setPhone(event.target.value.replace(/\D/g, "").slice(0, 10))
            }
            placeholder="10-digit mobile number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(event) => setPaymentMethod(event.target.value)}
          >
            <option value="UPI">UPI</option>
            <option value="Card">Debit / Credit Card</option>
            <option value="Cash">Cash at Counter</option>
          </select>
        </div>

        <p className="demo-note">
          Demo only: no real payment will be processed.
        </p>

        <button className="primary-btn full-width" type="submit">
          Confirm Booking · ₹{calculateTotal(seats, movie.price)}
        </button>
      </form>
    </section>
  );
}