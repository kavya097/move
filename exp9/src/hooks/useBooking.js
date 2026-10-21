import { useState } from "react";
import { theaters, showTimes } from "../Movie.js";

export default function useBooking() {
  const [theater, setTheater] = useState(theaters[0].name);
  const [showTime, setShowTime] = useState(showTimes[0]);
  const [seats, setSeats] = useState([]);
  function toggleSeat(seat) { setSeats((prev) => prev.includes(seat) ? prev.filter((x) => x !== seat) : [...prev, seat]); }
  function resetSeats() { setSeats([]); }
  return { theater, showTime, seats, setTheater, setShowTime, toggleSeat, resetSeats };
}
