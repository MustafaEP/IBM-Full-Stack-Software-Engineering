import axios from "axios";
import { clearAccessToken, getAccessToken } from "../utils/storage";

/**
 * Dedicated HTTP clients per backend service keeps microservice boundaries explicit.
 * Each client has the same auth + error handling behavior.
 */
function createClient(baseURL: string) {
  const client = axios.create({
    baseURL,
    headers: { "Content-Type": "application/json" }
  });

  client.interceptors.request.use((config) => {
    const token = getAccessToken();
    if (token) {
      config.headers = config.headers ?? {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  client.interceptors.response.use(
    (res) => res,
    (err) => {
      // If token is invalid/expired, clear it so the UI can redirect to login.
      if (err?.response?.status === 401) {
        clearAccessToken();
      }
      return Promise.reject(err);
    }
  );

  return client;
}

export const userApi = createClient(import.meta.env.VITE_USER_SERVICE_URL);
export const recoApi = createClient(import.meta.env.VITE_RECO_SERVICE_URL);
export const exerciseApi = createClient(import.meta.env.VITE_EXERCISE_SERVICE_URL);


