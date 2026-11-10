import "../styles/home.css";

/**
 * Main homepage for the Globetrotter application.
 * @returns The Globetrotter homepage.
 */
function Home() {
  return (
    <div className="home-page">
      <header className="navbar">
        <a className="logo" href="/">
          globetrotter<span>.</span>
        </a>

        <nav>
          <a href="#discover">Discover</a>
          <a href="#plan">Plan a Trip</a>
          <a href="#budget">Budget</a>
        </nav>

        <div className="nav-actions">
          <a className="login-link" href="/login">
            Log In
          </a>

          <a className="nav-button" href="/register">
            Get Started
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="discover">
          <p className="eyebrow">YOUR NEXT ADVENTURE AWAITS</p>

          <h1>
            Your next adventure
            <br />
            starts <span>here.</span>
          </h1>

          <p className="hero-description">
            Discover places you'll love, plan your next trip,
            and find adventures that fit your budget.
          </p>

          <a className="primary-button" href="/register">
            Find Your Next Destination →
          </a>

          <p className="hero-note">
            Explore new places. Make unforgettable memories.
          </p>
        </section>

        <section className="features" id="features">
          <div className="section-heading">
            <p className="eyebrow">MADE FOR YOUR NEXT GETAWAY</p>
            <h2>Travel planning, made simple.</h2>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-icon">✦</div>
              <h3>Discover</h3>
              <p>
                Explore destinations and find places that match
                your travel interests.
              </p>
            </article>

            <article className="feature-card" id="plan">
              <div className="feature-icon">↗</div>
              <h3>Plan Your Trip</h3>
              <p>
                Organize destinations and activities for your
                next adventure.
              </p>
            </article>

            <article className="feature-card" id="budget">
              <div className="feature-icon">$</div>
              <h3>Travel Your Way</h3>
              <p>
                Keep your budget in mind while exploring
                vacation possibilities.
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>globetrotter. · Your journey starts here.</p>
      </footer>
    </div>
  );
}

export default Home;