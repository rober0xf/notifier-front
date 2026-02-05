import type { LoginPayload } from "../store";

export const loginRequest = async (payload: LoginPayload) => {
  const response = await fetch("http://localhost:3000/v1/users/login", {
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
