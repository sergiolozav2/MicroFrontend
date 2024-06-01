import { ConductorPage } from "@/modules/conductor/ConductorPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/conductor/")({
  component: Pokemon,
});

function Pokemon() {
  return <ConductorPage />;
}
