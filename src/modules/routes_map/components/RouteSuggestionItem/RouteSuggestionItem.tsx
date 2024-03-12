import { useDate } from "../../hooks/useDate";
import { StepItem } from "../../types/StepItem";
import { RouteStep } from "./components/RouteStep";

type RouteSuggestionItemProps = {
  time: number;
  steps: StepItem[];
};

export function RouteSuggestionItem(props: RouteSuggestionItemProps) {
  const { hour, minute } = useDate();
  return (
    <div className="flex w-full flex-col text-sm">
      <p className="font-semibold">{props.time} min</p>
      <p className="text-xs text-stone-700">
        Llegada estimada: {`${hour}:${minute.toString().padEnd(2, "0")}`}
      </p>
      <div className="mt-2 flex gap-2">
        {props.steps.map((step, index) => (
          <>
            <RouteStep step={step} />
            {index < props.steps.length - 1 ? ">" : ""}
          </>
        ))}
      </div>
    </div>
  );
}
