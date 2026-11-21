import { Request, Response } from "express";
import User from "../models/userModel";
import { DestinationModel } from "../models/destinationModel";

//turns into destionationID
function parseDestinationId(value: unknown): number | null {
  const destinationId = Number(value);
  return Number.isInteger(destinationId) ? destinationId : null;
}

// Shows the logged-in user's liked destinations
export async function getFavorites(req: Request, res: Response) {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      res.status(404).json({ message: "User not found." });
      return;
    }

    const destinations = await DestinationModel.find({ id: { $in: user.favorites } }).sort({ id: 1 });
    res.json({ favorites: user.favorites, destinations });
  } catch (error) {
    console.error("Favorites load error:", error);
    res.status(500).json({ message: "Something went wrong while loading your favorites." });
  }
}

//Saves a destination to the logged-in user's favorites.
export async function addFavorite(req: Request, res: Response) {
  const destinationId = parseDestinationId(req.body?.destinationId);

  if (destinationId === null) {
    res.status(400).json({ message: "A valid destinationId is required." });
    return;
  }

  try {
    const destinationExists = await DestinationModel.exists({ id: destinationId });

    if (!destinationExists) {
      res.status(404).json({ message: "Destination not found." });
      return;
    }

    const user = await User.findByIdAndUpdate(
      req.userId,
      { $addToSet: { favorites: destinationId } },
      { returnDocument: "after" },
    );

    if (!user) {
      res.status(404).json({ message: "User not found." });
      return;
    }

    res.json({ message: "Destination saved.", favorites: user.favorites });
  } catch (error) {
    console.error("Favorite save error:", error);
    res.status(500).json({ message: "Something went wrong while saving the destination." });
  }
}

//Removes a destination from the logged-in user's favorites.
export async function removeFavorite(req: Request, res: Response) {
  const destinationId = parseDestinationId(req.params.destinationId);

  if (destinationId === null) {
    res.status(400).json({ message: "Invalid destination id." });
    return;
  }

  try {
    const user = await User.findByIdAndUpdate(
      req.userId,
      { $pull: { favorites: destinationId } },
      { returnDocument: "after" },
    );

    if (!user) {
      res.status(404).json({ message: "User not found." });
      return;
    }

    res.json({ message: "Destination removed.", favorites: user.favorites });
  } catch (error) {
    console.error("Favorite remove error:", error);
    res.status(500).json({ message: "Something went wrong while removing the destination." });
  }
}