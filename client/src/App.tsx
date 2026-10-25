
import { useState } from "react";
import BudgetPlanner from "./pages/BudgetPlanner";
import ItineraryPlanner from "./pages/ItineraryPlanner";

function App() {
  const [activePage, setActivePage] = useState("budget");

  return (
    <>
      <nav className="app-navigation">
        <span className="app-logo">Globetrotter</span>

        <button
          className={activePage === "budget" ? "nav-link selected" : "nav-link"}
          onClick={() => setActivePage("budget")}
        >
          Budget Planner
        </button>

        <button
          className={activePage === "itinerary" ? "nav-link selected" : "nav-link"}
          onClick={() => setActivePage("itinerary")}
        >
          Itinerary Planner
        </button>
      </nav>

      {activePage === "budget" ? <BudgetPlanner /> : <ItineraryPlanner />}
    </>
  );
}

export default App;
