import type { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { AuthResponseSchema, LoginBodySchema, RegisterBodySchema } from "./auth.schemas.js";
import { loginHandler, registerHandler } from "./auth.controller.js";

export async function authRoutes(app: FastifyInstance): Promise<void> {
  const t = app.withTypeProvider<ZodTypeProvider>();

  t.post(
    "/v1/auth/register",
    {
      config: { rateLimit: { max: 20, timeWindow: "1 minute" } },
      schema: {
        body: RegisterBodySchema,
        response: { 200: AuthResponseSchema }
      }
    },
    registerHandler
  );

  t.post(
    "/v1/auth/login",
    {
      config: { rateLimit: { max: 30, timeWindow: "1 minute" } },
      schema: {
        body: LoginBodySchema,
        response: { 200: AuthResponseSchema }
      }
    },
    loginHandler
  );
}


