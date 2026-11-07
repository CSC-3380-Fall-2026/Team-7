export interface ErrorResponse {
  message: string;
}

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

export interface UserProfile {
  _id: string;
  name: string;
  email: string;
  favorites: number[];
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: UserProfile;
}

export interface UserProfileResponse {
  user: UserProfile;
  favoriteDestinations: Destination[];
}

export interface AddFavoriteRequest {
  destinationId: number;
}

export interface FavoritesResponse {
  favorites: number[];
}

export interface Activity {
  name: string;
  time: string;
  location: string;
  category: string;
  estimatedCost: number | null;
}

export interface ItineraryDay {
  dayNumber: number;
  activities: Activity[];
}

export interface Itinerary {
  _id: string;
  userId: string;
  destinationId: number;
  title: string;
  startDate: string;
  endDate: string;
  budget: number;
  days: ItineraryDay[];
}

export type CreateItineraryRequest = Omit<Itinerary, "_id" | "userId">;