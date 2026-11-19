
import { Router } from "express";
import { DestinationModel } from "../models/destinationModel";

const router = Router();

// GET all destinations from MongoDB
router.get("/", async (_req, res) => {
  try {
    const destinations = await DestinationModel.find()
      .sort({ id: 1 });

    res.status(200).json(destinations);
  } catch (error) {
    console.error("Error fetching destinations:", error);

    res.status(500).json({
      message: "Failed to fetch destinations",
    });
  }
});

export default router;
