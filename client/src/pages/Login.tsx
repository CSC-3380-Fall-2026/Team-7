
import "../styles/login.css";

function Login() {
  return (
    <main className="login-page">
      <section className="login-card">
        <a className="login-logo" href="/">
          globetrotter<span>.</span>
        </a>

        <div className="login-heading">
          <p className="login-eyebrow">WELCOME BACK</p>
          <h1>Let's get you going.</h1>
          <p>Sign in to continue planning your next adventure.</p>
        </div>

        <form className="login-form">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            required
          />

          <div className="login-options">
            <label className="remember-option">
              <input type="checkbox" name="remember" />
              Remember me
            </label>

            <a href="#forgot-password">Forgot password?</a>
          </div>

          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>

        <p className="signup-text">
          New to Globetrotter? <a href="#sign-up">Create an account</a>
        </p>

        <p className="login-footer">
          Your next adventure is just around the corner.
        </p>
      </section>
    </main>
  );
}

export default Login;
