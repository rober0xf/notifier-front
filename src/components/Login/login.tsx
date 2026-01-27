import { useEffect, useState } from "react";
import { useAuthStore } from "../../store";
import { Button } from "../Button";
import { InputComponent } from "../Input";
import LoginImage from "/assets/images/login.jpg";
import { GotoRegisterComponent } from "./goto_register";
import { StatusMessageComponent } from "../StatusMessage";
import { ForgotPasswordComponent } from "./forgot_password";
import { useNavigate } from "react-router-dom";

export const LoginComponent = () => {
  const { login, isAuthenticated, isLoading, error } = useAuthStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [localError, setLocalError] = useState<string | null>(null);

  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLocalError(null);

    if (!email || !password) {
      setLocalError("email and password are required");
      return;
    }

    await login({ email, password });
  }

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="relative mt-16 flex w-[30%] flex-col items-center gap-4 rounded-md border-2 border-gray-700 px-4 py-6 text-center text-white">
        <h1 className="text-2xl font-medium text-gray-700 uppercase">
          Login Page
        </h1>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          {/* email field */}
          <div className="mx-auto flex w-[60%] flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700 underline"
            >
              Email
            </label>
            <InputComponent
              value={email}
              onChange={setEmail}
              className="rounded-full border-2 bg-gray-200 px-4 py-2 font-semibold text-gray-900 outline-none"
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* password field */}
          <div className="mx-auto flex w-[60%] flex-col gap-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700 underline"
            >
              Password
            </label>
            <InputComponent
              value={password}
              onChange={setPassword}
              className="rounded-full border-2 bg-gray-200 px-4 py-2 font-semibold text-gray-900 outline-none"
              id="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <ForgotPasswordComponent />

          {/* login button */}
          <Button
            type="submit"
            disabled={isLoading}
            label={isLoading ? "Logging In..." : "Login"}
            className={`relative mx-auto flex cursor-pointer flex-col gap-4 rounded-md border-2 bg-[#fcc61d] px-4 py-2 text-center text-xl text-gray-900 shadow-xl shadow-gray-400 transition-colors duration-300 hover:bg-yellow-500 sm:w-37.5 md:w-50 ${isLoading ? "cursor-not-allowed opacity-50" : ""}`}
          />
        </form>

        {(localError || error) && (
          <StatusMessageComponent message={localError || error} type="error" />
        )}

        <GotoRegisterComponent />
      </div>

      <img
        src={LoginImage}
        alt="Logo"
        className="-mt-25 w-auto items-center object-contain select-none"
      />
    </div>
  );
};
