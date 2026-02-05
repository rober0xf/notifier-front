type Option = {
  label: string;
  value: string;
};

interface Props {
  id: string;
  label: string;
  name: string;
  value: string;
  options: Option[];
  required?: boolean;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

export const SelectInput = ({
  id,
  label,
  name,
  value,
  options,
  required,
  onChange,
}: Props) => (
  <div className="relative mb-3 w-full">
    <label htmlFor={id} className="mb-2 block text-xs font-bold uppercase">
      {label}
    </label>
    <select
      id={id}
      name={name}
      value={value}
      required={required}
      onChange={onChange}
      className="w-full rounded border-0 bg-white px-3 py-3 text-sm shadow"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);
