import { useCallback, useEffect, useState } from "react";
import type { Payment } from "../types";
import { useAuthStore } from "../store";

function getEmailFromToken(token: string): string | null {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.email ?? null;
  } catch {
    return null;
  }
}

export function usePayments() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPayments = useCallback(async () => {
    try {
      if (typeof window === "undefined") return;
      setLoading(true);
      setError(null);

      const token = useAuthStore.getState().token;
      const email = token ? getEmailFromToken(token) : null;
      console.log("email: ", email);
      if (!email) {
        console.error("email not found in local storage");
        return;
      }

      const url = `http://localhost:3000/v1/auth/payments/email?email=${encodeURIComponent(email)}`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const data: Payment[] = await response.json();
      setPayments(data);
    } catch (error) {
      console.error("error fetching payments:", error);
      setError("error fetching payments");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPayments();
  }, [fetchPayments]);

  return {
    payments,
    loading,
    error,
    fetchPayments,
  };
}
