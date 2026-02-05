import { useParams } from "react-router-dom";
import { UpdatePaymentComponent } from "../components/UpdatePayment";

export const UpdatePaymentPage = () => {
  const { id } = useParams<{ id: string }>();
  const paymentId = Number(id);

  if (!paymentId || isNaN(paymentId)) {
    return (
      <div className="p-6 text-center">
        <p className="text-red-600">Invalid Payment ID</p>
        <a href="/dashboard" className="text-blue-500 underline">
          Go back to Dashboard
        </a>
      </div>
    );
  }
  return <UpdatePaymentComponent paymentId={paymentId} />;
};
