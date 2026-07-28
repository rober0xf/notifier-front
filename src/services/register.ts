import { API_BASE_URL } from "./payment";

type RegisterPayload = {
  username: string;
  email: string;
  password: string;
};

export const registerRequest = async (payload: RegisterPayload) => {
  const response = await fetch(`${API_BASE_URL}/v1/users/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || "registration failed");
  }

  return data;
};
