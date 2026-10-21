import { createContext, useContext, useEffect, useState } from "react";

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  const [bookings, setBookings] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("movieBookings")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("movieBookings", JSON.stringify(bookings));
  }, [bookings]);

  function confirmBooking(booking) {
    const newBooking = {
      ...booking,
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      status: "Confirmed"
    };

    setBookings((previous) => [...previous, newBooking]);
  }

  function cancelBooking(id) {
    setBookings((previous) =>
      previous.filter((booking) => booking.id !== id)
    );
  }

  return (
    <BookingContext.Provider
      value={{ bookings, confirmBooking, cancelBooking }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBookings() {
  const context = useContext(BookingContext);

  if (!context) {
    throw new Error("useBookings must be used inside BookingProvider");
  }

  return context;
}