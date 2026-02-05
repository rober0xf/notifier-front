import type { CreatePaymentDTO, PaymentFormState } from "../types";

export const usePaymentValidation = () => {
  const validate = (
    payment: PaymentFormState,
  ): {
    isValid: boolean;
    error?: string;
  } => {
    if (!payment.name.trim()) {
      return { isValid: false, error: "Name is required" };
    }
    if (payment.amount <= 0) {
      return { isValid: false, error: "Amount must be greater than 0" };
    }
    if (!payment.type) {
      return { isValid: false, error: "Type is required" };
    }
    if (!payment.category) {
      return { isValid: false, error: "Category is required" };
    }
    if (!payment.date) {
      return { isValid: false, error: "Date is required" };
    }
    if (payment.recurrent && !payment.frequency) {
      return {
        isValid: false,
        error: "Frequency is required for recurrent payments",
      };
    }
    if (payment.paid && !payment.paid_at) {
      return {
        isValid: false,
        error: "Paid date is required when payment is marked as paid",
      };
    }
    return { isValid: true };
  };

  const buildDTO = (payment: PaymentFormState): CreatePaymentDTO => {
    return {
      name: payment.name,
      amount: Number(payment.amount),
      type: payment.type as CreatePaymentDTO["type"],
      category: payment.category as CreatePaymentDTO["category"],
      date: payment.date,
      due_date: payment.due_date || null,
      paid: payment.paid,
      paid_at: payment.paid ? payment.paid_at || null : null,
      recurrent: payment.recurrent,
      frequency: payment.frequency || null,
      receipt_url: payment.receipt_url || null,
    };
  };

  return { validate, buildDTO };
};
