import { Link, LinkProps } from "@tanstack/react-router";

interface SidebarOptionButton extends LinkProps {
  text: string;
  onClick: () => void;
  icon: React.ReactNode;
}

export function SidebarLink(props: SidebarOptionButton) {
  return (
    <Link
      className="rounded-md py-2 pl-3 pr-4 text-left text-stone-600 hover:bg-stone-900/5 [&.active]:text-orange-600"
      to={props.to}
      onClick={props.onClick}
    >
      <div className="flex items-center text-sm">
        <span className="text-lg">{props.icon}</span>
        <h3 className="pl-4">{props.text}</h3>
      </div>
    </Link>
  );
}
