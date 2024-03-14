import { useNavigate } from "@tanstack/react-router";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { IconContext } from "react-icons";

interface RoutesBarOptionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  selected: boolean;
  tab: number;
  children: ReactNode;
}

export function RoutesBarOption(props: RoutesBarOptionProps) {
  const navigate = useNavigate();
  function handleChangeTab() {
    navigate({ search: (prev) => ({ ...prev, tab: props.tab }) });
  }
  return (
    <button
      className={`${props.selected ? "text-primary-500" : "text-stone-500/85"} flex w-full flex-col items-center pt-2 text-sm font-medium md:text-xs`}
      onClick={handleChangeTab}
      {...props}
    >
      <IconContext.Provider
        value={{
          className: `${props.selected ? "text-primary-500" : "text-stone-500/85"} text-xl md:text-lg`,
        }}
      >
        {props.children}
      </IconContext.Provider>
      {props.label}
    </button>
  );
}
