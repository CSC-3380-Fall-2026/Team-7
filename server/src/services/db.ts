import mongoose from "mongoose";

/**
 * Connects to MongoDB using MONGO_URI from the server's .env file.
 * Exits the process if the variable is missing or the connection fails,
 * so the server never runs without a database.
 */

export async function connectDb() {
const mongoUri = process.env.MONGO_URI;

  try {
    await mongoose.connect(mongoUri);
    console.log(`MongoDB connected: ${mongoose.connection.name}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
}
