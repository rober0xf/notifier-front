import type React from "react";

interface Props {
  id: string;
  label: string;
  name: string;
  value: string | number;
  type?: string;
  required?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const TextInput = ({
  id,
  label,
  name,
  value,
  type = "text",
  required,
  onChange,
}: Props) => {
  return (
    <div className="relative mb-3 w-full">
      <label htmlFor={id} className="mb-2 block text-xs font-bold uppercase">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        required={required}
        onChange={onChange}
        className="w-full rounded border-0 bg-white px-3 py-3 text-sm shadow"
      />
    </div>
  );
};
