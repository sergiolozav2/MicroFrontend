import { ButtonHTMLAttributes, ReactNode } from "react";
import { IconContext } from "react-icons";

interface RoutesBarOptionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  selected: boolean;
  children: ReactNode;
}

export function RoutesBarOption(props: RoutesBarOptionProps) {
  return (
    <button
      className={`${props.selected ? "text-orange-500" : "text-stone-600"} flex w-full flex-col items-center pt-2 text-xs font-medium`}
      {...props}
    >
      <IconContext.Provider
        value={{
          className: `${props.selected ? "text-orange-500" : "text-stone-600"}`,
        }}
      >
        {props.children}
      </IconContext.Provider>
      {props.label}
    </button>
  );
}
