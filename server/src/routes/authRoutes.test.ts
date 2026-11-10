import express from "express";
import { describe, it, expect, vi, beforeAll, afterAll, beforeEach } from "vitest";
import bcrypt from "bcryptjs";

// Mock the database functions
const mocks = vi.hoisted(() => ({
  findOne: vi.fn(),
  create: vi.fn(),
}));

vi.mock("../models/userModel", () => ({
  default: {
    findOne: mocks.findOne,
    create: mocks.create,
  },
}));

import authRoutes from "./authRoutes";

const app = express();
app.use(express.json());
app.use("/api/auth", authRoutes);

let server: ReturnType<typeof app.listen> | undefined;
let baseUrl = "";

const originalJwtSecret = process.env.JWT_SECRET;

beforeAll(async () => {
  process.env.JWT_SECRET = "test-secret";

  server = app.listen(0);

  await new Promise<void>((resolve) => {
    server!.once("listening", resolve);
  });

  const address = server.address();

  if (!address || typeof address === "string") {
    throw new Error("Could not start test server.");
  }

  baseUrl = `http://127.0.0.1:${address.port}/api/auth`;
});

afterAll(async () => {
  if (server) {
    await new Promise<void>((resolve, reject) => {
      server!.close((error) => {
        if (error) reject(error);
        else resolve();
      });
    });
  }

  if (originalJwtSecret === undefined) {
    delete process.env.JWT_SECRET;
  } else {
    process.env.JWT_SECRET = originalJwtSecret;
  }
});

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Authentication Route Tests", () => {
  it("should successfully register a new user", async () => {
    mocks.findOne.mockResolvedValue(null);

    mocks.create.mockResolvedValue({
      _id: "user-123",
      name: "Test User",
      email: "test@example.com",
    });

    const response = await fetch(`${baseUrl}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Test User",
        email: "test@example.com",
        password: "Password123!",
      }),
    });

    const data = await response.json();

    expect(response.status).toBe(201);
    expect(data.message).toBe("Account created successfully!");
    expect(data.user.email).toBe("test@example.com");
  });

  it("should reject registration with missing information", async () => {
    const response = await fetch(`${baseUrl}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "",
        email: "test@example.com",
        password: "",
      }),
    });

    expect(response.status).toBe(400);
  });

  it("should successfully log in an existing user", async () => {
    const hashedPassword = await bcrypt.hash("Password123!", 10);

    mocks.findOne.mockResolvedValue({
      _id: { toString: () => "user-123" },
      name: "Test User",
      email: "test@example.com",
      password: hashedPassword,
    });

    const response = await fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "test@example.com",
        password: "Password123!",
      }),
    });

    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.message).toBe("Login successful!");
    expect(data.token).toBeDefined();
  });

  it("should reject login with an incorrect password", async () => {
    const hashedPassword = await bcrypt.hash("Password123!", 10);

    mocks.findOne.mockResolvedValue({
      _id: { toString: () => "user-123" },
      name: "Test User",
      email: "test@example.com",
      password: hashedPassword,
    });

    const response = await fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "test@example.com",
        password: "WrongPassword!",
      }),
    });

    expect(response.status).toBe(401);
  });
});