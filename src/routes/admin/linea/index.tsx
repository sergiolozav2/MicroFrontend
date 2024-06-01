import { LineaTransportePage } from "@/modules/lineaTransporte/LineaTransportePage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/linea/")({
  component: Pokemon,
});

function Pokemon() {
  return <LineaTransportePage />;
}
