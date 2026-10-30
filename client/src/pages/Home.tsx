
import "../styles/home.css";

type HomeProps = {
  onSignIn: () => void;
  onPlanner: () => void;
};

function Home({ onSignIn, onPlanner }: HomeProps) {
  return (
    <main className="home-page">
      <nav className="home-nav">
        <a className="home-logo" href="/">
          globetrotter<span>.</span>
        </a>

        <div className="nav-links">
          <a href="/">Explore</a>

          <button
            type="button"
            onClick={() => {

              onSignIn();
            }}
          >
            Sign In
          </button>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onPlanner();
            }}
          >
            My Itinerary
          </a>
        </div>

        <a
          href="#"
          className="home-button"
          onClick={(e) => {
            e.preventDefault();
            onPlanner();
          }}
        >
          Start Planning Now
        </a>
      </nav>

      <section className="homepage-banner">
        <div className="banner-content">
          <p className="banner-poster">WELCOME TO GLOBETROTTER</p>
          <h1>Make your next travel, stress free</h1>
          <p className="banner-text">
            Love going on vacations, but don't know where to start? Globetrotter has your back!
          </p>
          <a
            href="#"
            className="banner-button"
            onClick={(e) => {
              e.preventDefault();
              onPlanner();
            }}
          >
            Start Planning Now
          </a>
        </div>
      </section>

      <section className="destination-area">
        <div className="destination-content">
          <div>
            <p className="destination-eyebrow">POPULAR DESTINATIONS</p>
            <h2>Explore high travel destinations</h2>
          </div>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onPlanner();
            }}
          >
            View All Destinations
          </a>
        </div>

        <div className="destination-cards">
          <article className="destination-card Italy">
            <div>
              <h3>Italy</h3>
              <p>Known for the best ancient history and great art and food!</p>
            </div>
          </article>

          <article className="destination-card Japan">
            <div>
              <h3>Japan</h3>
              <p>Known for their high tech infrastructure and tradtions going down for generations!</p>
            </div>
          </article>

          <article className="destination-card France">
            <div>
              <h3>Dubai</h3>
              <p>Known for their luxury shopping and modern architecture!</p>
            </div>
          </article>

          <article className="destination-card Spain">
            <div>
              <h3>Spain</h3>
              <p>Known for their rich culture and beautiful architecture!</p>
            </div>
          </article>
        </div>
      </section>

      <section className="home-footer">
        <a className="footer-logo" href="/">
          Globetrotter<span>.</span>
        </a>
        <p>Make memories without the stress, try today</p>
      </section>
    </main>
  );
}

export default Home;
