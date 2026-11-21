import { useEffect, useState } from "react";
import "../styles/discover.css";

interface Destination {
  id: number;
  city: string;
  state: string;
  description: string;
  duration: string;
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
    const currentDestination = destinations[current]; // Destination of current index

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
    }

    // While destinations are loading
    if (loading) {
        return <main className="discover-page"><p>Loading destinations...</p></main>;
    }
    if (error) {
        return <main className="discover-page"><p>{error}</p></main>;
    }

    // If all destinations are viewed
    if(!currentDestination){
        return(
            <main className="discover-page">
                <section className="discover-finished">
                    <h1>You've explored all of our destinations!</h1>
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