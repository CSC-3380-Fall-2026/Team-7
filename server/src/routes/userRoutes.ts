
import express, { Request, Response } from "express";
import User from "../models/userModel";
import { authenticateToken } from "../middleware/authMiddleware";

const router = express.Router();

// GET THE CURRENT USER'S PROFILE
router.get(
  "/profile",
  authenticateToken,
  async (req: Request, res: Response) => {
    try {
      const user = await User.findById(req.userId).select("-password");

      if (!user) {
        return res.status(404).json({
          message: "User profile not found.",
        });
      }

      return res.status(200).json({
        message: "Profile retrieved successfully!",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (error) {
      console.error("Profile retrieval error:", error);

      return res.status(500).json({
        message: "Something went wrong while retrieving your profile.",
      });
    }
  }
);

// UPDATE THE CURRENT USER'S PROFILE
router.put(
  "/profile",
  authenticateToken,
  async (req: Request, res: Response) => {
    try {
      const { name, email } = req.body;

      if (
        name !== undefined &&
        (typeof name !== "string" || !name.trim())
      ) {
        return res.status(400).json({
          message: "Name must be a non-empty string.",
        });
      }

      if (
        email !== undefined &&
        (typeof email !== "string" || !email.trim())
      ) {
        return res.status(400).json({
          message: "Email must be a non-empty string.",
        });
      }

      if (name === undefined && email === undefined) {
        return res.status(400).json({
          message: "Please provide a name or email to update.",
        });
      }

      const updates: { name?: string; email?: string } = {};

      if (name !== undefined) {
        updates.name = name.trim();
      }

      if (email !== undefined) {
        updates.email = email.toLowerCase().trim();
      }

      const updatedUser = await User.findByIdAndUpdate(
        req.userId,
        { $set: updates },
        { new: true, runValidators: true }
      ).select("-password");

      if (!updatedUser) {
        return res.status(404).json({
          message: "User profile not found.",
        });
      }

      return res.status(200).json({
        message: "Profile updated successfully!",
        user: {
          id: updatedUser._id,
          name: updatedUser.name,
          email: updatedUser.email,
        },
      });
    } catch (error) {
      if (
        typeof error === "object" &&
        error !== null &&
        "code" in error &&
        error.code === 11000
      ) {
        return res.status(409).json({
          message: "That email address is already in use.",
        });
      }

      console.error("Profile update error:", error);

      return res.status(500).json({
        message: "Something went wrong while updating your profile.",
      });
    }
  }
);

export default router;