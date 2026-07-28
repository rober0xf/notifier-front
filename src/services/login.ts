import type { LoginPayload } from "../store";
import { API_BASE_URL } from "./payment";

export const loginRequest = async (payload: LoginPayload) => {
  const response = await fetch(`${API_BASE_URL}/v1/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  let data;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    throw new Error(data?.message || data?.error || "login failed");
  }

  return data;
};
