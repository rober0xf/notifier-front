import { useEffect, useState } from "react";
import type { PaymentFormState } from "../types";

const initPayment: PaymentFormState = {
  id: 0,
  user_id: 0,
  name: "",
  amount: 0,
  type: "",
  category: "",
  date: "",
  due_date: null,
  paid: false,
  paid_at: null,
  recurrent: false,
  frequency: null,
  receipt_url: null,
};

export const usePaymentForm = () => {
  const [payment, setPayment] = useState<PaymentFormState>(initPayment);

  // if frequency is set then recurrent is auto checked
  useEffect(() => {
    if (payment.frequency) {
      setPayment((prev) => ({ ...prev, recurrent: true }));
    }
  }, [payment.frequency]);

  // if paid_at is set then paid is auto checked
  useEffect(() => {
    if (payment.paid_at) {
      setPayment((prev) => ({ ...prev, paid: true }));
    }
  }, [payment.paid_at]);

  // if recurrent is unchecked then frequency is cleared
  useEffect(() => {
    if (!payment.recurrent) {
      setPayment((prev) => ({ ...prev, frequency: null }));
    }
  }, [payment.recurrent]);

  // if paid is unchecked then paid_at is cleared
  // if paid_at is cleared then paid is unchecked
  useEffect(() => {
    if (!payment.paid_at) {
      setPayment((prev) => ({ ...prev, paid_at: null }));
    } else if (!payment.paid_at) {
      setPayment((prev) => ({ ...prev, paid: false }));
    }
  }, [payment.paid, payment.paid_at]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, type, value } = e.target;

    let processedValue: string | number | boolean = value;

    if (e.target instanceof HTMLInputElement) {
      if (type === "checkbox") {
        processedValue = e.target.checked;
      } else if (type === "number") {
        processedValue = Number(value);
      }
    }

    setPayment((prev) => ({ ...prev, [name]: processedValue }));
  };

  const resetForm = () => {
    setPayment(initPayment);
  };

  return {
    payment,
    setPayment,
    handleChange,
    resetForm,
  };
};
