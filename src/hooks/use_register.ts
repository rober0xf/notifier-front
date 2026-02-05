import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterForm } from "./use_register_form";
import { registerRequest } from "../services";

export const useRegister = () => {
  const { values, setters, validate } = useRegisterForm();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const navigate = useNavigate();

  const submit = async () => {
    setError(null);
    setSuccess(null);

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      await registerRequest({
        username: values.username.trim(),
        email: values.email.trim(),
        password: values.password,
      });

      setSuccess("email sent for verification. check your email");

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "unknown error");
    } finally {
      setLoading(false);
    }
  };

  return {
    values,
    setters,
    loading,
    error,
    success,
    submit,
  };
};
