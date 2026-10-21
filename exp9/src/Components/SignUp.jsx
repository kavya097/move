import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      setError("Please complete all fields.");
      return;
    }
    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Demo-only registration: require a separate sign-in step.
    navigate("/signin", { replace: true, state: { registrationSuccess: true, registeredEmail: email.trim() } });
  }

  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="auth-icon">🎬</div>
        <p className="eyebrow">JOIN CINEBOOK</p>
        <h1>Create your account</h1>
        <p className="auth-subtitle">
          Sign up to discover movies, book tickets, and manage your bookings.
        </p>

        <form onSubmit={handleSubmit} className="auth-form">
          <label>
            Full name
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter your full name"
              autoComplete="name"
              required
            />
          </label>

          <label>
            Email address
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="At least 6 characters"
              autoComplete="new-password"
              minLength={6}
              required
            />
          </label>

          <label>
            Confirm password
            <input
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              placeholder="Re-enter your password"
              autoComplete="new-password"
              required
            />
          </label>

          {error && <p className="auth-error">{error}</p>}

          <button className="primary-btn auth-submit" type="submit">
            Create Account
          </button>
        </form>

        <p className="auth-note">
          Already have an account? <Link className="auth-back" to="/signin">Sign in</Link>
        </p>
      </section>
    </main>
  );
}
