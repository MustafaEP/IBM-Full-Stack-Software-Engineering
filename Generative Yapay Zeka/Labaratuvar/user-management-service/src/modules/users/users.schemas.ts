import { z } from "zod";

export const UserPublicSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  displayName: z.string()
});

export const UpdateMeBodySchema = z.object({
  displayName: z.string().min(2).max(80)
});

export const ChangePasswordBodySchema = z.object({
  currentPassword: z.string().min(1).max(200),
  newPassword: z.string().min(10).max(200)
});

export const ListUsersQuerySchema = z.object({
  limit: z.coerce.number().int().min(1).max(100).default(50),
  cursor: z.string().optional()
});

export const ListUsersResponseSchema = z.object({
  items: z.array(UserPublicSchema),
  nextCursor: z.string().optional()
});


