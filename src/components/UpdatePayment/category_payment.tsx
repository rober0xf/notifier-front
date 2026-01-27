import type { Payment } from "../../types";

interface Props {
  value: Payment["category"];
  onChange: (value: Payment["category"]) => void;
}

export const CategoryPayment = ({ value, onChange }: Props) => {
  return (
    <div className="w-full px-4 lg:w-6/12">
      <div className="relative mb-3 w-full">
        <label className="mb-2 block text-xs font-bold uppercase">
          Payment Category
        </label>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value as Payment["category"])}
          className="w-full rounded border-0 bg-white px-3 py-3 text-sm shadow"
          required
        >
          <option value="">-- Select category --</option>
          <option value="electronics">Electronics</option>
          <option value="entertainment">Entertainment</option>
          <option value="education">Education</option>
          <option value="clothing">Clothing</option>
          <option value="work">Work</option>
          <option value="sports">Sports</option>
        </select>
      </div>
    </div>
  );
};
