import React, { createContext, useCallback, useEffect, useMemo, useState } from "react";
import type { UserPublic } from "../types/api";
import { userService } from "../api/userService";
import { clearAccessToken, getAccessToken, setAccessToken } from "../utils/storage";

type AuthState = {
  isBootstrapping: boolean;
  user: UserPublic | null;
};

type AuthContextValue = AuthState & {
  isAuthenticated: boolean;
  login: (input: { email: string; password: string }) => Promise<void>;
  register: (input: { email: string; displayName: string; password: string }) => Promise<void>;
  logout: () => void;
  refreshMe: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({ isBootstrapping: true, user: null });

  const refreshMe = useCallback(async () => {
    const token = getAccessToken();
    if (!token) {
      setState({ isBootstrapping: false, user: null });
      return;
    }

    try {
      const me = await userService.me();
      setState({ isBootstrapping: false, user: me });
    } catch {
      // Token invalid/expired: drop it and force re-login.
      clearAccessToken();
      setState({ isBootstrapping: false, user: null });
    }
  }, []);

  useEffect(() => {
    void refreshMe();
  }, [refreshMe]);

  const login = useCallback(async (input: { email: string; password: string }) => {
    const res = await userService.login(input);
    setAccessToken(res.accessToken);
    setState({ isBootstrapping: false, user: res.user });
  }, []);

  const register = useCallback(async (input: { email: string; displayName: string; password: string }) => {
    const res = await userService.register(input);
    setAccessToken(res.accessToken);
    setState({ isBootstrapping: false, user: res.user });
  }, []);

  const logout = useCallback(() => {
    clearAccessToken();
    setState({ isBootstrapping: false, user: null });
  }, []);

  const value: AuthContextValue = useMemo(
    () => ({
      ...state,
      isAuthenticated: Boolean(state.user),
      login,
      register,
      logout,
      refreshMe
    }),
    [login, logout, refreshMe, register, state]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}


