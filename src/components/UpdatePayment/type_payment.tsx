import type { Payment } from "../../types";

interface Props {
  value: Payment["type"];
  onChange: (value: Payment["type"]) => void;
}

export const TypePayment = ({ value, onChange }: Props) => {
  return (
    <div className="w-full px-4 lg:w-6/12">
      <div className="relative mb-3 w-full">
        <label className="mb-2 block text-xs font-bold uppercase">
          Payment Type
        </label>
        <select
          value={value}
          onChange={(e) => {
            onChange(e.target.value as Payment["type"]);
          }}
          className="w-full rounded border-0 bg-white px-3 py-3 text-sm shadow"
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
          <option value="subscription">Subscription</option>
        </select>
      </div>
    </div>
  );
};
