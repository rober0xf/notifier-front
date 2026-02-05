import { Navigate } from "react-router-dom";
import { useAuthStore } from "./store";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: Props) => {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
