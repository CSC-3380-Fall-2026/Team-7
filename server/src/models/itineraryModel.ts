import { Schema, model, Types } from "mongoose";
import { Activity, activitySchema } from "./activityModel";

export interface ItineraryDay {
  dayNumber: number;
  activities: Activity[];
}

export interface Itinerary {
  userId: Types.ObjectId;
  destinationId: number;
  title: string;
  startDate: Date;
  endDate: Date;
  budget: number;
  days: ItineraryDay[];
}

const itineraryDaySchema = new Schema<ItineraryDay>({
  dayNumber: { type: Number, required: true },
  activities: { type: [activitySchema], default: [] },
});

const itinerarySchema = new Schema<Itinerary>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  destinationId: { type: Number, required: true },
  title: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  budget: { type: Number, default: 0 },
  days: { type: [itineraryDaySchema], default: [] },
});

export const ItineraryModel = model<Itinerary>("Itinerary", itinerarySchema);