import { createFileRoute } from "@tanstack/react-router";
import { RoutesPage } from "../../modules/admin/routes/RoutesPage";

export const Route = createFileRoute("/admin/routes")({
  component: Routes,
});

function Routes() {
  return <RoutesPage />;
}
