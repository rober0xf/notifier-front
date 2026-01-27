import type { Payment } from "../../types";
import { PaymentRow } from "./payment_row";

interface TableProps {
  payments: Payment[];
  onDelete: (payment: Payment) => void;
}

export const PaymentsTableComponent = ({ payments, onDelete }: TableProps) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full border-collapse border-2 border-yellow-500 text-left text-sm text-gray-500 rtl:text-right">
        <thead className="bg-gray-50 text-xs text-gray-700 uppercase">
          <tr>
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Type</th>
            <th className="px-6 py-3">Category</th>
            <th className="px-6 py-3">Amount</th>
            <th className="px-6 py-3">Date</th>
            <th className="px-6 py-3">Due Date</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Paid At</th>
            <th className="px-6 py-3">Recurrent</th>
            <th className="px-6 py-3">Frequency</th>
            <th className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
            <th className="px-6 py-3">
              <span className="sr-only">Delete</span>
            </th>
          </tr>
        </thead>

        <tbody>
          {payments.length === 0 ? (
            <tr>
              <td
                colSpan={12}
                className="px-6 py-4 text-center text-xl font-medium text-gray-900"
              >
                No payments found
              </td>
            </tr>
          ) : (
            payments.map((payment: Payment) => (
              <PaymentRow
                key={payment.id}
                payment={payment}
                onDelete={onDelete}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
