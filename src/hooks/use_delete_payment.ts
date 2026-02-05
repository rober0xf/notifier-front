import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { StatusType } from "../types";
import { useAuthStore } from "../store";
import { deletePayment } from "../services";

export const useDeletePayment = () => {
  const navigate = useNavigate();
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [statusType, setStatusType] = useState<StatusType>("success");
  const [isLoading, setIsLoading] = useState(false);

  const handleDeletePayment = async (paymentId: number) => {
    setStatusMessage("");
    setIsLoading(true);

    try {
      const token = useAuthStore.getState().token;

      if (!token) {
        throw new Error("no token found");
      }

      await deletePayment(paymentId, token);

      setStatusMessage("Payment deleted successfully");
      setStatusType("success");

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "an error occurred";

      setStatusMessage(`Error: ${message}`);
      setStatusType("error");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    deletePayment: handleDeletePayment,
    statusMessage,
    statusType,
    isLoading,
  };
};
