
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed.");
      }

      setMessage("Account created successfully!");

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <Link className="login-logo" to="/">
          globetrotter<span>.</span>
        </Link>

        <div className="login-heading">
          <p className="login-eyebrow">START YOUR JOURNEY</p>
          <h1>Create your account.</h1>
          <p>Join Globetrotter and start planning your next adventure.</p>
        </div>

        <form className="login-form" onSubmit={handleRegister}>
          <label htmlFor="name">Full name</label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />

          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            minLength={6}
            required
          />

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Creating account..." : "Create Account"}
          </button>

          {message && <p role="status">{message}</p>}
        </form>

        <p className="signup-text">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>

        <p className="login-footer">
          Your next adventure is just around the corner.
        </p>
      </section>
    </main>
  );
}

export default Register;