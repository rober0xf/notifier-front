interface Props {
  value: number;
  onChange: (value: number) => void;
  required?: boolean;
}

export const AmountPayment = ({ value, onChange, required = false }: Props) => {
  return (
    <div className="w-full px-4 lg:w-6/12">
      <div className="relative mb-3 w-full">
        <label className="mb-2 block text-xs font-bold uppercase">Amount</label>
        <input
          required={required}
          type="number"
          step="1"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full rounded border-0 bg-white px-3 py-3 text-sm shadow"
        />
      </div>
    </div>
  );
};
