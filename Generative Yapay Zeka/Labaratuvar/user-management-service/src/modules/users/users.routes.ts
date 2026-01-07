import type { FastifyInstance } from "fastify";
import { z } from "zod";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import {
  ChangePasswordBodySchema,
  ListUsersQuerySchema,
  ListUsersResponseSchema,
  UpdateMeBodySchema,
  UserPublicSchema
} from "./users.schemas.js";
import { changePasswordHandler, meHandler, updateMeHandler } from "./users.controller.js";
import { listUsers } from "./users.service.js";

export async function usersRoutes(app: FastifyInstance): Promise<void> {
  const t = app.withTypeProvider<ZodTypeProvider>();

  t.get(
    "/v1/users/me",
    {
      preHandler: async (request) => app.authenticate(request),
      schema: {
        response: {
          200: UserPublicSchema
        }
      }
    },
    meHandler
  );

  t.patch(
    "/v1/users/me",
    {
      preHandler: async (request) => app.authenticate(request),
      schema: {
        body: UpdateMeBodySchema,
        response: { 200: UserPublicSchema }
      }
    },
    updateMeHandler
  );

  t.post(
    "/v1/users/me/change-password",
    {
      preHandler: async (request) => app.authenticate(request),
      config: { rateLimit: { max: 10, timeWindow: "10 minutes" } },
      schema: {
        body: ChangePasswordBodySchema,
        response: { 200: z.object({ ok: z.boolean() }) }
      }
    },
    changePasswordHandler
  );

  // Admin endpoints
  t.get(
    "/v1/admin/users",
    {
      preHandler: app.requireRoles(["admin"]),
      schema: {
        querystring: ListUsersQuerySchema,
        response: { 200: ListUsersResponseSchema }
      }
    },
    async (request) => {
      const { limit, cursor } = request.query;
      return listUsers({ limit, cursor });
    }
  );
}


