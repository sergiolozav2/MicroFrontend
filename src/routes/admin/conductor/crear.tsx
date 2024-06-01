import { ConductorCrearPage } from "@/modules/conductor/ConductorCrearPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/conductor/crear")({
  component: ConductorCrearPage,
});
