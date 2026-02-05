import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { loginRequest } from "../services";

export type LoginPayload = {
  email: string;
  password: string;
};

type AuthState = {
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;

  login: (data: LoginPayload) => Promise<void>;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (data) => {
        set({ isLoading: true, error: null });

        try {
          const res = await loginRequest(data);

          set({
            token: res.user.token,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
        } catch (err: any) {
          set({
            isLoading: false,
            error: err.message,
          });
        }
      },

      logout: () =>
        set({
          token: null,
          isAuthenticated: false,
        }),
    }),

    {
      name: "auth-store",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state?.token) {
          state.isAuthenticated = true;
        }
      },
    },
  ),
);
