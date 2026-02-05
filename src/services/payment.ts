import type { CreatePaymentDTO, Payment } from "../types/payment";

const BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000/v1/auth";

const parseError = async (response: Response): Promise<string> => {
  try {
    const data = await response.json();
    return data.message || JSON.stringify(data);
  } catch {
    return (await response.text()) || `HTTP Error: ${response.status}`;
  }
};

export const createPayment = async (
  paymentData: CreatePaymentDTO,
  token: string,
): Promise<Payment> => {
  const response = await fetch(`${BASE_URL}/payments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(paymentData),
  });

  if (!response.ok) {
    const errorMessage = await parseError(response);
    throw new Error(errorMessage);
  }

  return response.json();
};

export const getPayments = async (token: string): Promise<Payment[]> => {
  const response = await fetch(`${BASE_URL}/payments`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorMessage = await parseError(response);
    throw new Error(errorMessage);
  }

  return response.json();
};

export const getPaymentById = async (
  id: number,
  token: string,
): Promise<Payment> => {
  const response = await fetch(`${BASE_URL}/payments/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorMessage = await parseError(response);
    throw new Error(errorMessage);
  }

  return response.json();
};

export const updatePayment = async (
  id: number,
  paymentData: CreatePaymentDTO,
  token: string,
): Promise<Payment> => {
  const response = await fetch(`${BASE_URL}/payments/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(paymentData),
  });

  if (!response.ok) {
    const errorMessage = await parseError(response);
    throw new Error(errorMessage);
  }

  return response.json();
};

export const deletePayment = async (
  id: number,
  token: string,
): Promise<void> => {
  const response = await fetch(`${BASE_URL}/payments/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorMessage = await parseError(response);
    throw new Error(errorMessage);
  }
};
