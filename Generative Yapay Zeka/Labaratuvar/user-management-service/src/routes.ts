import type { FastifyInstance } from "fastify";
import { authRoutes } from "./modules/auth/auth.routes.js";
import { usersRoutes } from "./modules/users/users.routes.js";

export async function registerRoutes(app: FastifyInstance): Promise<void> {
  await app.register(authRoutes);
  await app.register(usersRoutes);
}


