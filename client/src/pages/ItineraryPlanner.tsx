import { useEffect, useState, type FormEvent, type DragEvent } from "react";
import "./planner.css";

type Activity = {
  id: number;
  time: string;
  activity: string;
  location: string;
  cost: number | null;
};

type DestinationActivity = {
  name: string;
  location: string;
  estimatedCostMin: number | null;
  estimatedCostMax: number | null;
};

type DestinationRestaurant = {
  name: string;
  address: string;
  estimatedCostMin: number | null;
  estimatedCostMax: number | null;
};

type Destination = {
  id: number;
  city: string;
  state: string;
  activities?: DestinationActivity[];
  breakfast?: DestinationRestaurant[];
  lunch?: DestinationRestaurant[];
  dinner?: DestinationRestaurant[];
};

function estimateCost(item: {
  estimatedCostMin: number | null;
  estimatedCostMax: number | null;
}): number | null {
  const { estimatedCostMin: min, estimatedCostMax: max } = item;
  if (min !== null && max !== null) return (min + max) / 2;
  return min ?? max ?? null;
}

function buildItinerary(destination: Destination): Record<number, Activity[]> {
  const itinerary: Record<number, Activity[]> = {};
  const activities = destination.activities ?? [];
  const slots = ["09:00", "11:00", "13:00", "15:00", "18:00"];
  let nextId = 1;

  for (let day = 1; day <= 7; day++) {
    const activityOffset = (day - 1) * 2;
    const suggestions: Array<{ name: string; location: string; estimatedCostMin: number | null; estimatedCostMax: number | null }> = [];
    const breakfast = destination.breakfast?.[(day - 1) % (destination.breakfast?.length || 1)];
    const lunch = destination.lunch?.[(day - 1) % (destination.lunch?.length || 1)];
    const dinner = destination.dinner?.[(day - 1) % (destination.dinner?.length || 1)];
    const firstActivity = activities[activityOffset % (activities.length || 1)];
    const secondActivity = activities[(activityOffset + 1) % (activities.length || 1)];

    if (breakfast) suggestions.push({ ...breakfast, location: breakfast.address });
    if (firstActivity) suggestions.push(firstActivity);
    if (lunch) suggestions.push({ ...lunch, location: lunch.address });
    if (secondActivity) suggestions.push(secondActivity);
    if (dinner) suggestions.push({ ...dinner, location: dinner.address });

    itinerary[day] = suggestions.map((item, index) => ({
      id: nextId++,
      time: slots[index] ?? "19:00",
      activity: item.name,
      location: item.location,
      cost: estimateCost(item),
    }));
  }
  return itinerary;
}

const emptyForm = {
  time: "",
  activity: "",
  location: "",
  cost: "",
};

function toTimeInputValue(time: string) {
  const match = time.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);

  if (!match) return time;

  let hours = Number(match[1]);
  const minutes = match[2];
  const period = match[3].toUpperCase();

  if (period === "PM" && hours !== 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;

  return `${String(hours).padStart(2, "0")}:${minutes}`;
}

function formatTime(time: string) {
  if (time.includes("AM") || time.includes("PM")) return time;

  const [hoursString, minutes] = time.split(":");
  const hours = Number(hoursString);
  const period = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12;

  return `${displayHours}:${minutes} ${period}`;
}

function ItineraryPlanner() {
  const [tripDuration, setTripDuration] = useState(3);
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [destinationId, setDestinationId] = useState<number | null>(null);
  const [loadingDestinations, setLoadingDestinations] = useState(true);
  const [destinationError, setDestinationError] = useState("");
  const selectedDestination = destinations.find((item) => item.id === destinationId);

  useEffect(() => {
    let cancelled = false;
    async function loadDestinations() {
      try {
        const response = await fetch("/api/destinations");
        if (!response.ok) throw new Error(`Request failed (${response.status})`);
        const data: Destination[] = await response.json();
        if (!Array.isArray(data) || data.length === 0) throw new Error("No destinations found");
        if (cancelled) return;
        setDestinations(data);
        const params = new URLSearchParams(window.location.search);
        const requestedId = Number(params.get("destinationId") ?? params.get("destination") ?? localStorage.getItem("globetrotterDestinationId"));
        const initial = data.find((item) => item.id === requestedId) ?? data[0];
        setDestinationId(initial.id);
        setActivities(buildItinerary(initial));
      } catch (error) {
        if (!cancelled) setDestinationError(error instanceof Error ? error.message : "Could not load destinations");
      } finally {
        if (!cancelled) setLoadingDestinations(false);
      }
    }
    void loadDestinations();
    return () => { cancelled = true; };
  }, []);

  function changeDestination(id: number) {
    const destination = destinations.find((item) => item.id === id);
    if (!destination) return;
    setDestinationId(id);
    localStorage.setItem("globetrotterDestinationId", String(id));
    setActivities(buildItinerary(destination));
    setSelectedDay(1);
    resetForm();
  }
  const [selectedDay, setSelectedDay] = useState(1);

  const [activities, setActivities] =
    useState<Record<number, Activity[]>>({});

  const [showAddForm, setShowAddForm] = useState(false);

  const [editingActivityId, setEditingActivityId] =
    useState<number | null>(null);

  const [draggedActivityId, setDraggedActivityId] =
    useState<number | null>(null);

  const [newActivity, setNewActivity] = useState(emptyForm);

  const currentActivities = activities[selectedDay] || [];

  const tripTotal = Object.entries(activities)
    .filter(([day]) => Number(day) <= tripDuration)
    .flatMap(([, items]) => items)
    .reduce((total, item) => total + (item.cost ?? 0), 0);

  const dailyTotal = currentActivities.reduce(
    (total, item) => total + (item.cost ?? 0),
    0
  );

  function resetForm() {
    setNewActivity(emptyForm);
    setShowAddForm(false);
    setEditingActivityId(null);
  }

  function handleAddActivity() {
    resetForm();
    setShowAddForm(true);
  }

  function handleEditActivity(item: Activity) {
    setShowAddForm(false);

    setNewActivity({
      time: toTimeInputValue(item.time),
      activity: item.activity,
      location: item.location,
      cost: item.cost === null ? "" : String(item.cost),
    });

    setEditingActivityId(item.id);
  }

  function handleSaveActivity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const updatedActivity: Activity = {
      id:
        editingActivityId ??
        Math.max(
          0,
          ...Object.values(activities).flat().map((item) => item.id)
        ) + 1,
      time: newActivity.time,
      activity: newActivity.activity.trim(),
      location: newActivity.location.trim(),
      cost: newActivity.cost.trim() === "" ? null : Number(newActivity.cost),
    };

    if (editingActivityId !== null) {
      setActivities((previous) => ({
        ...previous,
        [selectedDay]: previous[selectedDay].map((item) =>
          item.id === editingActivityId ? updatedActivity : item
        ),
      }));
    } else {
      setActivities((previous) => ({
        ...previous,
        [selectedDay]: [
          ...(previous[selectedDay] || []),
          updatedActivity,
        ],
      }));
    }

    resetForm();
  }

  function handleRemoveActivity(id: number) {
    setActivities((previous) => ({
      ...previous,
      [selectedDay]: previous[selectedDay].filter(
        (item) => item.id !== id
      ),
    }));

    if (editingActivityId === id) {
      resetForm();
    }
  }

  // Drag-and-drop functions

  function handleDragStart(
    event: DragEvent<HTMLElement>,
    id: number
  ) {
    setDraggedActivityId(id);
    event.dataTransfer.effectAllowed = "move";
  }

  function handleDragOver(event: DragEvent<HTMLElement>) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }

  function handleDrop(
  event: DragEvent<HTMLElement>,
  targetId: number
  ) {
    event.preventDefault();

    if (
      draggedActivityId === null ||
      draggedActivityId === targetId
    ) {
      setDraggedActivityId(null);
      return;
    }

    setActivities((previous) => {
      const dayActivities = [...(previous[selectedDay] || [])];

      const fromIndex = dayActivities.findIndex(
        (item) => item.id === draggedActivityId
      );

      const toIndex = dayActivities.findIndex(
        (item) => item.id === targetId
      );

      if (fromIndex === -1 || toIndex === -1) {
        return previous;
      }

      // Save the original time slots
      const fromTime = dayActivities[fromIndex].time;
      const toTime = dayActivities[toIndex].time;

      // Swap the two activities
      const fromActivity = dayActivities[fromIndex];
      const toActivity = dayActivities[toIndex];

      dayActivities[fromIndex] = {
        ...toActivity,
        time: fromTime,
      };

      dayActivities[toIndex] = {
        ...fromActivity,
        time: toTime,
      };

      return {
        ...previous,
        [selectedDay]: dayActivities,
      };
    });

    setDraggedActivityId(null);
  }

  return (
    <main className="itinerary-page">
      <div className="itinerary-container">

        <header className="itinerary-header">
          <div>
            <p className="itinerary-eyebrow">YOUR NEXT ADVENTURE</p>
            <h1>Your Trip Itinerary</h1>
            <p className="itinerary-subtitle">
              Plan your trip and organize your daily activities.
            </p>
          </div>
        </header>

        <div className="destination-selector">
          <label htmlFor="destination-select">Choose Destination: </label>
          <select
            id="destination-select"
            value={destinationId ?? ""}
            disabled={loadingDestinations || destinations.length === 0}
            onChange={(event) => changeDestination(Number(event.target.value))}
          >
            {destinations.length === 0 && <option value="">No destinations available</option>}
            {destinations.map((destination) => (
              <option key={destination.id} value={destination.id}>
                {destination.city}, {destination.state}
              </option>
            ))}
          </select>
          {loadingDestinations && <p>Loading destinations...</p>}
          {destinationError && <p role="alert">Unable to load destinations: {destinationError}</p>}
        </div>

        <section className="trip-overview">

          <article className="overview-card">
            <div className="overview-icon">⌖</div>
            <div>
              <p>Destination</p>
              <h3>{selectedDestination ? `${selectedDestination.city}, ${selectedDestination.state}` : "Choose a destination"}</h3>
            </div>
          </article>

          <article className="overview-card">
            <div className="overview-icon">▦</div>
            <div>
              <p>Trip Duration</p>
              <h3>
                {tripDuration} {tripDuration === 1 ? "Day" : "Days"}
              </h3>
            </div>
          </article>

          <article className="overview-card">
            <div className="overview-icon">$</div>
            <div>
              <p>Estimated Trip Cost</p>
              <h3>${tripTotal.toFixed(2)}</h3>
            </div>
          </article>

        </section>

        <section className="itinerary-schedule">

          <div className="schedule-heading">
            <div>
              <p className="itinerary-eyebrow">
                MAKE THE MOST OF EVERY DAY
              </p>
              <h2>Your Daily Schedule</h2>
              <p>Explore and organize your daily activities.</p>
            </div>

            <span className="activity-count">
              {currentActivities.length} Activities
            </span>
          </div>

        <div className="duration-selector">
          <div className="duration-slider-header">
            <label htmlFor="trip-duration">
              Choose Trip Duration
            </label>

            <span className="duration-value">
              {tripDuration} {tripDuration === 1 ? "Day" : "Days"}
            </span>
          </div>

          <input
            id="trip-duration"
            type="range"
            min="1"
            max="7"
            step="1"
            value={tripDuration}
            onChange={(event) => {
              setTripDuration(Number(event.target.value));
              setSelectedDay(1);
              resetForm();
            }}
          />

          <div className="duration-range-labels">
            <span>1 Day</span>
            <span>7 Days</span>
          </div>
        </div>

          <div className="itinerary-day-tabs">
            {Array.from(
              { length: tripDuration },
              (_, index) => index + 1
            ).map((day) => (
              <button
                key={day}
                type="button"
                className={`itinerary-day-tab ${
                  selectedDay === day ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedDay(day);
                  resetForm();
                }}
              >
                <span>DAY {day}</span>
                <strong>
                  {day === 1
                    ? "Arrival"
                    : day === 2
                    ? "Explore"
                    : day === 3
                    ? "Discover"
                    : day === 4
                    ? "Adventure"
                    : day === 5
                    ? "Experience"
                    : "Departure"}
                </strong>
              </button>
            ))}
          </div>

          <div className="itinerary-activities">

            {currentActivities.length === 0 && (
              <p className="empty-activities">
                No activities planned for this day yet.
                Add your first activity below!
              </p>
            )}

            {currentActivities.map((item, index) => (
              <article
                className={`activity-card ${
                  draggedActivityId === item.id
                    ? "activity-card-dragging"
                    : ""
                }`}
                key={item.id}
                draggable={editingActivityId === null}
                onDragStart={(event) =>
                  handleDragStart(event, item.id)
                }
                onDragOver={handleDragOver}
                onDrop={(event) => handleDrop(event, item.id)}
                onDragEnd={() => setDraggedActivityId(null)}
              >
                <div className="activity-time">
                  <span>{formatTime(item.time)}</span>
                  <div className="activity-timeline-line" />
                </div>

                <div className="activity-card-content">

                  {editingActivityId === item.id ? (
                    <form
                      className="inline-edit-form"
                      onSubmit={handleSaveActivity}
                    >
                      <h3>Edit Activity</h3>

                      <div className="inline-edit-fields">

                        <label>
                          Activity Name
                          <input
                            type="text"
                            value={newActivity.activity}
                            onChange={(event) =>
                              setNewActivity({
                                ...newActivity,
                                activity: event.target.value,
                              })
                            }
                            required
                          />
                        </label>

                        <label>
                          Time
                          <input
                            type="time"
                            value={newActivity.time}
                            onChange={(event) =>
                              setNewActivity({
                                ...newActivity,
                                time: event.target.value,
                              })
                            }
                            required
                          />
                        </label>

                        <label>
                          Location
                          <input
                            type="text"
                            value={newActivity.location}
                            onChange={(event) =>
                              setNewActivity({
                                ...newActivity,
                                location: event.target.value,
                              })
                            }
                            required
                          />
                        </label>

                        <label>
                          Estimated Cost ($)
                          <input
                            type="number"
                            min="0"
                            step="0.01"
                            value={newActivity.cost}
                            onChange={(event) =>
                              setNewActivity({
                                ...newActivity,
                                cost: event.target.value,
                              })
                            }
                          />
                        </label>

                      </div>

                      <div className="inline-edit-actions">
                        <button
                          type="submit"
                          className="itinerary-add-button"
                        >
                          Save Changes
                        </button>

                        <button
                          type="button"
                          className="cancel-activity-button"
                          onClick={resetForm}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  ) : (
                    <>
                      <div className="activity-card-top">
                        <div className="activity-card-title">
                          <span className="activity-number">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <h3>{item.activity}</h3>
                        </div>

                        <div className="activity-actions">
                          <button
                            type="button"
                            className="edit-activity-button"
                            onClick={() => handleEditActivity(item)}
                          >
                            Edit
                          </button>

                          <button
                            type="button"
                            className="remove-activity-button"
                            onClick={() =>
                              handleRemoveActivity(item.id)
                            }
                          >
                            Remove
                          </button>
                        </div>
                      </div>

                      <p className="activity-location">
                        <span>⌖</span> {item.location}
                      </p>

                      <div className="activity-card-bottom">
                        <span className="activity-category">
                          {item.cost === null ? "Price unavailable" : item.cost === 0
                            ? "Free activity"
                            : "Estimated expense"}
                        </span>
                        <strong>{item.cost === null ? "N/A" : `$${item.cost.toFixed(2)}`}</strong>
                      </div>
                    </>
                  )}

                </div>
              </article>
            ))}

          </div>

          <button
            type="button"
            className="itinerary-add-button"
            onClick={handleAddActivity}
          >
            + Add Activity
          </button>

          {showAddForm && (
            <form
              className="add-activity-form"
              onSubmit={handleSaveActivity}
            >
              <h3>Add an Activity to Day {selectedDay}</h3>

              <label>
                Activity Name
                <input
                  type="text"
                  placeholder="Example: Visit the beach"
                  value={newActivity.activity}
                  onChange={(event) =>
                    setNewActivity({
                      ...newActivity,
                      activity: event.target.value,
                    })
                  }
                  required
                />
              </label>

              <label>
                Time
                <input
                  type="time"
                  value={newActivity.time}
                  onChange={(event) =>
                    setNewActivity({
                      ...newActivity,
                      time: event.target.value,
                    })
                  }
                  required
                />
              </label>

              <label>
                Location
                <input
                  type="text"
                  placeholder="Enter activity location"
                  value={newActivity.location}
                  onChange={(event) =>
                    setNewActivity({
                      ...newActivity,
                      location: event.target.value,
                    })
                  }
                  required
                />
              </label>

              <label>
                Estimated Cost ($)
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="0.00"
                  value={newActivity.cost}
                  onChange={(event) =>
                    setNewActivity({
                      ...newActivity,
                      cost: event.target.value,
                    })
                  }
                />
              </label>

              <button
                type="submit"
                className="itinerary-add-button"
              >
                Save Activity
              </button>

              <button
                type="button"
                className="cancel-activity-button"
                onClick={resetForm}
              >
                Cancel
              </button>
            </form>
          )}

          <div className="itinerary-daily-total">
            <div>
              <p>DAY {selectedDay} SUMMARY</p>
              <h3>Estimated Daily Total</h3>
            </div>
            <strong>${dailyTotal.toFixed(2)}</strong>
          </div>

        </section>
      </div>
    </main>
  );
}

export default ItineraryPlanner;