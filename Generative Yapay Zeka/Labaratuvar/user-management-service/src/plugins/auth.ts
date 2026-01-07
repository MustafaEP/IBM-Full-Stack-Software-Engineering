import type { FastifyInstance, FastifyRequest } from "fastify";
import fp from "fastify-plugin";
import { HttpError } from "../infrastructure/http/errors.js";
import { verifyAccessToken } from "../infrastructure/security/jwt.js";

async function authPlugin(app: FastifyInstance): Promise<void> {
  app.decorateRequest("user", null);

  /**
   * Auth middleware:
   * - Extracts `Authorization: Bearer <token>`
   * - Verifies JWT and attaches `request.user`
   *
   * Keep this small & fast. Anything heavier belongs in downstream services.
   */
  app.decorate("authenticate", async (request: FastifyRequest) => {
    const header = request.headers.authorization;
    if (!header?.startsWith("Bearer ")) {
      throw new HttpError(401, "Missing bearer token.", "unauthorized");
    }

    const token = header.slice("Bearer ".length).trim();
    try {
      const claims = await verifyAccessToken(token);
      request.user = { id: claims.sub, email: claims.email, roles: claims.roles };
    } catch {
      throw new HttpError(401, "Invalid token.", "unauthorized");
    }
  });
}

export const auth = fp(authPlugin, { name: "auth" });


