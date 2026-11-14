import { Request, Response } from "express";
import mongoose, { isValidObjectId } from "mongoose";
import { ItineraryModel } from "../models/itineraryModel";

// Fields a user is allowed to change when updating
const EDITABLE_FIELDS = ["title", "destinationId", "startDate", "endDate", "budget", "days"];

// Returns an error message for invalid dates
function getDateError(startDate: Date, endDate: Date): string | null {
  if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) {
    return "Start date and end date must be valid dates.";
  }

  if (endDate < startDate) {
    return "End date cannot be before the start date.";
  }

  return null;
}

// Gets the itinerary from the URL id, but only if it belongs to the logged-in user
// Sends the 400/404 itself and returns null if it can't be used.
async function findUserItinerary(req: Request, res: Response) {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    res.status(400).json({ message: "Invalid itinerary id." });
    return null;
  }

  const itinerary = await ItineraryModel.findOne({ _id: id, userId: req.userId });

  if (!itinerary) {
    res.status(404).json({ message: "Itinerary not found." });
    return null;
  }

  return itinerary;
}

// Bad data caught by Mongoose -> 400, anything else -> 500
function sendItineraryError(error: unknown, res: Response) {
  if (error instanceof mongoose.Error.ValidationError || error instanceof mongoose.Error.CastError) {
    res.status(400).json({ message: error.message });
    return;
  }

  console.error("Itinerary error:", error);
  res.status(500).json({ message: "Something went wrong with the itinerary." });
}

export async function createItinerary(req: Request, res: Response) {
  const { title, destinationId, startDate, endDate, budget, days } = req.body ?? {};

 // destinationId is checked against undefined so an id of 0 still counts
  if (!title || destinationId === undefined || !startDate || !endDate) {
    res.status(400).json({ message: "Title, destination, start date, and end date are required." });
    return;
  }

  const dateError = getDateError(new Date(startDate), new Date(endDate));

  if (dateError) {
    res.status(400).json({ message: dateError });
    return;
  }

  try {
    const itinerary = await ItineraryModel.create({
      userId: req.userId,
      title,
      destinationId,
      startDate,
      endDate,
      budget,
      days,
    });

    res.status(201).json({ message: "Itinerary created.", itinerary });
  } catch (error) {
    sendItineraryError(error, res);
  }
}

// All of the user's itineraries
export async function getItineraries(req: Request, res: Response) {
  try {
    const itineraries = await ItineraryModel.find({ userId: req.userId }).sort({ startDate: 1 });
    res.json({ itineraries });
  } catch (error) {
    sendItineraryError(error, res);
  }
}

export async function getItinerary(req: Request, res: Response) {
  try {
    const itinerary = await findUserItinerary(req, res);

    if (!itinerary) {
      return;
    }

    res.json({ itinerary });
  } catch (error) {
    sendItineraryError(error, res);
  }
}

// Only changes the fields that were sent in the body
export async function updateItinerary(req: Request, res: Response) {
  try {
    const itinerary = await findUserItinerary(req, res);

    if (!itinerary) {
      return;
    }

    const updates = req.body ?? {};

// Check the new dates against the saved ones in case only one date is being changed
    const dateError = getDateError(
      new Date(updates.startDate ?? itinerary.startDate),
      new Date(updates.endDate ?? itinerary.endDate),
    );

    if (dateError) {
      res.status(400).json({ message: dateError });
      return;
    }

    for (const field of EDITABLE_FIELDS) {
      if (updates[field] !== undefined) {
        itinerary.set(field, updates[field]);
      }
    }

    await itinerary.save();
    res.json({ message: "Itinerary saved.", itinerary });
  } catch (error) {
    sendItineraryError(error, res);
  }
}

export async function deleteItinerary(req: Request, res: Response) {
  try {
    const itinerary = await findUserItinerary(req, res);

    if (!itinerary) {
      return;
    }

    await itinerary.deleteOne();
    res.json({ message: "Itinerary deleted." });
  } catch (error) {
    sendItineraryError(error, res);
  }
}