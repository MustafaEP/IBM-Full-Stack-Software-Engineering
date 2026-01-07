import { z } from "zod";
import { UserPublicSchema } from "../users/users.schemas.js";

export const RegisterBodySchema = z.object({
  email: z.string().email(),
  displayName: z.string().min(2).max(80),
  password: z.string().min(10).max(200)
});

export const LoginBodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(1).max(200)
});

export const AuthResponseSchema = z.object({
  accessToken: z.string(),
  user: UserPublicSchema
});


