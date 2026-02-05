import type { CheckboxProps } from "../../types";

export const TermsAndConditionsComponent = ({
  checked,
  required,
  onChange,
  className,
}: CheckboxProps) => {
  return (
    <div>
      <label className="mt-5 flex cursor-pointer items-center">
        <input
          type="checkbox"
          checked={checked}
          required={required}
          className={`border border-gray-400 ${className || ""}`}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <span className="ml-2 font-medium text-white">
          I accept the{" "}
          <a href="/terms" className="font-bold text-green-600">
            Terms of Use
          </a>{" "}
          and{" "}
          <a href="/conditions" className="font-bold text-green-600">
            Privacy Policy
          </a>
        </span>
      </label>
    </div>
  );
};
