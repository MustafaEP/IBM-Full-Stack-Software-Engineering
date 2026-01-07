import mongoose, { Schema, type InferSchemaType } from "mongoose";
import { Roles, UserStatuses } from "./user.types.js";

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, index: true, lowercase: true, trim: true },
    displayName: { type: String, required: true, trim: true },
    passwordHash: { type: String, required: true },

    roles: { type: [String], required: true, default: ["user"], enum: Roles },
    status: { type: String, required: true, default: "active", enum: UserStatuses },
    emailVerified: { type: Boolean, required: true, default: false },

    lastLoginAt: { type: Date, required: false },
    passwordChangedAt: { type: Date, required: false }
  },
  { timestamps: true }
);

export type User = InferSchemaType<typeof userSchema>;

export const UserModel = mongoose.model<User>("User", userSchema);


