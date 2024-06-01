import { Button } from "@/components/ui/button";
import { ModuleTitle } from "../core/components/ModulesLayout";
import { useNavigate } from "@tanstack/react-router";
import { RoundedCard } from "../core/components/RoundedCard";
import { TableData } from "@/components/ui/table-data";
import { useLineasTransporte } from "./hooks/useLineasTransporte";
import { LoadingModule } from "../core/components/LoadingModule";
import { lineaTransporteColumns } from "./constants/LineaTransporteColumns";

export function LineaTransportePage() {
  const navigate = useNavigate();

  const { data, isLoading } = useLineasTransporte();

  function goToCrearLinea() {
    navigate({ to: "/admin/linea/crear" });
  }
  return (
    <div className="flex min-h-screen w-full max-w-full flex-col overflow-hidden">
      <ModuleTitle>
        <p>Líneas de transporte</p>
      </ModuleTitle>
      <div className="mt-4 px-6">
        <Button className="w-fit" onClick={goToCrearLinea}>
          Crear nueva línea
        </Button>
        <RoundedCard className="mt-8 flex-col">
          <p> Líneas de transporte {data && `(${data.list.length})`}</p>
          {isLoading && <LoadingModule />}
          {data && (
            <div className="mt-4 flex overflow-auto">
              <TableData columns={lineaTransporteColumns} data={data.list} />
            </div>
          )}
        </RoundedCard>
      </div>
    </div>
  );
}
