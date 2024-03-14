import { createFileRoute } from "@tanstack/react-router";
import { VehiclesPage } from "../../modules/admin/vehicles/VehiclesPage";

export const Route = createFileRoute("/admin/vehicles")({
  component: Vehicles,
});

function Vehicles() {
  return <VehiclesPage />;
}
