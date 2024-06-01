import { VehiclesPage } from "@/modules/vehicles/VehiclesPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/vehicles/")({
  component: Pokemon,
});

function Pokemon() {
  return <VehiclesPage />;
}
