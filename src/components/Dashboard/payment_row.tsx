import type { Payment } from "../../types";

interface PaymentRowProps {
  payment: Payment;
  onDelete: (payment: Payment) => void;
}

const formatDate = (dateStr?: string | null) => {
  if (!dateStr) return "-";
  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

export const PaymentRow = ({ payment, onDelete }: PaymentRowProps) => {
  return (
    <tr key={payment.id} className="bg-white hover:bg-gray-50">
      <td className="px-6 py-4">{payment.id}</td>
      <th className="px-6 py-4 font-medium whitespace-nowrap text-gray-900">
        {payment.name}
      </th>
      <td className="px-6 py-4">{payment.type}</td>
      <td className="px-6 py-4">{payment.category}</td>
      <td className="px-6 py-4">${payment.amount}</td>
      <td className="px-6 py-4">{formatDate(payment.date)}</td>
      <td className="px-6 py-4">{formatDate(payment.due_date)}</td>
      <td className="px-6 py-4">
        <span
          className={`font-medium ${
            payment.paid ? "text-green-600" : "text-red-600"
          }`}
        >
          {payment.paid ? "Paid" : "Unpaid"}
        </span>
      </td>
      <td className="px-6 py-4">{formatDate(payment.paid_at)}</td>
      <td className="px-6 py-4">
        <span
          className={`font-medium ${
            payment.recurrent ? "text-blue-600" : "text-gray-500"
          }`}
        >
          {payment.recurrent ? "Yes" : "No"}
        </span>
      </td>
      <td className="px-6 py-4">{payment.frequency || "-"}</td>
      <td className="px-6 py-4 text-right">
        <a
          href={`/payments/${payment.id}/edit`}
          className="font-medium text-blue-600 hover:underline"
        >
          Edit
        </a>
      </td>
      <td className="px-6 py-4 text-right">
        <a
          href={`/payments/${payment.id}/delete`}
          onClick={(e) => {
            e.preventDefault();
            onDelete(payment);
          }}
          className="font-medium text-red-600 hover:underline"
        >
          Delete
        </a>
      </td>
    </tr>
  );
};
