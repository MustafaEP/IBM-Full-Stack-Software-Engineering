import { HttpError } from "../../infrastructure/http/errors.js";
import { hashPassword, verifyPassword } from "../../infrastructure/security/password.js";
import { signAccessToken } from "../../infrastructure/security/jwt.js";
import { createUser, findUserByEmail } from "../users/users.service.js";
import type { Role } from "../users/user.types.js";
import { updateLastLogin } from "../users/users.service.js";

export async function registerUser(input: {
  email: string;
  displayName: string;
  password: string;
}): Promise<{ accessToken: string; user: { id: string; email: string; displayName: string } }> {
  const existing = await findUserByEmail(input.email);
  if (existing) throw new HttpError(409, "Email already in use.", "conflict");

  const passwordHash = await hashPassword(input.password);
  const user = await createUser({
    email: input.email,
    displayName: input.displayName,
    passwordHash
  });

  const roles = user.roles as Role[];
  const accessToken = await signAccessToken({ sub: user._id.toString(), email: user.email, roles });
  return {
    accessToken,
    user: { id: user._id.toString(), email: user.email, displayName: user.displayName }
  };
}

export async function loginUser(input: {
  email: string;
  password: string;
}): Promise<{ accessToken: string; user: { id: string; email: string; displayName: string } }> {
  const user = await findUserByEmail(input.email);
  if (!user) throw new HttpError(401, "Invalid credentials.", "unauthorized");

  const ok = await verifyPassword(user.passwordHash, input.password);
  if (!ok) throw new HttpError(401, "Invalid credentials.", "unauthorized");

  await updateLastLogin(user._id.toString());
  const roles = user.roles as Role[];
  const accessToken = await signAccessToken({ sub: user._id.toString(), email: user.email, roles });
  return {
    accessToken,
    user: { id: user._id.toString(), email: user.email, displayName: user.displayName }
  };
}


