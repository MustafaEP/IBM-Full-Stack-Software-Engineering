import type { FastifyInstance } from "fastify";
import cors from "@fastify/cors";
import helmet from "@fastify/helmet";
import rateLimit from "@fastify/rate-limit";
import { corsOrigins } from "../config/env.js";

export async function registerSecurityPlugins(app: FastifyInstance): Promise<void> {
  await app.register(helmet);

  await app.register(cors, {
    origin: corsOrigins.length > 0 ? corsOrigins : false,
    credentials: false
  });

  await app.register(rateLimit, {
    max: 300,
    timeWindow: "1 minute"
  });
}


