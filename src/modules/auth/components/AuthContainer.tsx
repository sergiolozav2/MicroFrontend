import { ReactNode } from "react";

type AuthContainerProps = {
  children: ReactNode;
};

export function AuthContainer(props: AuthContainerProps) {
  return (
    <div className="flex h-full items-center justify-center px-4 pb-12 lg:w-6/12 lg:px-12">
      <div className="w-full max-w-96">{props.children}</div>
    </div>
  );
}
