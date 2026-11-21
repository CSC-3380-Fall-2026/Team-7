import express from "express";
import { authenticateToken } from "../middleware/authMiddleware";
import { getFavorites, addFavorite, removeFavorite } from "../controllers/favoriteController";

const router = express.Router();

router.use(authenticateToken);

router.get("/", getFavorites);
router.post("/", addFavorite);
router.delete("/:destinationId", removeFavorite);

export default router;