import { useState } from "react";

interface RegisterValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function useRegisterForm() {
  const [values, setValues] = useState<RegisterValues>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const setters = {
    setUsername: (username: string) => setValues((v) => ({ ...v, username })),
    setEmail: (email: string) => setValues((v) => ({ ...v, email })),
    setPassword: (password: string) => setValues((v) => ({ ...v, password })),
    setConfirmPassword: (confirmPassword: string) =>
      setValues((v) => ({ ...v, confirmPassword })),
  };

  function validate(): string | null {
    if (!values.username.trim()) {
      return "username is required";
    }
    if (!values.email.trim()) {
      return "email is required";
    }
    if (!values.password) {
      return "password is required";
    }
    if (values.password.length < 6) {
      return "password must be at least 6 characters";
    }
    if (values.confirmPassword != values.password) {
      return "passwords does not match";
    }

    return null;
  }

  return { values, setters, validate };
}
