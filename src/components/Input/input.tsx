interface Props {
  value?: string | number;
  id?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: (value: string) => void;
}

export const InputComponent = ({
  value,
  id,
  name,
  type = "text",
  placeholder,
  required,
  disabled,
  className,
  onChange,
}: Props) => {
  return (
    <input
      value={value}
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      className={className}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
};
