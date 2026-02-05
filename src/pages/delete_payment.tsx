import { useParams } from "react-router-dom";
import { DeletePaymentComponent } from "../components/DeletePayment";

export const DeletePaymentPage = () => {
  const { id } = useParams<{ id: string }>();
  const paymentId = Number(id);

  if (!paymentId || isNaN(paymentId)) {
    return (
      <div className="p-6 text-center w-screen h-screen mt-5">
        <p className="text-red-600 text-2xl">Invalid Payment ID</p>
        <a
          href="/dashboard"
          className="text-blue-500 underline mt-2 font-medium"
        >
          Go back to Dashboard
        </a>
      </div>
    );
  }

  return <DeletePaymentComponent paymentId={paymentId} />;
};
