import { DashboardEmpresa } from "@/modules/dashboard/DashboardEmpresaPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/dashboard-empresa")({
  component: DashboardEmpresa,
});
