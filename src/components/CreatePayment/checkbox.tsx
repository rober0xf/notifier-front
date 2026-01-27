interface Props {
  id: string;
  label: string;
  name: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const CheckboxInput = ({
  id,
  label,
  name,
  checked,
  onChange,
}: Props) => (
  <div className="flex items-center space-x-2">
    <input
      id={id}
      name={name}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="h-4 w-4"
    />
    <label htmlFor={id} className="text-xs font-bold uppercase">
      {label}
    </label>
  </div>
);
