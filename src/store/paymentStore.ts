import { create } from "zustand";
import type { Payment } from "../types";
import { createJSONStorage, persist } from "zustand/middleware";
import { useAuthStore } from "./authStore";
import { API_BASE_URL } from "../services";

type PaymentState = {
  payments: Payment[];
  fetchPayments: () => Promise<void>;
  deletePayment: (id: number) => Promise<void>;
};

export const usePaymentStore = create<PaymentState>()(
  persist(
    (set, get) => ({
      payments: [],

      fetchPayments: async () => {
        try {
          if (typeof window === "undefined") return;

          const email = localStorage.getItem("email");
          const token = useAuthStore.getState().token;
          const user = useAuthStore.getState().user;

          if (!email) {
            console.error("email not found in local storage");
            return;
          }

          const url = `${API_BASE_URL}/v1/auth/payments/user/${user?.id}`;
          const response = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.ok) {
            const res: Payment[] = await response.json();
            set({ payments: res });
          } else {
            console.error("error fetching payments:", await response.text());
          }
        } catch (error) {
          console.error("error fetching payments:", error);
        }
      },

      deletePayment: async (id: number) => {
        const payments = get().payments;
        if (!payments.length) return;

        try {
          const token = localStorage.getItem("token");
          const response = await fetch(
            `${API_BASE_URL}/v1/auth/payments/${id}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            },
          );
          if (response.ok) {
            set((state) => ({
              payments: state.payments.filter((p) => p.id !== id),
            }));
          } else {
            console.error("error deleting payment:", await response.text());
          }
        } catch (error) {
          console.error("error deleting payment:", error);
        }
      },
    }),

    {
      name: "payment-store",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
