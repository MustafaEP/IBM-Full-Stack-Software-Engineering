import type { FastifyInstance, FastifyRequest } from "fastify";
import fp from "fastify-plugin";
import { HttpError } from "../infrastructure/http/errors.js";
import type { Role } from "../modules/users/user.types.js";

async function rbacPlugin(app: FastifyInstance): Promise<void> {
  /**
   * Authorization middleware builder.
   *
   * Usage:
   * - `preHandler: app.requireRoles(["admin"])`
   *
   * Note: This is intentionally simple RBAC. For complex policies, prefer ABAC/OPA.
   */
  app.decorate("requireRoles", (roles: Role[]) => {
    return async (request: FastifyRequest) => {
      await app.authenticate(request);
      const user = request.user;
      if (!user) throw new HttpError(401, "Unauthorized", "unauthorized");
      const ok = roles.some((r) => user.roles.includes(r));
      if (!ok) throw new HttpError(403, "Forbidden", "forbidden");
    };
  });
}

export const rbac = fp(rbacPlugin, { name: "rbac" });


