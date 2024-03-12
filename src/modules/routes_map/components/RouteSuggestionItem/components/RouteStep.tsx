import { FaBus, FaPersonWalking } from "react-icons/fa6";
import { StepItem } from "../../../types/StepItem";

type RouteStepProps = {
  step: StepItem;
};

export function RouteStep(props: RouteStepProps) {
  const iconClassName = "text-lg text-stone-600";
  if (props.step.type === "Bus") {
    return (
      <div className="flex items-center gap-1.5">
        <FaBus className={iconClassName} />
        <p className="text-xs">{props.step.data}</p>
      </div>
    );
  }
  return <FaPersonWalking className={iconClassName} />;
}
