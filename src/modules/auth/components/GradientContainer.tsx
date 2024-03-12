import { ReactNode } from "react";

type GradientContainerProps = {
  children: ReactNode;
};

export function GradientContainer(props: GradientContainerProps) {
  return (
    <div
      className="flex items-center lg:w-6/12 lg:rounded-bl-none"
      style={{
        background:
          "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
      }}
    >
      <div className="px-4 py-10 text-white md:mx-6 md:p-12">
        {props.children}
      </div>
    </div>
  );
}
