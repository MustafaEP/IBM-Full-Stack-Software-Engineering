import type { FastifyRequest } from "fastify";
import type { z } from "zod";
import { HttpError } from "../../infrastructure/http/errors.js";
import {
  ChangePasswordBodySchema,
  ListUsersQuerySchema,
  UpdateMeBodySchema
} from "./users.schemas.js";
import { changePassword, findUserById, listUsers, updateDisplayName } from "./users.service.js";

export async function meHandler(request: FastifyRequest) {
  if (!request.user) throw new HttpError(401, "Unauthorized", "unauthorized");
  const user = await findUserById(request.user.id);
  if (!user) throw new HttpError(404, "User not found.", "not_found");
  return { id: user._id.toString(), email: user.email, displayName: user.displayName };
}

export async function updateMeHandler(
  request: FastifyRequest<{ Body: z.infer<typeof UpdateMeBodySchema> }>
) {
  if (!request.user) throw new HttpError(401, "Unauthorized", "unauthorized");
  const user = await updateDisplayName(request.user.id, request.body.displayName);
  if (!user) throw new HttpError(404, "User not found.", "not_found");
  return { id: user._id.toString(), email: user.email, displayName: user.displayName };
}

export async function changePasswordHandler(
  request: FastifyRequest<{ Body: z.infer<typeof ChangePasswordBodySchema> }>
) {
  if (!request.user) throw new HttpError(401, "Unauthorized", "unauthorized");
  await changePassword({
    userId: request.user.id,
    currentPassword: request.body.currentPassword,
    newPassword: request.body.newPassword
  });
  return { ok: true };
}

export async function listUsersHandler(
  request: FastifyRequest<{ Querystring: z.infer<typeof ListUsersQuerySchema> }>
) {
  const { limit, cursor } = request.query;
  return listUsers({ limit, cursor });
}


