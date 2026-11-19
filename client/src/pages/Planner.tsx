import { Link } from "react-router-dom";
import "../styles/Planner.css";

/**
 * Trip planner page where users choose a destination, dates, and number of travelers.
 * @returns The trip planner page.
 */
function Planner() {
    return (
        <main className="planner-page">
            <nav className="planner-nav">
                <Link className="planner-logo" to="/">
                    globetrotter<span>.</span>
                </Link>

                <div className="planner-nav-links">
                    <Link to="/">Explore</Link>
                    <Link to="/login">Sign In</Link>
                    <Link to="/itinerary">My Itinerary</Link>
                </div>
            </nav>

            <section className="planner-banner">
                <div className="planner-banner-content">
                    <p className="planner-banner-poster">Check your itinerary</p>
                    <h1>Plan your next travel, stress free</h1>
                    <p className="planner-banner-text">
                        Love going on vacations, but don't know where to start? Globetrotter has your back!
                    </p>
                </div>
            </section>

            <section className="trip-details">
                <h2>Your trip Details</h2>

                <div className="trip-info">
                    <div className="trip-info-item">
                        <h3>Destination</h3>
                        <p>Italy</p>
                    </div>

                    <form className="trip-info-item">
                        <label htmlFor="start-date">Start Date</label>
                        <input type="date" id="start-date" name="start-date" />
                    </form>

                    <form className="trip-info-item">
                        <label htmlFor="end-date">End Date</label>
                        <input type="date" id="end-date" name="end-date" />
                    </form>
                </div>
            </section>

            <form className="trip-form">
                <label htmlFor="destination">Trip Where do you want to go</label>
                <input type="text" id="destination" name="destination" placeholder="Enter your destination" />

                <label htmlFor="travelers">Number of Travelers</label>
                <input type="number" id="travelers" name="travelers" placeholder="Enter number of travelers" />

                <button type="button" className="trip-form-button">Plan it now!</button>

                <section className="itinerary">
                    <h2>Your Itinerary</h2>
                    <p>Here is your planned itinerary.</p>

                    <button type="button" className="itinerary-button"> Add to Itinerary</button>
                </section>
            </form>
        </main>
    );
}

export default Planner;