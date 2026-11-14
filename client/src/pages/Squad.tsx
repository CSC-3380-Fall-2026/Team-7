import "../styles/Squad.css";

function Squad() {
  return (
    <div className="squad-page">
      <header className="squad-navbar">
        <a href="/" className="squad-logo">
          globetrotter<span>.</span>
        </a>

        <nav>
          <a href="/">Home</a>
          <a href="/planner">Planner</a>
          <a href="/profile">Profile</a>
        </nav>
      </header>

      <main className="squad-content">
        <p className="squad-eyebrow">TRAVEL TOGETHER</p>

        <h1>
          Your travel squad<span>.</span>
        </h1>

        <p className="squad-description">
          Bring your friends together, discover new destinations,
          and plan your next adventure.
        </p>

        <button className="create-squad-button">
          + Create a Squad
        </button>

        <section className="squad-section">
          <h2>My Squads</h2>

          <div className="empty-squad">
            <h3>No squads yet!</h3>
            <p>
              Create your first squad and start planning
              your next adventure with friends.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Squad;
