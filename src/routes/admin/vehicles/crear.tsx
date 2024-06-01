import { VehiclesCrearPage } from "@/modules/vehicles/VehiclesCrearPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/vehicles/crear")({
  component: VehiclesCrearPage,
});
