import { InputHTMLAttributes } from "react";

type AuthInputProps = InputHTMLAttributes<HTMLInputElement>;

export function AuthInput(props: AuthInputProps) {
  return (
    <input className="mb-4 border border-stone-300 px-2 py-1" {...props} />
  );
}
