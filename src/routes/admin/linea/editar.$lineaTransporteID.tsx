import { LineaTransporteEditarPage } from "@/modules/lineaTransporte/LineaTransporteEditarPage";
import { Navigate, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/linea/editar/$lineaTransporteID")({
  component: Page,
});

function Page() {
  const { lineaTransporteID } = Route.useParams();
  const lineaID = Number.parseInt(lineaTransporteID);

  if (!lineaID) {
    return <Navigate to="/admin/linea" />;
  }
  return <LineaTransporteEditarPage lineaTransporteID={lineaID} />;
}
