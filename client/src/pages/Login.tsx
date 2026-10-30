
import { useState, type FormEvent } from "react";
import "./login.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  function handleLoginSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo">
          globetrotter<span>.</span>
        </div>

        <div className="login-heading">
          <p className="login-eyebrow">Welcome Back!</p>
          <h1>Lets get signed in!</h1>
          <p>Sign in to continue planning your next adventure.</p>
        </div>

        <form className="login-form" onSubmit={handleLoginSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            className="login-input"
            type="email"
            id="email"
            placeholder="Enter your email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          <div className="login-options">
            <label className="remember">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(event) => setRememberMe(event.target.checked)}
              />
              Remember me
            </label>

            <span className="login-link">Forgot password?</span>
          </div>

          <button className="login-button" type="submit">
            Log In
          </button>
        </form>

        <p className="signup">
          New to Globetrotter?{" "}
          <span className="login-link">Create an account</span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
