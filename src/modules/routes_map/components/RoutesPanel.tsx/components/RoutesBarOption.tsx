import { ButtonHTMLAttributes } from "react";

interface RoutesBarOptionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  selected: boolean;
}

export function RoutesBarOption(props: RoutesBarOptionProps) {
  return (
    <button
      className={`${props.selected ? "border-amber-600 text-amber-700" : ""} font-medium w-full pt-2 border-t-4 text-lg`}
      {...props}
    >
      {props.label}
    </button>
  );
}
