import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { connectDb } from "./services/db";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

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