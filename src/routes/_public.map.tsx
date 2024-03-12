import { createFileRoute } from "@tanstack/react-router";
import { RoutesMapPage } from "../modules/routes_map/RoutesMapPage";

type RoutesMapSearchType = {
  tab?: number;
};

export const Route = createFileRoute("/_public/map")({
  validateSearch: (search: Record<string, unknown>): RoutesMapSearchType => {
    return {
      tab: Number(search?.tab ?? 0),
    };
  },
  component: RoutesMap,
});

function RoutesMap() {
  return <RoutesMapPage />;
}
