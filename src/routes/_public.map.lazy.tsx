import { MapPage } from "@/modules/map/MapPage";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_public/map")({
  component: Page,
});

function Page() {
  return <MapPage />;
}
