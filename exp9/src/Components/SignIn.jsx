import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function SignIn({ onSignIn }) {
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.registeredEmail || "");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password.");
      return;
    }
    onSignIn({ name: email.split("@")[0], email });
    navigate("/", { replace: true });
  }

  return <main className="auth-page"><section className="auth-card">
    <div className="auth-icon">🎬</div><p className="eyebrow">WELCOME BACK</p><h1>Sign in to CineBook</h1>
    <p className="auth-subtitle">Sign in to book movie tickets and manage your bookings.</p>
    {location.state?.registrationSuccess && <p className="auth-success" role="status">Account created. Please sign in with your new credentials.</p>}
    {location.state?.registrationSuccess && <p className="auth-success" role="status">Account created. Please sign in with your new credentials.</p>}
    <form onSubmit={handleSubmit} className="auth-form">
      <label>Email address<input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" autoComplete="email" required /></label>
      <label>Password<input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter your password" autoComplete="current-password" required /></label>
      {error && <p className="auth-error">{error}</p>}
      <button className="primary-btn auth-submit" type="submit">Sign In</button>
    </form>
    <p className="auth-note">Demo sign-in: enter any email and password.</p>
    <p className="auth-note">Don’t have an account? <Link className="auth-back" to="/signup">Create an account</Link></p>
    <Link className="auth-back" to="/logout">Go to logout page</Link>
  </section></main>;
}
