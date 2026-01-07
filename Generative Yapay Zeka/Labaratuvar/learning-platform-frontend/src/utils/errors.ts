import axios from "axios";
import type { ApiError } from "../types/api";

export function getHumanError(err: unknown): string {
  if (axios.isAxiosError(err)) {
    const status = err.response?.status;
    const data = err.response?.data as Partial<ApiError> | undefined;

    if (!err.response) {
      return "Cannot reach backend. Check VITE_USER_SERVICE_URL and CORS (User service must allow http://localhost:5173).";
    }

    if (data?.message) return data.message;
    if (status === 409) return "Email already in use.";
    if (status === 400) return "Invalid input. Check email/password requirements.";
    if (status === 401) return "Unauthorized. Please login again.";
    return `Request failed (HTTP ${status ?? "?"}).`;
  }

  return "Something went wrong.";
}


