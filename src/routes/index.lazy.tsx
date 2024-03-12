import { createLazyFileRoute } from "@tanstack/react-router";
import { RoutesMapPage } from "../modules/routes_map/RoutesMapPage";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return <RoutesMapPage />;
}
