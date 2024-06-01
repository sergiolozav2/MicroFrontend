import { ModuleTitle } from "../core/components/ModulesLayout";
import { RoundedCard } from "../core/components/RoundedCard";
import { useVehiculos } from "./hooks/useVehiculos";
import { LoadingModule } from "../core/components/LoadingModule";
import { TableData } from "@/components/ui/table-data";
import { vehiculoColumns } from "./constants/VehiculoColumns";

export function ViajesPage() {
  const { data, isLoading } = useVehiculos();

  return (
    <div className="flex min-h-screen w-full max-w-full flex-col overflow-hidden">
      <ModuleTitle>
        <p>Viajes de conductor</p>
      </ModuleTitle>
      <div className="mt-4 px-6">
        <RoundedCard className="mt-4 flex-col">
          <p> Vehiculos asignados {data && `(${data.list.length})`}</p>
          {isLoading && <LoadingModule />}
          {data && (
            <div className="mt-4 flex overflow-auto">
              <TableData columns={vehiculoColumns} data={data.list} />
            </div>
          )}
        </RoundedCard>
      </div>
    </div>
  );
}
