import { LineaTransporteCrearPage } from "@/modules/lineaTransporte/LineaTransporteCrearPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/linea/crear")({
  component: LineaTransporteCrearPage,
});
