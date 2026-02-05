import { useNavigate } from "react-router-dom";
import type { StatusType } from "../types";
import { useEffect, useState } from "react";
import { usePaymentForm } from "./use_payment_form";
import { usePaymentValidation } from "./use_payment_validation";
import { useAuthStore } from "../store";
import { getPaymentById, updatePayment } from "../services";

export const useUpdatePayment = (paymentId: number) => {
  const navigate = useNavigate();
  const { payment, setPayment, handleChange, resetForm } = usePaymentForm();
  const { validate, buildDTO } = usePaymentValidation();

  const [statusMessage, setStatusMessage] = useState<string>("");
  const [statusType, setStatusType] = useState<StatusType>("success");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(true);

  useEffect(() => {
    const fetchPayment = async () => {
      setIsFetching(true);
      try {
        const token = useAuthStore.getState().token;
        if (!token) {
          throw new Error("no token found");
        }

        const fetchedPayment = await getPaymentById(paymentId, token);
        setPayment(fetchedPayment);
      } catch (error) {
        const message =
          error instanceof Error
            ? error.message
            : "error during fetching payment";
        setStatusMessage(`Error: ${message}`);
        setStatusType("error");
      } finally {
        setIsFetching(false);
      }
    };

    fetchPayment();
  }, [paymentId]);

  const handleUpdatePayment = async () => {
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
        throw new Error("No authentication token found");
      }

      const paymentDTO = buildDTO(payment);
      await updatePayment(paymentId, paymentDTO, token);

      setStatusMessage("Payment updated successfully");
      setStatusType("success");

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "An unexpected error occurred";

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
    updatePayment: handleUpdatePayment,
    statusMessage,
    statusType,
    isLoading,
    isFetching,
    resetForm,
  };
};
