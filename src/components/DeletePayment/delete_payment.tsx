import { useNavigate } from "react-router-dom";
import { useDeletePayment } from "../../hooks";

interface DeletePaymentProps {
  paymentId: number;
}

export const DeletePaymentComponent = ({ paymentId }: DeletePaymentProps) => {
  const navigate = useNavigate();
  const { deletePayment, statusMessage, statusType, isLoading } =
    useDeletePayment();

  const handleDelete = () => {
    deletePayment(paymentId);
  };

  const handleCancel = () => {
    navigate("/dashboard");
  };

  return (
    <div className="p-6 text-center h-screen w-screen">
      <h1 className="mb-4 text-xl font-bold">Delete Payment</h1>

      <p className="mb-6 font-medium">
        Are you sure you want to delete this payment?
      </p>

      {statusMessage && (
        <div
          className={`mb-4 rounded p-3 ${
            statusType === "error"
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {statusMessage}
        </div>
      )}

      <div className="space-x-4">
        <button
          onClick={handleDelete}
          disabled={isLoading}
          className={`cursor-pointer rounded bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700 ${
            isLoading ? "cursor-not-allowed opacity-50" : ""
          }`}
        >
          {isLoading ? "Deleting..." : "Delete"}
        </button>

        <button
          onClick={handleCancel}
          disabled={isLoading}
          className="cursor-pointer rounded bg-gray-300 px-4 py-2 font-medium text-gray-800 hover:bg-gray-400"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
