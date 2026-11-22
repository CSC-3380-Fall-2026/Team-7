import { useEffect, useState, type FormEvent, type DragEvent } from "react";
import "./planner.css";

type Activity = {
  id: number;
  time: string;
  activity: string;
  location: string;
  cost: number | null;
  category?: string;
};

type PricedOption = {
  name: string;
  description?: string;
  estimatedCostMin: number | null;
  estimatedCostMax: number | null;
  priceType?: string;
  website?: string;
  openingHours?: string;
  estimatedDuration?: number;
};
type DestinationActivity = PricedOption & { location: string; category?: string };
type DestinationRestaurant = PricedOption & { address: string; cuisine?: string; priceTier?: string };
type TransportationOption = PricedOption & { type: string };
type StayOption = {
  name: string;
  address: string;
  description?: string;
  estimatedNightlyCostMin: number | null;
  estimatedNightlyCostMax: number | null;
  priceType: string;
  amenities?: string[];
  website?: string;
};
type SeasonalOption = {
  condition: string;
  month: string[];
  attractions: Array<{ name: string; category: string; estimatedCost: number | null; website?: string }>;
  activities?: DestinationActivity[];
  event: Array<DestinationActivity & { startDate?: string; endDate?: string }>;
};
type Destination = {
  id: number;
  city: string;
  state: string;
  activities?: DestinationActivity[];
  breakfast?: DestinationRestaurant[];
  lunch?: DestinationRestaurant[];
  dinner?: DestinationRestaurant[];
  transportationOptions?: TransportationOption[];
  hotels?: StayOption[];
  vacationRentals?: StayOption[];
  weatherOptions?: SeasonalOption[];
};
type ChoiceCategory = "Activities" | "Breakfast" | "Lunch" | "Dinner" | "Transportation" | "Seasonal";
type Choice = { name: string; location: string; cost: number | null; detail: string; website?: string; priceType?: string; openingHours?: string; durationMinutes?: number; eventStart?: string; eventEnd?: string };
type Favorite = { category: ChoiceCategory; choice: Choice; day: number; time: string };
const choiceCategories: ChoiceCategory[] = ["Transportation", "Breakfast", "Activities", "Lunch", "Dinner", "Seasonal"];
const sortByTime = (items: Activity[]) => [...items].sort((a, b) => a.time.localeCompare(b.time));


function getChoices(destination: Destination, category: ChoiceCategory, startDate: string, duration: number): Choice[] {
  if (category === "Activities") return (destination.activities ?? []).map(item => ({ name: item.name, location: item.location, cost: estimateCost(item), detail: item.description ?? "", website: item.website, priceType: item.priceType, openingHours: item.openingHours, durationMinutes: item.estimatedDuration }));
  if (category === "Transportation") return (destination.transportationOptions ?? []).map(item => ({ name: item.name, location: item.type, cost: estimateCost(item), detail: item.description ?? "", website: item.website, priceType: item.priceType }));
  if (category === "Seasonal") {
    const choices: Choice[] = [];
    const tripMonths = new Set<number>();
    for (let day = 1; day <= duration; day++) {
      const date = dateForDay(startDate, day);
      if (date) tripMonths.add(Number(date.slice(5, 7)));
    }
    for (const season of destination.weatherOptions ?? []) {
      const seasonMonths = season.month.map(month => monthNumber(month)).filter(month => month > 0);
      const seasonMatches = tripMonths.size > 0 && seasonMonths.some(month => tripMonths.has(month));
      const suffix = `${season.condition} · ${season.month.join(", ")}`;
      if (seasonMatches) {
        for (const item of season.attractions ?? []) choices.push({ name: item.name, location: item.category, cost: item.estimatedCost, detail: suffix, website: item.website });
        for (const item of season.activities ?? []) choices.push({ name: item.name, location: item.location, cost: estimateCost(item), detail: `${suffix} · ${item.description ?? ""}`, website: item.website, priceType: item.priceType, openingHours: item.openingHours, durationMinutes: item.estimatedDuration });
      }
      for (const item of season.event ?? []) {
        // Dated events take precedence over a generic seasonal month label.
        const dated = Boolean(item.startDate && item.endDate);
        if (dated ? tripOverlaps(startDate, duration, item.startDate!, item.endDate!) : seasonMatches) {
          choices.push({ name: item.name, location: item.location, cost: estimateCost(item), detail: `${suffix} · ${item.description ?? ""}`, website: item.website, priceType: item.priceType, openingHours: item.openingHours, durationMinutes: item.estimatedDuration, eventStart: item.startDate, eventEnd: item.endDate });
        }
      }
    }
    return choices.filter((item, index, all) => all.findIndex(other => other.name === item.name && other.location === item.location) === index);
  }
  const meals = category === "Breakfast" ? destination.breakfast : category === "Lunch" ? destination.lunch : destination.dinner;
  return (meals ?? []).map(item => ({ name: item.name, location: item.address, cost: estimateCost(item), detail: [item.cuisine, item.priceTier, item.description].filter(Boolean).join(" · "), website: item.website, priceType: item.priceType, openingHours: item.openingHours, durationMinutes: item.estimatedDuration }));
}

// Only filter hours that can be interpreted confidently. Unclear/missing hours remain visible as unverified.
function monthNumber(month: string): number {
  const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
  return months.findIndex(name => name.startsWith(month.toLowerCase().slice(0, 3))) + 1;
}
function tripOverlaps(start: string, duration: number, eventStart: string, eventEnd: string): boolean {
  if (!start || !/^\d{4}-\d{2}-\d{2}$/.test(eventStart) || !/^\d{4}-\d{2}-\d{2}$/.test(eventEnd)) return false;
  return start <= eventEnd && dateForDay(start, duration) >= eventStart;
}
const weekdayTokens = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
function appliesToDay(label: string, weekday: number): boolean {
  const text = label.toLowerCase();
  if (/daily|every day|seven days|7 days/.test(text)) return true;
  const ranges = [...text.matchAll(/(sun|mon|tue|wed|thu|fri|sat)(?:day)?\s*[-–]\s*(sun|mon|tue|wed|thu|fri|sat)/g)];
  if (ranges.some(match => {
    const from = weekdayTokens.indexOf(match[1]);
    const to = weekdayTokens.indexOf(match[2]);
    return from <= to ? weekday >= from && weekday <= to : weekday >= from || weekday <= to;
  })) return true;
  return new RegExp(`\\b${weekdayTokens[weekday]}(?:day)?\\b`, "i").test(text);
}
function parseClock(hour: string, minute: string | undefined, meridiem: string): number {
  const h = Number(hour);
  const m = Number(minute ?? "0");
  return ((h % 12) + (meridiem.toLowerCase() === "pm" ? 12 : 0)) * 60 + m;
}
function hoursStatus(hours: string | undefined, date: string, time: string, durationMinutes?: number): "open" | "closed" | "unknown" {
  if (!hours || !date || !time) return "unknown";
  const weekday = new Date(`${date}T12:00:00`).getDay();
  const segments = hours.split(/;|\n/).map(part => part.trim());
  const startMinutes = Number(time.slice(0, 2)) * 60 + Number(time.slice(3, 5));
  if (!Number.isFinite(startMinutes)) return "unknown";
  let sawRelevantHours = false;
  for (const segment of segments) {
    const lower = segment.toLowerCase();
    const hasDay = /daily|every day|sun|mon|tue|wed|thu|fri|sat|weekday|weekend/i.test(lower);
    const relevant = !hasDay || appliesToDay(lower, weekday) || (/weekdays?/.test(lower) && weekday >= 1 && weekday <= 5) || (/weekends?/.test(lower) && (weekday === 0 || weekday === 6));
    if (!relevant) continue;
    if (/closed/.test(lower) && !/\d{1,2}(?::\d{2})?\s*(?:am|pm)\s*[-–]\s*\d/.test(lower)) return "closed";
    const ranges = [...segment.matchAll(/(\d{1,2})(?::(\d{2}))?\s*(am|pm)\s*[-–]\s*(\d{1,2})(?::(\d{2}))?\s*(am|pm)/gi)];
    for (const match of ranges) {
      sawRelevantHours = true;
      const open = parseClock(match[1], match[2], match[3]);
      let close = parseClock(match[4], match[5], match[6]);
      if (close <= open) close += 1440;
      if (startMinutes >= open && startMinutes + (durationMinutes ?? 0) <= close) return "open";
    }
  }
  return sawRelevantHours ? "closed" : "unknown";
}
function choiceStatus(choice: Choice, date: string, time: string): "open" | "closed" | "unknown" {
  if (choice.eventStart && choice.eventEnd && (date < choice.eventStart || date > choice.eventEnd)) return "closed";
  return hoursStatus(choice.openingHours, date, time, choice.durationMinutes);
}

function estimateCost(item: {
  estimatedCostMin: number | null;
  estimatedCostMax: number | null;
}): number | null {
  const { estimatedCostMin: min, estimatedCostMax: max } = item;
  if (min !== null && max !== null) return (min + max) / 2;
  return min ?? max ?? null;
}

function estimateNightly(item: StayOption): number | null {
  const { estimatedNightlyCostMin: min, estimatedNightlyCostMax: max } = item;
  if (min !== null && max !== null) return (min + max) / 2;
  return min ?? max ?? null;
}


const emptyForm = {
  time: "",
  activity: "",
  location: "",
  cost: "",
  category: "Other",
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

function dateForDay(start: string, day: number): string {
  if (!start) return "";
  const date = new Date(`${start}T12:00:00`);
  date.setDate(date.getDate() + day - 1);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

const activityCategories = [
  "Entertainment", "Food & Dining", "Outdoor & Nature", "Beaches & Water Activities",
  "History & Culture", "Museums & Art", "Nightlife", "Sports & Recreation",
  "Family Friendly", "Theme Parks", "Sightseeing & Landmarks", "Wellness & Relaxation",
  "Festivals and Events", "Shopping", "Transportation", "Other",
];

function daysBetweenInclusive(start: string, end: string): number {
  if (!start || !end) return 0;
  const startTime = Date.parse(`${start}T12:00:00Z`);
  const endTime = Date.parse(`${end}T12:00:00Z`);
  return Math.round((endTime - startTime) / 86400000) + 1;
}

function ItineraryPlanner() {
  const [tripStartDate, setTripStartDate] = useState("");
  const [tripEndDate, setTripEndDate] = useState("");
  const tripDuration = daysBetweenInclusive(tripStartDate, tripEndDate);
  const [plannerReady, setPlannerReady] = useState(false);
  const [favoriteCategory, setFavoriteCategory] = useState<ChoiceCategory>("Transportation");
  const [favorites, setFavorites] = useState<Record<string, Favorite>>({});
  const [arrivalTime, setArrivalTime] = useState("14:00");
  const [checkInTime, setCheckInTime] = useState("16:00");
  const [departureTime, setDepartureTime] = useState("11:00");
  const [includeDeparture, setIncludeDeparture] = useState(false);
  const maxEndDate = dateForDay(tripStartDate, 7);
  const validTripDates = tripDuration >= 1 && tripDuration <= 7;
  function updateStartDate(value: string) {
    setTripStartDate(value);
    if (!value) { setTripEndDate(""); return; }
    const latest = dateForDay(value, 7);
    if (!tripEndDate || tripEndDate < value || tripEndDate > latest) {
      setTripEndDate(dateForDay(value, 3));
    }
    setSelectedDay(1);
    setBrowseDay(1);
  }
  function updateEndDate(value: string) {
    if (!tripStartDate || !value || value < tripStartDate || value > maxEndDate) return;
    setTripEndDate(value);
    setSelectedDay(day => Math.min(day, daysBetweenInclusive(tripStartDate, value)));
    setBrowseDay(day => Math.min(day, daysBetweenInclusive(tripStartDate, value)));
  }
  const [selectedStay, setSelectedStay] = useState("");
  const [choiceTarget, setChoiceTarget] = useState<number | "add" | null>(null);
  const [choiceCategory, setChoiceCategory] = useState<ChoiceCategory>("Activities");
  const [choiceSearch, setChoiceSearch] = useState("");
  const [choiceTime, setChoiceTime] = useState("12:00");
  const [browseDay, setBrowseDay] = useState(1);
  const [browseTime, setBrowseTime] = useState("14:00");

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
        setActivities({});
        setSelectedStay("");
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
    setActivities({});
    setPlannerReady(false);
    setFavorites({});
    setSelectedStay("");
    setChoiceTarget(null);
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

  const stayOptions = selectedDestination ? [
    ...(selectedDestination.hotels ?? []).map(item => ({ ...item, kind: "Hotel" })),
    ...(selectedDestination.vacationRentals ?? []).map(item => ({ ...item, kind: "Vacation rental" })),
  ] : [];
  const stay = stayOptions.find(item => `${item.kind}:${item.name}` === selectedStay);
  const stayNightly = stay ? estimateNightly(stay) : null;
  const stayTotal = stayNightly === null ? null : stayNightly * Math.max(0, tripDuration - 1);
  const choiceOptions = selectedDestination ? getChoices(selectedDestination, choiceCategory, tripStartDate, tripDuration).filter(item => choiceStatus(item, dateForDay(tripStartDate, selectedDay), choiceTarget === "add" ? choiceTime : (currentActivities.find(activity => activity.id === choiceTarget)?.time ?? choiceTime)) !== "closed").filter(item => `${item.name} ${item.location} ${item.detail}`.toLowerCase().includes(choiceSearch.toLowerCase())) : [];

  const favoriteOptions = selectedDestination ? getChoices(selectedDestination, favoriteCategory, tripStartDate, tripDuration).filter(item => choiceStatus(item, dateForDay(tripStartDate, browseDay), browseTime) !== "closed") : [];
  const favoriteCount = Object.keys(favorites).length;
  const invalidFavorites = Object.values(favorites).filter(item => choiceStatus(item.choice, dateForDay(tripStartDate, Math.min(tripDuration, item.day)), item.time) === "closed");

  function toggleFavorite(category: ChoiceCategory, choice: Choice) {
    const key = `${category}:${choice.name}:${choice.location}`;
    setFavorites(previous => {
      const next = { ...previous };
      if (next[key]) delete next[key];
      else next[key] = { category, choice, day: browseDay, time: browseTime };
      return next;
    });
  }

  function updateFavorite(key: string, changes: Partial<Pick<Favorite, "day" | "time">>) {
    setFavorites(previous => previous[key] ? { ...previous, [key]: { ...previous[key], ...changes } } : previous);
  }

  function addTravelMilestones(result: Record<number, Activity[]>, startingId: number): void {
    // These are user-configured schedule markers, not invented flights or bookings.
    result[1].push({ id: startingId, time: arrivalTime, activity: "Arrive at destination", location: selectedDestination ? `${selectedDestination.city}, ${selectedDestination.state}` : "Destination", cost: null, category: "Travel" });
    if (selectedStay && stay) {
      result[1].push({ id: startingId + 1, time: checkInTime, activity: `Check in: ${stay.name}`, location: stay.address, cost: null, category: "Accommodation" });
    }
    if (includeDeparture) {
      result[tripDuration].push({ id: startingId + 2, time: departureTime, activity: "Depart destination", location: selectedDestination ? `${selectedDestination.city}, ${selectedDestination.state}` : "Destination", cost: null, category: "Travel" });
    }
  }

  function generateFromFavorites() {
    const selected = Object.values(favorites);
    if (!selected.length) return;
    const result: Record<number, Activity[]> = {};
    for (let day = 1; day <= tripDuration; day++) result[day] = [];
    selected.forEach(({ category, choice, day, time }, index) => {
      if (choiceStatus(choice, dateForDay(tripStartDate, Math.min(tripDuration, day)), time) === "closed") return;
      const safeDay = Math.min(tripDuration, Math.max(1, day));
      result[safeDay].push({ id: index + 1, time, activity: choice.name, location: choice.location, cost: choice.cost, category });
    });
    addTravelMilestones(result, selected.length + 1);
    for (const day of Object.keys(result)) result[Number(day)] = sortByTime(result[Number(day)]);
    setActivities(result);
    setSelectedDay(1);
    setPlannerReady(true);
    resetForm();
  }

  function surpriseMe() {
    if (!selectedDestination || !validTripDates) return;
    const result: Record<number, Activity[]> = {};
    let nextId = 1;
    const suggestions: Array<{ category: ChoiceCategory; time: string }> = [
      { category: "Breakfast", time: "09:00" }, { category: "Activities", time: "11:00" },
      { category: "Lunch", time: "13:00" }, { category: "Activities", time: "15:00" },
      { category: "Dinner", time: "19:00" },
    ];
    for (let day = 1; day <= tripDuration; day++) {
      result[day] = [];
      for (const [slotIndex, slot] of suggestions.entries()) {
        if (day === 1 && slot.time <= arrivalTime) continue;
        if (day === tripDuration && includeDeparture && slot.time >= departureTime) continue;
        const choices = getChoices(selectedDestination, slot.category, tripStartDate, tripDuration)
          .filter(choice => choiceStatus(choice, dateForDay(tripStartDate, day), slot.time) !== "closed");
        if (!choices.length) continue;
        const chosen = choices[((day - 1) * 2 + slotIndex) % choices.length];
        if (result[day].some(item => item.activity === chosen.name)) continue;
        result[day].push({ id: nextId++, time: slot.time, activity: chosen.name, location: chosen.location, cost: chosen.cost, category: slot.category });
      }
    }
    addTravelMilestones(result, nextId);
    for (const day of Object.keys(result)) result[Number(day)] = sortByTime(result[Number(day)]);
    setActivities(result);
    setSelectedDay(1);
    setPlannerReady(true);
    resetForm();
  }

  function editMyFavorites() {
    setPlannerReady(false);
    setChoiceTarget(null);
    resetForm();
  }

  function chooseOption(choice: Choice) {
    if (choiceTarget === null) return;
    const plannedTime = choiceTarget === "add" ? choiceTime : (currentActivities.find(activity => activity.id === choiceTarget)?.time ?? choiceTime);
    if (choiceStatus(choice, dateForDay(tripStartDate, selectedDay), plannedTime) === "closed") return;
    if (choiceTarget === "add") {
      const id = Math.max(0, ...Object.values(activities).flat().map(item => item.id)) + 1;
      setActivities(prev => ({ ...prev, [selectedDay]: [...(prev[selectedDay] ?? []), { id, time: choiceTime, activity: choice.name, location: choice.location, cost: choice.cost, category: choiceCategory }] }));
    } else {
      setActivities(prev => ({ ...prev, [selectedDay]: (prev[selectedDay] ?? []).map(item => item.id === choiceTarget ? { ...item, activity: choice.name, location: choice.location, cost: choice.cost, category: choiceCategory } : item) }));
    }
    setChoiceTarget(null);
    setChoiceSearch("");
  }

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
    setChoiceTarget(null);
    setShowAddForm(true);
  }

  function handleEditActivity(item: Activity) {
    setShowAddForm(false);

    setNewActivity({
      time: toTimeInputValue(item.time),
      activity: item.activity,
      location: item.location,
      cost: item.cost === null ? "" : String(item.cost),
      category: item.category ?? "Other",
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
      category: newActivity.category,
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

        {selectedDestination && !plannerReady && (
          <section className="itinerary-schedule" style={{ marginBottom: 24 }}>
            <div className="schedule-heading">
              <div>
                <p className="itinerary-eyebrow">LET'S PERSONALIZE YOUR ADVENTURE</p>
                <h2>Build Your Perfect {selectedDestination.city} Trip</h2>
                <p>Choose what interests you, then we'll organize your favorites into an itinerary.</p>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12, marginBottom: 20 }}>
              <label htmlFor="setup-date">Start Date
                <input id="setup-date" type="date" value={tripStartDate} onChange={event => updateStartDate(event.target.value)} style={{ display: "block", width: "100%", padding: 10, marginTop: 8, borderRadius: 8 }} />
              </label>
              <label htmlFor="setup-end-date">End Date
                <input id="setup-end-date" type="date" min={tripStartDate || undefined} max={maxEndDate || undefined} disabled={!tripStartDate} value={tripEndDate} onChange={event => updateEndDate(event.target.value)} style={{ display: "block", width: "100%", padding: 10, marginTop: 8, borderRadius: 8 }} />
              </label>
            </div>
            <p className="small-text">{validTripDates ? `${tripDuration} ${tripDuration === 1 ? "day" : "days"} selected` : "Select your travel dates (up to 7 days)."}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12, marginBottom: 20 }}>
              <label>Expected arrival time
                <input aria-label="Expected arrival time" type="time" value={arrivalTime} onChange={event => setArrivalTime(event.target.value)} style={{ display: "block", width: "100%", padding: 10, marginTop: 6 }} />
              </label>
              <label>Expected check-in time
                <input aria-label="Expected check-in time" type="time" value={checkInTime} onChange={event => setCheckInTime(event.target.value)} style={{ display: "block", width: "100%", padding: 10, marginTop: 6 }} />
              </label>
            </div>
            <label htmlFor="setup-stay">Where will you stay? (optional)</label>
            <select id="setup-stay" value={selectedStay} onChange={event => setSelectedStay(event.target.value)} style={{ display: "block", width: "100%", padding: 12, margin: "8px 0 16px", borderRadius: 10 }}>
              <option value="">I'll decide later</option>
              {stayOptions.map(item => <option key={`${item.kind}:${item.name}`} value={`${item.kind}:${item.name}`}>{item.kind}: {item.name}</option>)}
            </select>
            <label style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12 }}>
              <input type="checkbox" checked={includeDeparture} onChange={event => setIncludeDeparture(event.target.checked)} /> Add departure time
            </label>
            {includeDeparture && <label>Expected departure time
              <input type="time" value={departureTime} onChange={event => setDepartureTime(event.target.value)} style={{ display: "block", padding: 10, margin: "6px 0 16px" }} />
            </label>}
            <h3>Pick Your Favorites</h3>
            {!validTripDates && (
              <p style={{ color: "#183b2b", background: "#edf4e6", borderLeft: "4px solid #82a947", padding: "10px 14px", borderRadius: 8, fontSize: 14, fontWeight: 500, margin: "12px 0" }}>
                Select your travel dates above to get started.
              </p>
            )}
            <p style={{ color: "#536b5b", fontSize: 14, margin: "10px 0 16px" }}>Find experiences you'll love.</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 12 }}>
              <label>Day <select value={Math.max(1, Math.min(browseDay, tripDuration))} onChange={event => setBrowseDay(Number(event.target.value))}>{Array.from({ length: Math.max(1, tripDuration) }, (_, index) => <option key={index} value={index + 1}>Day {index + 1}</option>)}</select></label>
              <label>Preferred time <input type="time" value={browseTime} onChange={event => setBrowseTime(event.target.value)} /></label>
            </div>
            <p className="small-text" style={{ color: "#183b2b", fontWeight: 700, margin: "8px 0 4px" }}>Category {choiceCategories.indexOf(favoriteCategory) + 1} of {choiceCategories.length}</p>
            <label htmlFor="favorite-category" style={{ color: "#183b2b", fontWeight: 600 }}>Choose a Category</label>
            <select id="favorite-category" value={favoriteCategory} onChange={event => setFavoriteCategory(event.target.value as ChoiceCategory)} style={{ display: "block", width: "100%", padding: 12, margin: "8px 0 16px", borderRadius: 10 }}>
              {choiceCategories.map(category => <option key={category} value={category}>{category}</option>)}
            </select>
            <div style={{ display: "grid", gap: 10, maxHeight: 340, overflowY: "auto", marginBottom: 18 }}>
              {favoriteOptions.map((choice, index) => {
                const key = `${favoriteCategory}:${choice.name}:${choice.location}`;
                const checked = Boolean(favorites[key]);
                return (
                  <label key={`${key}:${index}`} style={{ display: "flex", alignItems: "flex-start", gap: 12, border: `1px solid ${checked ? "#82a947" : "#d9e3d5"}`, borderRadius: 10, padding: 12, cursor: "pointer" }}>
                    <input type="checkbox" checked={checked} onChange={() => toggleFavorite(favoriteCategory, choice)} style={{ marginTop: 5 }} />
                    <span><strong>{choice.name}</strong><br /><span className="muted">{choice.location}</span><br />
                      <span className="small-text">{choice.cost === null ? "Price unavailable" : `Estimated $${choice.cost.toFixed(2)}`}</span><br />
                      <span className="small-text">{choice.openingHours ? `Hours: ${choice.openingHours}` : "Hours unavailable — verify before visiting"}</span>
                    </span>
                  </label>
                );
              })}
              {favoriteOptions.length === 0 && <p>No matching recommendations for this date and time. Try a different time or category.</p>}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 18 }}>
              <button type="button" className="cancel-activity-button" disabled={choiceCategories.indexOf(favoriteCategory) === 0} onClick={() => setFavoriteCategory(choiceCategories[choiceCategories.indexOf(favoriteCategory) - 1])}>← Back</button>
              <button type="button" className="itinerary-add-button" disabled={choiceCategories.indexOf(favoriteCategory) === choiceCategories.length - 1} onClick={() => setFavoriteCategory(choiceCategories[choiceCategories.indexOf(favoriteCategory) + 1])}>Next Category →</button>
            </div>
            {favoriteCount > 0 && <div style={{ marginBottom: 18 }}>
              <h3>Schedule Your Selections</h3>
              <p className="muted">Choose the day and expected time for each place. You can change everything after building.</p>
              <div style={{ display: "grid", gap: 10 }}>
                {Object.entries(favorites).map(([key, favorite]) => <div key={key} style={{ border: "1px solid #d9e3d5", borderRadius: 10, padding: 12 }}>
                  <strong>{favorite.choice.name}</strong><p className="small-text">{favorite.category}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                    <label>Day <select aria-label={`Day for ${favorite.choice.name}`} value={Math.max(1, Math.min(tripDuration, favorite.day))} onChange={event => updateFavorite(key, { day: Number(event.target.value) })} style={{ marginLeft: 6, padding: 6 }}>
                      {Array.from({ length: Math.max(1, tripDuration) }, (_, index) => index + 1).map(day => <option key={day} value={day}>Day {day}</option>)}
                    </select></label>
                    <label>Time <input aria-label={`Time for ${favorite.choice.name}`} type="time" value={favorite.time} onChange={event => updateFavorite(key, { time: event.target.value })} style={{ marginLeft: 6, padding: 6 }} /></label>
                    {choiceStatus(favorite.choice, dateForDay(tripStartDate, Math.min(tripDuration, favorite.day)), favorite.time) === "closed" && <span role="alert" style={{ color: "#a15c16" }}>Not open or not available at this date/time — please reschedule</span>}
                    {choiceStatus(favorite.choice, dateForDay(tripStartDate, Math.min(tripDuration, favorite.day)), favorite.time) === "unknown" && <span className="small-text">Hours not verified</span>}
                  </div>
                </div>)}
              </div>
            </div>}
            {selectedStay && checkInTime < arrivalTime && <p role="alert" style={{ color: "#a15c16" }}>Check-in is scheduled before arrival. Adjust your expected times before building.</p>}
            {Object.values(favorites).some(item => item.day === 1 && item.time < arrivalTime) && <p role="alert" style={{ color: "#a15c16" }}>Some Day 1 activities are scheduled before you arrive. Adjust their times or move them to another day.</p>}
            {includeDeparture && Object.values(favorites).some(item => item.day === tripDuration && item.time > departureTime) && <p role="alert" style={{ color: "#a15c16" }}>Some activities on your last day are scheduled after departure.</p>}
            <p><strong>{favoriteCount} {favoriteCount === 1 ? "favorite" : "favorites"} selected</strong></p>
            {invalidFavorites.length > 0 && <p role="alert" style={{ color: "#a15c16" }}>Please change the date or time of {invalidFavorites.length} unavailable selection(s) before building.</p>}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 12 }}>
              <button type="button" className="itinerary-add-button" disabled={favoriteCount === 0 || invalidFavorites.length > 0 || !validTripDates} onClick={generateFromFavorites}>Build My Itinerary</button>
              <button type="button" className="cancel-activity-button" disabled={!validTripDates} onClick={surpriseMe}>Surprise Me</button>
            </div>
            <p className="small-text" style={{ marginTop: 12 }}>Arrival and check-in are added as editable schedule items. Please allow time for travel, opening hours, and check-in policies. Times are your estimates, not confirmed reservations.</p>
            <p className="small-text">You can still add, edit, remove, and reorder activities after building your itinerary.</p>
          </section>
        )}

        {plannerReady && <div style={{ marginBottom: 16 }}>
          <button type="button" className="cancel-activity-button" onClick={editMyFavorites}>← Edit Trip Preferences</button>
        </div>}

        {plannerReady && (
          <>
        {selectedDestination && (
          <section className="itinerary-schedule" style={{ marginBottom: 24 }}>
            <div className="schedule-heading"><div><p className="itinerary-eyebrow">ACCOMMODATION OPTIONS</p><h2>Where will you stay?</h2><p>Explore hotels and vacation rentals for your trip.</p></div></div>
            <label htmlFor="stay-select">Accommodation</label>
            <select id="stay-select" value={selectedStay} onChange={event => setSelectedStay(event.target.value)} style={{ display: "block", width: "100%", padding: 12, marginTop: 8, marginBottom: 12, borderRadius: 10 }}>
              <option value="">No accommodation selected</option>
              {stayOptions.map(item => <option key={`${item.kind}:${item.name}`} value={`${item.kind}:${item.name}`}>{item.kind}: {item.name}</option>)}
            </select>
            {stay && <div className="activity-card-content" style={{ padding: 12 }}>
              <h3>{stay.name}</h3><p className="muted">{stay.address}</p>
              {stay.description && <p>{stay.description}</p>}
              {stay.amenities?.length ? <p className="muted">Amenities: {stay.amenities.slice(0, 6).join(", ")}</p> : null}
              <p><strong>{stayNightly === null ? "Nightly price unavailable" : `Estimated $${stayNightly.toFixed(2)} / night`}</strong></p>
              <p className="muted">{stayTotal === null ? "Stay cost not included in numeric total" : `Estimated ${Math.max(0, tripDuration - 1)}-night stay: $${stayTotal.toFixed(2)}`}</p>
              {stay.website && <a href={stay.website} target="_blank" rel="noopener noreferrer">Accommodation website</a>}
            </div>}
          </section>
        )}

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
              <h3>${(tripTotal + (stayTotal ?? 0)).toFixed(2)}</h3>
              {stay && stayTotal === null && <p className="small-text">Accommodation price unavailable</p>}
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

        <div className="destination-selector" style={{ marginBottom: 18 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
            <label htmlFor="trip-start-date">Start Date
              <input id="trip-start-date" type="date" value={tripStartDate} onChange={event => updateStartDate(event.target.value)} style={{ display: "block", marginTop: 8, padding: 10, borderRadius: 8 }} />
            </label>
            <label htmlFor="trip-end-date">End Date
              <input id="trip-end-date" type="date" min={tripStartDate || undefined} max={maxEndDate || undefined} disabled={!tripStartDate} value={tripEndDate} onChange={event => updateEndDate(event.target.value)} style={{ display: "block", marginTop: 8, padding: 10, borderRadius: 8 }} />
            </label>
          </div>
          <p className="small-text">{validTripDates ? `${tripDuration} ${tripDuration === 1 ? "day" : "days"} selected` : "Choose travel dates for a trip of up to 7 days."}</p>
          {tripStartDate && <p className="small-text">Day {selectedDay}: {dateForDay(tripStartDate, selectedDay)}</p>}
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
                {tripStartDate && <small>{dateForDay(tripStartDate, day)}</small>}
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
                        <label>Category
                          <select value={newActivity.category}
                            onChange={event => setNewActivity({ ...newActivity, category: event.target.value })}>
                            {activityCategories.map(category => <option key={category} value={category}>{category}</option>)}
                          </select>
                        </label>

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

                      {item.category && <p className="small-text">{item.category}</p>}
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
            + Add Your Own Activity
          </button>

          <button type="button" className="itinerary-add-button" style={{ marginLeft: 10 }} onClick={() => { resetForm(); setChoiceTarget("add"); setChoiceCategory("Activities"); setChoiceSearch(""); }}>Explore Activities & Experiences</button>

          {choiceTarget !== null && selectedDestination && (
            <section className="planner-panel" style={{ marginBottom: 20, padding: 18 }}>
              <div className="section-heading"><div><h3>{choiceTarget === "add" ? `Explore activities & experiences for Day ${selectedDay}` : "Explore other options"}</h3><p className="muted">Explore recommendations in {selectedDestination.city}.</p></div></div>
              <label htmlFor="choice-category">Category</label>
              <select id="choice-category" value={choiceCategory} onChange={event => setChoiceCategory(event.target.value as ChoiceCategory)} style={{ display: "block", width: "100%", padding: 10, margin: "8px 0", borderRadius: 8 }}>
                {(["Activities", "Breakfast", "Lunch", "Dinner", "Transportation", "Seasonal"] as ChoiceCategory[]).map(category => <option key={category} value={category}>{category}</option>)}
              </select>
              {choiceTarget === "add" && <label>Time <input type="time" value={choiceTime} onChange={event => setChoiceTime(event.target.value)} /></label>}
              <p className="small-text">Recommendations are filtered for Day {selectedDay} ({dateForDay(tripStartDate, selectedDay) || "choose travel dates"}) at {formatTime(choiceTarget === "add" ? choiceTime : (currentActivities.find(item => item.id === choiceTarget)?.time ?? choiceTime))}. Missing or unclear hours are shown as unverified.</p>
              <input aria-label="Search choices" placeholder="Search available options" value={choiceSearch} onChange={event => setChoiceSearch(event.target.value)} style={{ display: "block", width: "100%", padding: 10, margin: "10px 0", borderRadius: 8 }} />
              <div style={{ maxHeight: 330, overflowY: "auto", display: "grid", gap: 10 }}>
                {choiceOptions.map((option, index) => <div key={`${choiceCategory}:${option.name}:${index}`} style={{ border: "1px solid #d9e3d5", padding: 12, borderRadius: 10 }}>
                  <strong>{option.name}</strong>
                  <p className="muted">{option.location}</p>
                  {option.detail && <p className="small-text">{option.detail}</p>}
                  <p className="small-text">{option.openingHours ? `Hours: ${option.openingHours}` : "Hours unavailable — verify before visiting"}</p>
                  <p><strong>{option.cost === null ? "Price unavailable" : `Estimated $${option.cost.toFixed(2)}`}</strong>{option.priceType ? ` · ${option.priceType}` : ""}</p>
                  {option.website && <a href={option.website} target="_blank" rel="noopener noreferrer" style={{ marginRight: 12 }}>Website</a>}
                  <button type="button" className="itinerary-add-button" onClick={() => chooseOption(option)}>Choose this option</button>
                </div>)}
                {choiceOptions.length === 0 && <p>No matching options for this date and time. Try another time or category.</p>}
              </div>
              <button type="button" className="cancel-activity-button" style={{ marginTop: 12 }} onClick={() => setChoiceTarget(null)}>Cancel</button>
            </section>
          )}

          {showAddForm && (
            <form
              className="add-activity-form"
              onSubmit={handleSaveActivity}
            >
              <h3>Add Your Own Activity to Day {selectedDay}</h3>
              {tripStartDate && <p className="muted">Date: {dateForDay(tripStartDate, selectedDay)}</p>}
              <label>
                Category
                <select value={newActivity.category}
                  onChange={event => setNewActivity({ ...newActivity, category: event.target.value })}>
                  {activityCategories.map(category => <option key={category} value={category}>{category}</option>)}
                </select>
              </label>

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
          </>
        )}
      </div>
    </main>
  );
}

export default ItineraryPlanner;