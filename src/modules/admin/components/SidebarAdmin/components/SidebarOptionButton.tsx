import { ButtonHTMLAttributes } from "react";

interface SidebarOptionButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick: () => void;
  icon: React.ReactNode;
}

export function SidebarOptionButton(props: SidebarOptionButton) {
  return (
    <button
      className="rounded-md py-2 pl-3 pr-4 text-left text-stone-600 hover:bg-stone-900/5"
      onClick={props.onClick}
    >
      <div className="flex items-center text-sm">
        <span className="text-lg">{props.icon}</span>
        <h3 className="pl-4">{props.text}</h3>
      </div>
    </button>
  );
}
