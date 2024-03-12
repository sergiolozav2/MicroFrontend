import { createLazyFileRoute } from "@tanstack/react-router";
import { RoutesMapPage } from "../modules/routes_map/RoutesMapPage";

export const Route = createLazyFileRoute("/_public/map")({
  component: RoutesMap,
});

function RoutesMap() {
  return <RoutesMapPage />;
}
