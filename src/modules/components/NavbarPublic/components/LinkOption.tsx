import { Link, LinkProps } from "@tanstack/react-router";

interface LinkOptionProps extends LinkProps {
  text: string;
}
export function LinkOption(props: LinkOptionProps) {
  return (
    <Link
      to={props.to}
      className="block text-gray-900 hover:text-blue-700 [&.active]:text-blue-700"
    >
      {props.text}
    </Link>
  );
}
