import { BrowserRouter, Routes, Route, Navigate, Link, useLocation, useNavigate } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
const Home = lazy(() => import("./Components/Home.jsx"));
const MovieDetails = lazy(() => import("./Components/MovieDetails.jsx"));
const SignIn = lazy(() => import("./Components/SignIn.jsx"));
const SignUp = lazy(() => import("./Components/SignUp.jsx"));
const Logout = lazy(() => import("./Components/Logout.jsx"));
import { BookingProvider, useBookings } from "./Components/BookingContext.jsx";
import "./App.css";

function Header({ user }) {
  const { bookings } = useBookings();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/" && location.hash === "#movies") {
      document.getElementById("movies")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  if (!user) return <header className="app-header"><Link to="/signin" className="brand">🎬 CineBook</Link><nav><Link to="/signin">Sign In</Link><Link to="/signup">Sign Up</Link></nav></header>;
  return <header className="app-header"><Link to="/" className="brand">🎬 CineBook</Link><nav><Link to="/">Home</Link><Link to="/#movies">Movies</Link><Link to="/bookings">My Bookings ({bookings.length})</Link><Link to="/logout" className="logout-nav">Log Out</Link></nav></header>;
}

function BookingsPage() {
  const { bookings, cancelBooking } = useBookings();
  return <main className="page"><p className="eyebrow">YOUR TICKETS</p><h1>My Bookings</h1>{bookings.length === 0 ? <div className="empty-state"><h2>No bookings yet</h2><p>Your confirmed bookings will appear here.</p><Link className="primary-btn" to="/#movies">Browse Movies</Link></div> : <div className="booking-list">{bookings.map(b => <article className="booking-card" key={b.id}><span className="status">{b.status}</span><h2>{b.movieTitle}</h2><p><b>Booking ID:</b> {b.id}</p><p><b>Customer:</b> {b.customerName}</p><p><b>Theatre:</b> {b.theater}</p><p><b>Show time:</b> {b.showTime}</p><p><b>Seats:</b> {b.seats.join(", ")}</p><p><b>Phone:</b> {b.phone}</p><p><b>Payment:</b> {b.paymentMethod}</p><p><b>Booked:</b> {b.bookingDate}</p><h3 className="movie-price">Total: ₹{b.total}</h3><button className="cancel-btn" onClick={() => { if (window.confirm("Cancel this booking?")) cancelBooking(b.id); }}>Cancel Booking</button></article>)}</div>}</main>;
}

function AppContent() {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem("cinebookUser")) || null; } catch { return null; }
  });
  const navigate = useNavigate();
  function signIn(details) {
    localStorage.setItem("cinebookUser", JSON.stringify(details));
    setUser(details);
  }
  function signOut() {
    localStorage.removeItem("cinebookUser");
    setUser(null);
    navigate("/logout", { replace: true });
  }
  return <>
    <Header user={user} />
    <Suspense fallback={<main className="page" role="status">Loading page…</main>}><Routes>
      <Route path="/signin" element={user ? <Navigate to="/" replace /> : <SignIn onSignIn={signIn} />} />
      <Route path="/signup" element={user ? <Navigate to="/" replace /> : <SignUp />} />
      <Route path="/logout" element={<Logout user={user} onLogout={signOut} />} />
      <Route path="/" element={user ? <Home /> : <Navigate to="/signin" replace />} />
      <Route path="/movie/:id" element={user ? <MovieDetails /> : <Navigate to="/signin" replace />} />
      <Route path="/bookings" element={user ? <BookingsPage /> : <Navigate to="/signin" replace />} />
      <Route path="*" element={<Navigate to={user ? "/" : "/signin"} replace />} />
    </Routes></Suspense>
    <footer className="footer">© 2026 CineBook Movie Booking</footer>
  </>;
}

export default function App() {
  return <BrowserRouter><BookingProvider><AppContent /></BookingProvider></BrowserRouter>;
}
