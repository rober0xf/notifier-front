import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { StatusType } from "../types/payment";
import { useAuthStore } from "../store";
import { createPayment } from "../services";
import { usePaymentForm } from "./use_payment_form";
import { usePaymentValidation } from "./use_payment_validation";

export const useCreatePayment = () => {
  const navigate = useNavigate();
  const { payment, setPayment, handleChange, resetForm } = usePaymentForm();
  const { validate, buildDTO } = usePaymentValidation();

  const [statusMessage, setStatusMessage] = useState<string>("");
  const [statusType, setStatusType] = useState<StatusType>("success");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCreatePayment = async () => {
    setStatusMessage("");

    const validationRes = validate(payment);
    if (!validationRes.isValid) {
      setStatusMessage(validationRes.error || "validation failed");
      setStatusType("error");
      return;
    }
    setIsLoading(true);

    try {
      const token = useAuthStore.getState().token;
      if (!token) {
        throw new Error("no token found");
      }

      const paymentDTO = buildDTO(payment);
      await createPayment(paymentDTO, token);

      setStatusMessage("payment created successfully");
      setStatusType("success");

      resetForm();

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
    payment,
    setPayment,
    handleChange,
    createPayment: handleCreatePayment,
    statusMessage,
    statusType,
    isLoading,
    resetForm,
  };
};
