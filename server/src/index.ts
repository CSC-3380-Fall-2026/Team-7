import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { connectDb } from "./services/db";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import itineraryRoutes from "./routes/itineraryRoutes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/itineraries", itineraryRoutes);

app.get("/api/health", (_req, res) => {
  const isDbConnected = mongoose.connection.readyState === 1;
  res.json({ status: "ok", database: isDbConnected ? "connected" : "disconnected" });
});

const PORT = process.env.PORT || 5000;

async function startServer(): Promise<void> {
  await connectDb();
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

startServer();