import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MovieList from "./MovieList.jsx";
export default function Home(){ const location=useLocation(); useEffect(()=>{ if(location.hash==="#movies") document.getElementById("movies")?.scrollIntoView({behavior:"smooth"}); },[location]); return <main><section className="hero" id="home"><div><p className="eyebrow">WELCOME TO CINEBOOK</p><h1>Book your favourite movie.</h1><p>Choose your movie, select your seats, and enjoy the show.</p><a className="primary-btn" href="#movies">Explore Movies</a></div><div className="hero-art">🎬 🍿 🎟️</div></section><MovieList/></main>; }
