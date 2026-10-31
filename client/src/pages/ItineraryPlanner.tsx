import "./planner.css";

const itinerary = [
  {
    time: "9:00 AM",
    activity: "Arrive in Miami",
    location: "Miami International Airport",
    cost: "$0",
  },
  {
    time: "11:00 AM",
    activity: "Hotel Check-In",
    location: "Ocean Drive Hotel",
    cost: "$450",
  },
  {
    time: "1:00 PM",
    activity: "Lunch",
    location: "Crazy About You",
    cost: "$25",
  },
  {
    time: "3:00 PM",
    activity: "Beach Walk",
    location: "South Beach",
    cost: "$0",
  },
  {
    time: "7:00 PM",
    activity: "Dinner",
    location: "Cactus Club Restaurant",
    cost: "$60",
  },
];

function ItineraryPlanner() {
  return (
    <main className="planner-page">
      <header className="planner-header">
        <div>
          <p className="eyebrow">YOUR TRIP</p>
          <h1>Itinerary Planner</h1>
          <p className="muted">Miami, Florida · June 12–17</p>
        </div>

        <button className="primary-button">+ Add Activity</button>
      </header>

      <section className="planner-panel">
        <div className="section-heading">
          <div>
            <h2>Trip Schedule</h2>
            <p className="muted">Organize your day at a glance.</p>
          </div>
        </div>

        <div className="day-tabs">
          <button className="day-tab active">Day 1</button>
          <button className="day-tab">Day 2</button>
          <button className="day-tab">Day 3</button>
        </div>

        <div className="timeline">
          {itinerary.map((item) => (
            <div className="timeline-item" key={item.time}>
              <div className="timeline-time">{item.time}</div>

              <div className="timeline-card">
                <h3>{item.activity}</h3>
                <p className="muted">{item.location}</p>
                <span className="timeline-cost">{item.cost}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default ItineraryPlanner;