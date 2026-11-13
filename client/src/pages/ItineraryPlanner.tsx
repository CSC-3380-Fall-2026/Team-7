import { useState, type FormEvent, type DragEvent } from "react";
import "./planner.css";

type Activity = {
  id: number;
  time: string;
  activity: string;
  location: string;
  cost: number;
};

const initialItinerary: Record<number, Activity[]> = {
  1: [
    { id: 1, time: "9:00 AM", activity: "Arrive in Miami", location: "Miami International Airport", cost: 0 },
    { id: 2, time: "11:00 AM", activity: "Hotel Check-In", location: "Ocean Drive Hotel", cost: 450 },
    { id: 3, time: "1:00 PM", activity: "Lunch", location: "Crazy About You", cost: 25 },
    { id: 4, time: "3:00 PM", activity: "Beach Walk", location: "South Beach", cost: 0 },
    { id: 5, time: "7:00 PM", activity: "Dinner", location: "Cactus Club Restaurant", cost: 60 },
  ],
  2: [
    { id: 6, time: "9:00 AM", activity: "Breakfast", location: "Local Cafe", cost: 20 },
    { id: 7, time: "11:00 AM", activity: "Visit Art Deco District", location: "South Beach", cost: 0 },
    { id: 8, time: "2:00 PM", activity: "Lunch", location: "Ocean Drive", cost: 35 },
  ],
  3: [
    { id: 9, time: "10:00 AM", activity: "Visit Little Havana", location: "Calle Ocho", cost: 15 },
    { id: 10, time: "1:00 PM", activity: "Shopping", location: "Bayside Marketplace", cost: 50 },
    { id: 11, time: "6:00 PM", activity: "Dinner", location: "Miami Beach", cost: 65 },
  ],
  4: [
    { id: 12, time: "9:00 AM", activity: "Breakfast", location: "Miami Beach", cost: 20 },
    { id: 13, time: "11:00 AM", activity: "Visit Wynwood Walls", location: "Wynwood", cost: 15 },
    { id: 14, time: "2:00 PM", activity: "Lunch", location: "Wynwood", cost: 30 },
  ],
  5: [
    { id: 15, time: "10:00 AM", activity: "Boat Tour", location: "Biscayne Bay", cost: 75 },
    { id: 16, time: "1:00 PM", activity: "Lunch", location: "Bayside Marketplace", cost: 35 },
    { id: 17, time: "6:00 PM", activity: "Dinner", location: "Miami Beach", cost: 60 },
  ],
  6: [
    { id: 18, time: "9:00 AM", activity: "Breakfast", location: "Local Cafe", cost: 20 },
    { id: 19, time: "11:00 AM", activity: "Shopping", location: "Lincoln Road", cost: 40 },
    { id: 20, time: "5:00 PM", activity: "Final Beach Visit", location: "South Beach", cost: 0 },
  ],
};

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
  const [selectedDay, setSelectedDay] = useState(1);

  const [activities, setActivities] =
    useState<Record<number, Activity[]>>(initialItinerary);

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
    .reduce((total, item) => total + item.cost, 0);

  const dailyTotal = currentActivities.reduce(
    (total, item) => total + item.cost,
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
      cost: String(item.cost),
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
      cost: Number(newActivity.cost),
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

      const [movedActivity] = dayActivities.splice(fromIndex, 1);

      dayActivities.splice(toIndex, 0, movedActivity);

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

        <section className="trip-overview">

          <article className="overview-card">
            <div className="overview-icon">⌖</div>
            <div>
              <p>Destination</p>
              <h3>Miami, Florida</h3>
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
            <span>Choose Trip Duration:</span>

            <select
              value={tripDuration}
              onChange={(event) => {
                setTripDuration(Number(event.target.value));
                setSelectedDay(1);
                resetForm();
              }}
            >
              {[1, 2, 3, 4, 5, 6].map((days) => (
                <option key={days} value={days}>
                  {days} {days === 1 ? "Day" : "Days"}
                </option>
              ))}
            </select>
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
                            required
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
                          {item.cost === 0
                            ? "Free activity"
                            : "Estimated expense"}
                        </span>
                        <strong>${item.cost.toFixed(2)}</strong>
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
                  required
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