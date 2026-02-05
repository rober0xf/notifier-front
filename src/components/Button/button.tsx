interface Props {
  type?: "submit" | "button" | "reset";
  label: string;
  className?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  type = "submit",
  label,
  className,
  disabled,
  onClick,
}: Props) => {
  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
