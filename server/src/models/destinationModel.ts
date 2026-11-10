import { Schema, model } from "mongoose";

export interface Attraction {
  name: string;
  category: string;
  estimatedCost: number | null;
}

export interface WeatherOption {
  condition: string;
  month: string[];
  attractions: Attraction[];
  activities: string[];
  event: string[];
}

export interface Destination {
  id: number;
  city: string;
  state: string;
  description: string;
  duration: string;
  weatherOptions: WeatherOption[];
  transportation: string[];
}

const attractionSchema = new Schema<Attraction>({
  name: { type: String, required: true },
  category: { type: String, required: true },
  estimatedCost: { type: Number, default: null },
});

const weatherOptionSchema = new Schema<WeatherOption>({
  condition: { type: String, required: true },
  month: { type: [String], default: [] },
  attractions: { type: [attractionSchema], default: [] },
  activities: { type: [String], default: [] },
  event: { type: [String], default: [] },
});

const destinationSchema = new Schema<Destination>({
  id: { type: Number, required: true, unique: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: String, required: true },
  weatherOptions: { type: [weatherOptionSchema], default: [] },
  transportation: { type: [String], default: [] },
});

export const DestinationModel = model<Destination>("Destination", destinationSchema);