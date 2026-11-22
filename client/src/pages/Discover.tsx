import { useEffect, useState } from "react";
import "../styles/discover.css";

interface WeatherOption {
  condition: string;
  month: string[];
}

interface Destination {
  id: number;
  city: string;
  state: string;
  description: string;
  duration: string;
  weatherOptions: WeatherOption[];
}

function Discover(){

    const [destinations, setDestinations] = useState<Destination[]>([]); // Destinations loaded from the server
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Load all destinations from the server when the page opens
    useEffect(() => {
        async function loadDestinations() {
            try {
                const response = await fetch("http://localhost:5000/api/destinations");
                if (!response.ok) throw new Error();
                setDestinations(await response.json());
            } catch {
                setError("Couldn't load destinations. Make sure the server is running.");
            } finally {
                setLoading(false);
            }
        }
        loadDestinations();
    }, []);

    const [current, setCurrent] = useState<number>(0); // Tracking the current destination being displayed
    const [likedDestinations, setLiked] = useState<number[]>([]); // Store liked destinations in list
    const [skipDestinations, setSkipped] = useState<number[]>([]); // Store disliked in separate list
    const [quizComplete, setQuizComplete] = useState(false);
    const [preferredWeather, setPreferredWeather] = useState("Any");
    const [preferredMonth, setPreferredMonth] = useState("Any");
    const currentDestination = destinations[current]; // Destination of current index
    const weatherChoices = Array.from(
        new Set(
            destinations.flatMap((destination) =>
                destination.weatherOptions.map((option) => option.condition)
            )
        )
    ).sort();
    const monthChoices = Array.from(
        new Set(
            destinations.flatMap((destination) =>
                destination.weatherOptions.flatMap((option) => option.month)
            )
        )
    ).sort();

    function getMatchScore(destination: Destination): number {
        const options = destination.weatherOptions;
        const exactMatch = options.some(
            (option) =>
                (preferredWeather === "Any" || option.condition === preferredWeather) &&
                (preferredMonth === "Any" || option.month.includes(preferredMonth))
        );

        if (exactMatch) return 3;

        const monthMatch =
            preferredMonth === "Any" ||
            options.some((option) => option.month.includes(preferredMonth));
        const weatherMatch =
            preferredWeather === "Any" ||
            options.some((option) => option.condition === preferredWeather);

        return Number(monthMatch) + Number(weatherMatch);
    }

    const matchedDestination =
        [...destinations]
            .filter((destination) => likedDestinations.includes(destination.id))
            .sort(
                (first, second) =>
                    getMatchScore(second) - getMatchScore(first)
            )[0] ?? null;

    const matchWeather = matchedDestination?.weatherOptions.find(
        (option) =>
            (preferredWeather === "Any" || option.condition === preferredWeather) &&
            (preferredMonth === "Any" || option.month.includes(preferredMonth))
    );

    // When a user likes a location
    function Like() {
    if (!currentDestination) return;
    
    setLiked((previous) => [...previous, currentDestination.id]);

    // Save the like to the user's account
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    fetch("http://localhost:5000/api/users/favorites", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ destinationId: currentDestination.id }),
    }).catch((saveError) => console.error("Could not save like:", saveError));

    // Go to next location
    setCurrent((previous) => previous + 1);
    }
    // When a user skips a location
    function Skip() {
    if (!currentDestination) return;
    
    setSkipped((previous) => [...previous, currentDestination.id]);
    // Go to next location
    setCurrent((previous) => previous + 1);
    }
    function Restart(){
        setCurrent(0);
        setLiked([]);
        setSkipped([]);
        setQuizComplete(false);
    }

    // While destinations are loading
    if (loading) {
        return <main className="discover-page"><p>Loading destinations...</p></main>;
    }
    if (error) {
        return <main className="discover-page"><p>{error}</p></main>;
    }

    if (!quizComplete) {
        return (
            <main className="discover-page">
                <header className="discover-header">
                    <p className="discover-eyebrow">GLOBETROTTER</p>
                    <h1>Find your match</h1>
                    <p>Choose your preferred weather and travel month.</p>
                </header>

                <form
                    className="discover-quiz"
                    onSubmit={(event) => {
                        event.preventDefault();
                        setQuizComplete(true);
                    }}
                >
                    <label>
                        Preferred weather
                        <select
                            value={preferredWeather}
                            onChange={(event) => setPreferredWeather(event.target.value)}
                        >
                            <option value="Any">Any weather</option>
                            {weatherChoices.map((weather) => (
                                <option key={weather} value={weather}>{weather}</option>
                            ))}
                        </select>
                    </label>

                    <label>
                        Month you want to travel
                        <select
                            value={preferredMonth}
                            onChange={(event) => setPreferredMonth(event.target.value)}
                        >
                            <option value="Any">Any month</option>
                            {monthChoices.map((month) => (
                                <option key={month} value={month}>{month}</option>
                            ))}
                        </select>
                    </label>

                    <button type="submit">Start exploring</button>
                </form>
            </main>
        );
    }

    // If all destinations are viewed
    if(!currentDestination){
        return(
            <main className="discover-page">
                <section className="discover-finished">
                    {matchedDestination ? (
                        <>
                            <h1>You found your match!</h1>
                            <img
                                className="discover-match-image"
                                src={`/destinations/${encodeURIComponent(matchedDestination.city)}.png`}
                                alt={`${matchedDestination.city}, ${matchedDestination.state}`}
                            />
                            <h2>{matchedDestination.city}, {matchedDestination.state}</h2>
                            <p>{matchedDestination.description}</p>
                            <p>
                                {matchWeather
                                    ? `${matchWeather.condition} weather is listed for ${matchWeather.month.join(", ")}.`
                                    : "This is the closest match to your weather and month preferences."}
                            </p>
                        </>
                    ) : (
                        <>
                            <h1>No match yet</h1>
                            <p>Like at least one destination to get a match.</p>
                        </>
                    )}
                    <p>You liked {likedDestinations.length} destinations and skipped {skipDestinations.length}!</p>
                    <button className="discover-restart" onClick={Restart}>Start over</button>
                </section>
            </main>
        )
    }

    return (
        <main className="discover-page">
            <header className="discover-header">
                <p className="discover-eyebrow">
                    GLOBETROTTER
                </p>
                <h1>Discover Destinations</h1>
                <p>Find your next adventure, one destination at a time.</p>
            </header>

            <section className="discover-card">
                <img
                className="discover-image"
                src={ `/destinations/${encodeURIComponent(currentDestination.city)}.png` }
                alt={`${currentDestination.city}, ${currentDestination.state}`}
                />
                <div className="discover-card-content">
                    <h2>{currentDestination.city}, {currentDestination.state}</h2>
                    <p className="discover-description">{currentDestination.description}</p>
                    <div className="discover-duration">
                        <strong>Recommended Trip Duration:</strong>{" "} {currentDestination.duration}
                    </div>
                </div>
                <div className="discover-actions">
                    <button type="button" className="discover-pass" onClick={Skip}>X Pass</button>
                    <button type="button" className="discover-like" onClick={Like}> ♥ Like</button>
                </div>
            </section>
            <p className="discover-progress">{likedDestinations.length} liked .{" "} {skipDestinations.length} passed</p>
        </main>
    );
}

export default Discover;