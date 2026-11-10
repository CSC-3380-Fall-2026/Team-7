import { describe, it, expect } from "vitest";
import { DestinationModel } from "./destinationModel";
import mongoose from "mongoose";

describe("Destination Model Tests", () => {
  it("should accept a valid destination", async () => {
    const destination = new DestinationModel({
      id: 1,
      city: "New Orleans",
      state: "Louisiana",
      description: "A historic city with great food.",
      duration: "3 days",
      weatherOptions: [],
      transportation: ["Car", "Bus"],
    });

    await expect(destination.validate()).resolves.toBeUndefined();
  });

  it("should reject a destination missing required fields", async () => {
    const destination = new DestinationModel({});

    await expect(destination.validate()).rejects.toThrow(
      mongoose.Error.ValidationError
    );
  });

  it("should reject an attraction missing required information", async () => {
    const destination = new DestinationModel({
      id: 2,
      city: "Baton Rouge",
      state: "Louisiana",
      description: "The state capital.",
      duration: "2 days",
      weatherOptions: [
        {
          condition: "Sunny",
          attractions: [{ name: "Louisiana State Capitol" }],
        },
      ],
    });

    await expect(destination.validate()).rejects.toThrow(
      mongoose.Error.ValidationError
    );
  });

  it("should use empty arrays as defaults", () => {
    const destination = new DestinationModel({
      id: 3,
      city: "Lafayette",
      state: "Louisiana",
      description: "A city known for Cajun culture.",
      duration: "2 days",
    });

    expect(destination.weatherOptions).toEqual([]);
    expect(destination.transportation).toEqual([]);
  });
});