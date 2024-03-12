import { Link, LinkProps } from "@tanstack/react-router";

interface LinkOptionProps extends LinkProps {
  text: string;
}
export function LinkOption(props: LinkOptionProps) {
  return (
    <Link
      to={props.to}
      className="block text-gray-900 hover:text-orange-600 [&.active]:text-orange-600"
    >
      {props.text}
    </Link>
  );
}
