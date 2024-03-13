import { InputHTMLAttributes, ReactNode } from "react";

interface SearchAddressInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  icon: ReactNode;
}

export function SearchAddressInput(props: SearchAddressInputProps) {
  return (
    <label className="flex items-center rounded-md border border-stone-200/80 bg-stone-100 pl-2">
      {props.icon}
      <input
        className="w-full bg-inherit py-1.5 pl-2 text-sm outline-none placeholder:text-stone-400"
        {...props}
      />
    </label>
  );
}
