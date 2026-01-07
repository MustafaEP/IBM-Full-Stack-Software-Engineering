import dotenv from "dotenv";
import { cleanEnv, num, port, str } from "envalid";

dotenv.config();

const DEFAULT_DEV_JWT_SECRET = "dev-insecure-secret-change-me";

/**
 * Runtime config (env vars) is validated at startup.
 *
 * Why:
 * - Avoid "undefined" config bugs at runtime
 * - Fail fast in production if secrets are missing
 */
export const env = cleanEnv(process.env, {
  NODE_ENV: str({ choices: ["development", "test", "production"], default: "development" }),
  HOST: str({ default: "0.0.0.0" }),
  PORT: port({ default: 3001 }),
  LOG_LEVEL: str({ default: "info" }),

  MONGODB_URI: str({ default: "mongodb://localhost:27017/user_mgmt" }),

  JWT_SECRET: str({ default: DEFAULT_DEV_JWT_SECRET }),
  JWT_ISSUER: str({ default: "user-management-service" }),
  JWT_AUDIENCE: str({ default: "learning-platform" }),
  JWT_EXPIRES_IN_SECONDS: num({ default: 900 })
});

if (env.NODE_ENV === "production" && env.JWT_SECRET === DEFAULT_DEV_JWT_SECRET) {
  throw new Error("JWT_SECRET must be set in production.");
}

/**
 * CORS origins are intentionally opt-in.
 * If not set:
 * - production: disable CORS (avoid accidental exposure)
 * - development/test: allow common localhost dev origins for convenience
 */
const rawCorsOrigins = (process.env.CORS_ORIGINS ?? "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

export const corsOrigins =
  rawCorsOrigins.length > 0
    ? rawCorsOrigins
    : env.NODE_ENV === "production"
      ? []
      : ["http://localhost:5173", "http://127.0.0.1:5173", "http://localhost:3000"];


