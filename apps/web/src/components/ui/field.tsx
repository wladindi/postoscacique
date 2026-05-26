import type { InputHTMLAttributes } from "react";

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Field({ id, label, ...props }: FieldProps) {
  const inputId = id ?? label.toLowerCase().replaceAll(" ", "-");

  return (
    <label className="field" htmlFor={inputId}>
      <span className="field__label">{label}</span>
      <input className="field__input" id={inputId} {...props} />
    </label>
  );
}
