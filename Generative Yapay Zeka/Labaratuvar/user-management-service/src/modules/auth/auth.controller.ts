import type { FastifyRequest } from "fastify";
import type { z } from "zod";
import { LoginBodySchema, RegisterBodySchema } from "./auth.schemas.js";
import { loginUser, registerUser } from "./auth.service.js";

export async function registerHandler(
  request: FastifyRequest<{ Body: z.infer<typeof RegisterBodySchema> }>
) {
  return registerUser(request.body);
}

export async function loginHandler(
  request: FastifyRequest<{ Body: z.infer<typeof LoginBodySchema> }>
) {
  return loginUser(request.body);
}


