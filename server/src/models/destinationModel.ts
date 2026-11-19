import { Schema, model } from "mongoose";

import type { EventOption } from "../data/destinationprofiles";


export interface Attraction {
  name: string;
  category: string;
  estimatedCost: number | null;
  website?: string;
}

export interface Activity {
  name: string;
  category: string;
  description: string;
  estimatedCostMin: number | null;
  estimatedCostMax: number | null;
  priceType: string;
  estimatedDuration: number;
  location: string;
  openingHours?: string;
  website?: string;
}

export interface Restaurant {
  name: string;
  category: string;
  description: string;
  mealTypes: ("Breakfast" | "Lunch" | "Dinner")[];
  estimatedCostMin: number | null;
  estimatedCostMax: number | null;
  priceType: string;
  priceTier: "Budget" | "Mid-Range" | "High-End";
  address: string;
  cuisine: string;
  openingHours?: string;
  website?: string;
  reservationRecommended?: boolean;
}

export interface TransportationOption {
  name: string;
  type: string;
  description?: string;
  estimatedCostMin: number | null;
  estimatedCostMax: number | null;
  priceType: string;
  estimatedDuration?: number;
  website?: string;
}

export interface Hotel {
  name: string;
  category: string;
  description?: string;
  address: string;
  estimatedNightlyCostMin: number | null;
  estimatedNightlyCostMax: number | null;
  priceType: string;
  maxGuests?: number;
  amenities: string[];
  parkingCost?: number | null;
  additionalFees?: number | null;
  website?: string;
}

export interface VacationRental {
  name: string;
  category: string;
  propertyType: string;
  description?: string;
  address: string;
  estimatedNightlyCostMin: number | null;
  estimatedNightlyCostMax: number | null;
  priceType: string;
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  cleaningFee?: number | null;
  serviceFee?: number | null;
  parkingCost?: number | null;
  minimumNights?: number;
  website?: string;
}


  
export interface WeatherOption {
  condition: string;
  month: string[];
  attractions: Attraction[];
  activities?: Activity[];
  event: EventOption[];
}

export interface Destination {
  id: number;
  city: string;
  state: string;
  description: string;
  duration: string;
  weatherOptions: WeatherOption[];
  activities?: Activity[];
  breakfast?: Restaurant[];
  lunch?: Restaurant[];
  dinner?: Restaurant[];
  transportation: string[];
  transportationOptions: TransportationOption[];
  hotels: Hotel[];
  vacationRentals: VacationRental[];
}





const attractionSchema = new Schema<Attraction>({
  name: { type: String, required: true },
  category: { type: String, required: true },
  estimatedCost: { type: Number, default: null },
  website: { type: String, default: null },
});

const activitySchema = new Schema<Activity>({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  estimatedCostMin: { type: Number, default: null },
  estimatedCostMax: { type: Number, default: null },
  priceType: { type: String, required: true },
  estimatedDuration: { type: Number, required: true },
  location: { type: String, required: true },
  openingHours: { type: String },
  website: { type: String }
});


const restaurantSchema = new Schema<Restaurant>({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },

  mealTypes: {
    type: [String],
    enum: ["Breakfast", "Lunch", "Dinner"],
    default: []
  },

  estimatedCostMin: { type: Number, default: null },
  estimatedCostMax: { type: Number, default: null },
  priceType: { type: String, required: true },

  priceTier: {
    type: String,
    enum: ["Budget", "Mid-Range", "High-End"],
    required: true
  },

  address: { type: String, required: true },
  cuisine: { type: String, required: true },
  openingHours: { type: String },
  website: { type: String },
  reservationRecommended: { type: Boolean }
});


const transportationOptionSchema = new Schema<TransportationOption>({
  name: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String },
  estimatedCostMin: { type: Number, default: null },
  estimatedCostMax: { type: Number, default: null },
  priceType: { type: String, required: true },
  estimatedDuration: { type: Number },
  website: { type: String }
});


const hotelSchema = new Schema<Hotel>({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String },
  address: { type: String, required: true },
  estimatedNightlyCostMin: { type: Number, default: null },
  estimatedNightlyCostMax: { type: Number, default: null },
  priceType: { type: String, required: true },
  maxGuests: { type: Number },
  amenities: { type: [String], default: [] },
  parkingCost: { type: Number, default: null },
  additionalFees: { type: Number, default: null },
  website: { type: String }
});


const vacationRentalSchema = new Schema<VacationRental>({
  name: { type: String, required: true },
  category: { type: String, required: true },
  propertyType: { type: String, required: true },
  description: { type: String },
  address: { type: String, required: true },
  estimatedNightlyCostMin: { type: Number, default: null },
  estimatedNightlyCostMax: { type: Number, default: null },
  priceType: { type: String, required: true },
  maxGuests: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  amenities: { type: [String], default: [] },
  cleaningFee: { type: Number, default: null },
  serviceFee: { type: Number, default: null },
  parkingCost: { type: Number, default: null },
  minimumNights: { type: Number },
  website: { type: String }
});






const eventOptionSchema = new Schema<EventOption>({
    name: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    estimatedCostMin: { type: Number, default: null },
    estimatedCostMax: { type: Number, default: null },
    priceType: { type: String, required: true },
    startDate: { type: String },
    endDate: { type: String },
    startTime: { type: String },
    endTime: { type: String },
    estimatedDuration: { type: Number },
    location: { type: String, required: true },
    website: { type: String }
});


const weatherOptionSchema = new Schema<WeatherOption>({
  condition: { type: String, required: true },
  month: { type: [String], default: [] },
  attractions: { type: [attractionSchema], default: [] },
  activities: { type: [activitySchema], default: [] },
  event: { type: [eventOptionSchema], default: [] },
});

const destinationSchema = new Schema<Destination>({
  id: { type: Number, required: true, unique: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: String, required: true },
  weatherOptions: { type: [weatherOptionSchema], default: [] },
  transportation: { type: [String], default: [] },
  activities: { type: [activitySchema], default: [] },
  breakfast: { type: [restaurantSchema], default: [] },
  lunch: { type: [restaurantSchema], default: [] },
  dinner: { type: [restaurantSchema], default: [] },
  transportationOptions: {
    type: [transportationOptionSchema],
    default: []
  },
  hotels: { type: [hotelSchema], default: [] },
  vacationRentals: { type: [vacationRentalSchema], default: [] },
});

export const DestinationModel = model<Destination>("Destination", destinationSchema);