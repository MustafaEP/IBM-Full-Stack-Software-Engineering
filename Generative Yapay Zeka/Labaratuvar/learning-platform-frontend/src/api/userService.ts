import { userApi } from "./http";
import type { AuthResponse, UserPublic } from "../types/api";

export const userService = {
  async register(input: { email: string; displayName: string; password: string }) {
    const res = await userApi.post<AuthResponse>("/v1/auth/register", input);
    return res.data;
  },

  async login(input: { email: string; password: string }) {
    const res = await userApi.post<AuthResponse>("/v1/auth/login", input);
    return res.data;
  },

  async me() {
    const res = await userApi.get<UserPublic>("/v1/users/me");
    return res.data;
  },

  async updateMe(input: { displayName: string }) {
    const res = await userApi.patch<UserPublic>("/v1/users/me", input);
    return res.data;
  },

  async changePassword(input: { currentPassword: string; newPassword: string }) {
    const res = await userApi.post<{ ok: boolean }>("/v1/users/me/change-password", input);
    return res.data;
  }
};


