import { useCallback, useEffect, useState } from "react";
import type { Payment } from "../types";
import { useAuthStore } from "../store";
import { API_BASE_URL } from "../services";

export function usePayments() {
  const user = useAuthStore((state) => state.user);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPayments = useCallback(async () => {
    if (!user) return;

    try {
      setLoading(true);
      setError(null);

      const url = `${API_BASE_URL}/v1/auth/payments/user/${user.id}}`;

      const response = await fetch(url, {
        method: "GET",
        credentials: "include",
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
