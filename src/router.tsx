import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "./components/Layouts";
import {
  DashboardPage,
  DeletePaymentPage,
  HomePage,
  LoginPage,
  RegisterPage,
  UpdatePaymentPage,
} from "./pages";
import { ProtectedRoute } from "./requireAuth";
import { CreatePaymentComponent } from "./components/CreatePayment";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        handle: { title: "Notifier | Home" },
      },

      {
        path: "/login",
        element: <LoginPage />,
      },

      {
        path: "/register",
        element: <RegisterPage />,
        handle: { title: "Notifier | Register" },
      },

      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        ),
        handle: { title: "Notifier | Dashboard" },
      },

      {
        path: "/payments/create",
        element: (
          <ProtectedRoute>
            <CreatePaymentComponent />
          </ProtectedRoute>
        ),
        handle: { title: "Notifier | Create payment" },
      },

      {
        path: "/payments/:id/edit",
        element: (
          <ProtectedRoute>
            <UpdatePaymentPage />
          </ProtectedRoute>
        ),
        handle: { title: "Notifier | Update payment" },
      },

      {
        path: "/payments/:id/delete",
        element: (
          <ProtectedRoute>
            <DeletePaymentPage />
          </ProtectedRoute>
        ),
        handle: { title: "Notifier | Delete payment" },
      },
    ],
  },
]);
