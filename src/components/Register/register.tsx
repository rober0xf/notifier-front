import { useState } from "react";
import { InputComponent } from "../Input";
import { Button } from "../Button";
import { TermsAndConditionsComponent } from "../TermsAndConditions";
import RegistrationImage from "/assets/images/registration.jpg";
import { useRegister } from "../../hooks";
import { StatusMessageComponent } from "../StatusMessage";
import { GotoLoginComponent } from "./goto_login";

export function RegisterComponent() {
  const { values, setters, loading, error, success, submit } = useRegister();
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLocalError(null);

    if (!termsAccepted) {
      setLocalError("you must accept the terms and conditions.");
      return;
    }

    await submit();
  }

  return (
    <div className="min-h-screen py-40">
      <div className="container mx-auto">
        <div
          className="mx-auto flex w-10/12 flex-col overflow-hidden rounded-3xl border-gray-800 lg:w-8/12 lg:flex-row"
          style={{
            backgroundColor: "#222",
            filter:
              "drop-shadow(0 0 30px rgba(0, 0, 0, 0.9)) drop-shadow(0 0 30px rgba(0, 0, 0, 0.6)) drop-shadow(0 0 30px rgba(0, 0, 0, 0.4))",
          }}
        >
          {/* left */}
          <div
            className="relative flex w-full flex-col items-center bg-cover bg-center bg-no-repeat p-12 lg:w-1/2"
            style={{ backgroundImage: `url(${RegistrationImage})` }}
          >
            <h1 className="mb-3 text-3xl font-medium text-gray-300">Welcome</h1>
            <div>
              <p className="mt-5 text-sm font-medium text-gray-300">
                An easy to use app to keep an eye on your upcoming payments.
              </p>
            </div>
          </div>

          {/* right */}
          <div className="w-full px-12 py-16 lg:w-1/2">
            <h2 className="-mt-4 text-center text-3xl font-medium text-gray-300">
              Register
            </h2>
            <p className="mt-6 mb-4 text-sm font-medium text-gray-300">
              Please fill out the form below to register.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mt-5">
                <InputComponent
                  value={values.username}
                  onChange={setters.setUsername}
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="border border-gray-400 px-2 py-1 font-medium text-white"
                  required
                />
              </div>

              <div className="mt-5">
                <InputComponent
                  value={values.email}
                  onChange={setters.setEmail}
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="border border-gray-400 px-2 py-1 font-medium text-white"
                  required
                />
              </div>

              <div className="mt-5">
                <InputComponent
                  value={values.password}
                  onChange={setters.setPassword}
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="border border-gray-400 px-2 py-1 font-medium text-white"
                  required
                />
              </div>

              <div className="mt-5">
                <InputComponent
                  value={values.confirmPassword}
                  onChange={setters.setConfirmPassword}
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="border border-gray-400 px-2 py-1 font-medium text-white"
                  required
                />
              </div>

              <div className="mt-5">
                <TermsAndConditionsComponent
                  checked={termsAccepted}
                  onChange={setTermsAccepted}
                />
              </div>

              {(localError || error) && (
                <StatusMessageComponent
                  message={localError || error}
                  type="error"
                />
              )}
              <StatusMessageComponent message={success} type="sucess" />

              <div className="mt-5">
                <Button
                  type="submit"
                  disabled={loading}
                  className={`w-full cursor-pointer bg-green-800 py-3 text-center text-lg font-medium text-gray-200 duration-300 hover:bg-green-900 ${loading ? "cursor-not-allowed opacity-50" : ""}`}
                  label={loading ? "Registering..." : "Register"}
                />
              </div>

              <GotoLoginComponent />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
