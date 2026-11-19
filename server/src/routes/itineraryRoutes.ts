import express from "express";
import { authenticateToken } from "../middleware/authMiddleware";
import {
  createItinerary,
  getItineraries,
  getItinerary,
  updateItinerary,
  deleteItinerary,
} from "../controllers/itineraryController";

const router = express.Router();

router.use(authenticateToken);

router.get("/", getItineraries);
router.post("/", createItinerary);
router.get("/:id", getItinerary);
router.put("/:id", updateItinerary);
router.delete("/:id", deleteItinerary);

export default router;