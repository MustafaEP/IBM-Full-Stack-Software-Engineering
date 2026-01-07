import mongoose from "mongoose";
import { env } from "../../config/env.js";

/**
 * Establish a single MongoDB connection for the service process.
 *
 * Note:
 * - In production we disable autoIndex to avoid surprise index builds.
 *   Create indexes via migrations / controlled rollout instead.
 */
export async function connectMongo(): Promise<void> {
  mongoose.set("strictQuery", true);
  await mongoose.connect(env.MONGODB_URI, {
    autoIndex: env.NODE_ENV !== "production"
  });
}

/**
 * Ready check for Kubernetes (or any orchestrator).
 * `readyState === 1` means connected.
 */
export function isMongoReady(): boolean {
  return mongoose.connection.readyState === 1;
}

export async function disconnectMongo(): Promise<void> {
  await mongoose.disconnect();
}


