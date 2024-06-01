import { ViajesPage } from "@/modules/conductor/ViajesPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/viajes")({
  component: ViajesPage,
});
