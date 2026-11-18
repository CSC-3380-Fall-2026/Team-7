
import "dotenv/config";

import mongoose from "mongoose";

import { DestinationModel } from "../models/destinationModel";
import { connectDb } from "../services/db";
import { destinations } from "../data/destinationprofiles";

async function seedDestinations() {
    console.log(`Preparing to seed ${destinations.length} destinations.`);

    if (destinations.length !== 15) {
        throw new Error(
            `Expected 15 destinations, but found ${destinations.length}.`
        );
    }
       const ids = destinations.map((destination) => destination.id);

    if (new Set(ids).size !== ids.length) {
        throw new Error("Duplicate destination IDs found.");
    }

    for (const destination of destinations) {
        if (destination.weatherOptions.length !== 2) {
            throw new Error(
                `${destination.city} must have exactly 2 weather options.`
            );
        }

        for (const weatherOption of destination.weatherOptions) {
            if (weatherOption.attractions.length !== 3) {
                throw new Error(
                    `${destination.city} (${weatherOption.condition}) must have exactly 3 attractions.`
                );
            }
        }
    }

    try {

        await connectDb();
        console.log("Connected to MongoDB successfully.");


        for (const destination of destinations) {
            await DestinationModel.updateOne(
                { id: destination.id },
                { $set: destination },
                { upsert: true }
            );

            console.log(`Seeded destination: ${destination.city}`);
        }

        // Confirm that all destination records were processed.
        console.log("Destination seeding completed successfully.");

    } catch (error) {
        // Report errors that occur while connecting or seeding.
        console.error("Destination seeding failed:", error);
        process.exitCode = 1;
    } finally {
        await mongoose.disconnect();
    }
}

void seedDestinations();


