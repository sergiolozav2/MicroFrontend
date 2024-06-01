import { Link, LinkProps } from "@tanstack/react-router";
import { SidebarTitle } from "./SidebarTitle";

interface SidebarLinkProps extends LinkProps {
  text: string;
  icon?: React.ReactNode;
}

export function SidebarLink(props: SidebarLinkProps) {
  return (
    <Link
      className="w-full rounded-md font-normal text-card-foreground/70 hover:text-card-foreground [&.active]:bg-primary [&.active]:font-medium [&.active]:text-primary-foreground"
      to={props.to}
    >
      <SidebarTitle text={props.text} icon={props.icon} />
    </Link>
  );
}
