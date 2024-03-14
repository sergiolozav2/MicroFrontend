import { Link, LinkProps } from "@tanstack/react-router";

interface SidebarOptionButton extends LinkProps {
  text: string;
  onClick: () => void;
  icon: React.ReactNode;
}

export function SidebarLink(props: SidebarOptionButton) {
  return (
    <Link
      className="[&.active]:bg-primary-100 [&.active]:border-primary-600 [&.active]:text-primary-600 rounded-md border-l-4 border-transparent py-2 pl-3 pr-4 text-left text-stone-600 hover:bg-stone-900/5"
      to={props.to}
      onClick={props.onClick}
    >
      <div className="flex items-center text-sm">
        <span className="text-lg">{props.icon}</span>
        <h3 className="pl-3">{props.text}</h3>
      </div>
    </Link>
  );
}
