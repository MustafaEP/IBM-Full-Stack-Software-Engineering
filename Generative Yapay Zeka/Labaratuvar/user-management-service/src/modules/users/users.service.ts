import { Types } from "mongoose";
import { UserModel, type User } from "./user.model.js";
import { HttpError } from "../../infrastructure/http/errors.js";
import { hashPassword, verifyPassword } from "../../infrastructure/security/password.js";

export type CreateUserInput = {
  email: string;
  displayName: string;
  passwordHash: string;
};

export async function createUser(input: CreateUserInput): Promise<User & { _id: Types.ObjectId }> {
  const doc = await UserModel.create({
    email: input.email,
    displayName: input.displayName,
    passwordHash: input.passwordHash
  });
  return doc;
}

export async function findUserByEmail(email: string): Promise<(User & { _id: Types.ObjectId }) | null> {
  return UserModel.findOne({ email: email.toLowerCase().trim() }).exec();
}

export async function findUserById(id: string): Promise<(User & { _id: Types.ObjectId }) | null> {
  if (!Types.ObjectId.isValid(id)) return null;
  return UserModel.findById(id).exec();
}

export async function updateDisplayName(
  userId: string,
  displayName: string
): Promise<(User & { _id: Types.ObjectId }) | null> {
  if (!Types.ObjectId.isValid(userId)) return null;
  return UserModel.findByIdAndUpdate(
    userId,
    { $set: { displayName } },
    { new: true, runValidators: true }
  ).exec();
}

export async function updateLastLogin(userId: string): Promise<void> {
  if (!Types.ObjectId.isValid(userId)) return;
  await UserModel.updateOne({ _id: userId }, { $set: { lastLoginAt: new Date() } }).exec();
}

export async function changePassword(input: {
  userId: string;
  currentPassword: string;
  newPassword: string;
}): Promise<void> {
  const user = await findUserById(input.userId);
  if (!user) throw new HttpError(404, "User not found.", "not_found");
  const ok = await verifyPassword(user.passwordHash, input.currentPassword);
  if (!ok) throw new HttpError(401, "Invalid credentials.", "unauthorized");

  const newHash = await hashPassword(input.newPassword);
  await UserModel.updateOne(
    { _id: user._id },
    { $set: { passwordHash: newHash, passwordChangedAt: new Date() } }
  ).exec();
}

export async function listUsers(input: {
  limit: number;
  cursor?: string;
}): Promise<{ items: Array<{ id: string; email: string; displayName: string }>; nextCursor?: string }> {
  /**
   * Cursor pagination (by `_id`) is preferred over offset pagination:
   * - Stable under inserts/deletes
   * - Generally faster on large collections
   */
  const limit = Math.min(Math.max(input.limit, 1), 100);
  const query: Record<string, unknown> = {};
  if (input.cursor) query._id = { $gt: new Types.ObjectId(input.cursor) };

  const docs = await UserModel.find(query)
    .sort({ _id: 1 })
    .limit(limit + 1)
    .select({ email: 1, displayName: 1 })
    .exec();

  const hasMore = docs.length > limit;
  const page = hasMore ? docs.slice(0, limit) : docs;

  const nextCursor = hasMore ? page[page.length - 1]!._id.toString() : undefined;

  return {
    items: page.map((d) => ({ id: d._id.toString(), email: d.email, displayName: d.displayName })),
    nextCursor
  };
}


