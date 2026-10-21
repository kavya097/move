import { Link } from "react-router-dom";
export default function Logout({ onLogout, user }) {
  return <main className="auth-page"><section className="auth-card logout-card">
    <div className="auth-icon">{user ? "👋" : "🔒"}</div>
    <p className="eyebrow">CINEBOOK ACCOUNT</p>
    <h1>{user ? "Ready to log out?" : "You are logged out"}</h1>
    <p className="auth-subtitle">{user ? `Signed in as ${user.email}. You can safely end your session here.` : "Your session has ended. Sign in again to continue booking movies."}</p>
    {user ? <button className="primary-btn auth-submit" onClick={onLogout}>Log Out</button> : <Link className="primary-btn auth-submit auth-link-button" to="/signin">Sign In Again</Link>}
    <Link className="auth-back" to={user ? "/" : "/signin"}>{user ? "Return to Home" : "Back to sign in"}</Link>
  </section></main>;
}
