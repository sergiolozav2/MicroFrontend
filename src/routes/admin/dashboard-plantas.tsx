import { DashboardPlantasPage } from "@/modules/dashboard/DashboardPlantasPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/dashboard-plantas")({
  component: Dashboard,
});

function Dashboard() {
  return <DashboardPlantasPage />;
}
