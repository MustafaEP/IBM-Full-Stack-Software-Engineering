import { SignJWT, jwtVerify } from "jose";
import { env } from "../../config/env.js";
import { Roles, type Role } from "../../modules/users/user.types.js";

const secret = new TextEncoder().encode(env.JWT_SECRET);

export type AccessTokenClaims = {
  sub: string;
  email: string;
  roles: Role[];
};

/**
 * Create a short-lived access token.
 * Keep payload minimal to reduce leakage risk if token is exposed.
 */
export async function signAccessToken(claims: AccessTokenClaims): Promise<string> {
  return new SignJWT({ email: claims.email, roles: claims.roles })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer(env.JWT_ISSUER)
    .setAudience(env.JWT_AUDIENCE)
    .setSubject(claims.sub)
    .setExpirationTime(`${env.JWT_EXPIRES_IN_SECONDS}s`)
    .sign(secret);
}

/**
 * Verify token signature + issuer/audience and validate payload shape.
 *
 * Important:
 * - We validate roles against our known enum to prevent privilege escalation
 *   via forged/modified tokens.
 */
export async function verifyAccessToken(token: string): Promise<AccessTokenClaims> {
  const { payload } = await jwtVerify(token, secret, {
    issuer: env.JWT_ISSUER,
    audience: env.JWT_AUDIENCE
  });

  const sub = payload.sub;
  const email = payload.email;
  const roles = payload.roles;
  if (!sub || typeof sub !== "string" || !email || typeof email !== "string") {
    throw new Error("Invalid token payload.");
  }
  if (!Array.isArray(roles) || roles.some((r) => typeof r !== "string")) {
    throw new Error("Invalid token roles.");
  }
  const typedRoles = roles as string[];
  if (typedRoles.some((r) => !(Roles as readonly string[]).includes(r))) {
    throw new Error("Invalid token roles.");
  }

  return { sub, email, roles: typedRoles as Role[] };
}


