import { useState } from "react";
import { destinations } from "../data/destinationProfiles";
import "../styles/discover.css";

function Discover(){

    const [current, setCurrent] = useState<number>(0); // Tracking the current destination being displayed
    const [likedDestinations, setLiked] = useState<number[]>([]); // Store liked destinations in list
    const [skipDestinations, setSkipped] = useState<number[]>([]); // Store disliked in separate list
    const currentDestination = destinations[current]; // Destination of current index

    // When a user likes a location
    function Like() {
    if (!currentDestination) return;
    
    setLiked((previous) => [...previous, currentDestination.id]);
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
                <div className="discover-card-content">
                    <p className="discover-content"></p>
                    <h2>{currentDestination.city}, {""} {currentDestination.state}</h2>
                    <p className="discover-description">{currentDestination.duration}</p>
                    <div className="discover-duration">
                        <strong>Recommended Trip Duration:</strong>{" "} {currentDestination.duration}
                    </div>
                </div>
                <div className="discover-actions">
                    <button type="button" className="discover-pass" onClick={Skip}>X Pass</button>
                    <button type="button" className="discover-like" onClick={Like}>(heart) Like</button>
                </div>
            </section>
            <p className="discover-progress">{likedDestinations.length} liked .{" "} {skipDestinations.length} passed</p>
        </main>
    );
}

export default Discover;