import "fastify";
import type { Role } from "../modules/users/user.types.js";

declare module "fastify" {
  interface FastifyRequest {
    user: { id: string; email: string; roles: Role[] } | null;
  }

  interface FastifyInstance {
    authenticate: (request: FastifyRequest) => Promise<void>;
    requireRoles: (roles: Role[]) => (request: FastifyRequest) => Promise<void>;
  }
}


