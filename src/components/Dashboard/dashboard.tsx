import { usePayments } from "../../hooks";
import { AddPaymentComponent } from "./add_payment";
import { PaymentsTableComponent } from "./payments_table";

export const DashboardComponent = () => {
  const { payments, loading, error } = usePayments();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}...</p>;

  const prepareDelete = (payment: { id: number; name: string }) => {
    localStorage.setItem("paymentName", payment.name);
    window.location.href = `/payments/${payment.id}/delete`;
  };

  return (
    <>
      <AddPaymentComponent />
      <PaymentsTableComponent payments={payments} onDelete={prepareDelete} />
    </>
  );
};
