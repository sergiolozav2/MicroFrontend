import { cn } from "@/lib/utils";
import { IoMdWarning } from "react-icons/io";

type ErrorLabelProps = {
  text?: string;
  className?: string;
};

export function ErrorLabel(props: ErrorLabelProps) {
  return (
    props.text && (
      <p
        className={cn(
          "mt-1 flex items-center gap-2 text-sm text-foreground",
          props.className,
        )}
      >
        <IoMdWarning />
        {props.text ?? "Valor inválido"}
      </p>
    )
  );
}
