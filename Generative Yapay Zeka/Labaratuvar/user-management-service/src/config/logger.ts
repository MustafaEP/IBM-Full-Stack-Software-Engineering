import { env } from "./env.js";

export const loggerOptions = {
  level: env.LOG_LEVEL
} as const;


