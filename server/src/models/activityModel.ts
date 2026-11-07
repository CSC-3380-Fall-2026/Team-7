import { Schema } from "mongoose";

export interface Activity {
  name: string;
  time: string;
  location: string;
  category: string;
  estimatedCost: number | null;
}

export const activitySchema = new Schema<Activity>({
  name: { type: String, required: true },
  time: { type: String, default: "" },
  location: { type: String, default: "" },
  category: { type: String, default: "Activities" },
  estimatedCost: { type: Number, default: null },
});