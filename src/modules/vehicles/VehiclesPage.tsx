import { ModuleTitle } from "../core/components/ModulesLayout";
import { useAllVehicles } from "./hooks/useAllVehicles";
import { LoadingModule } from "../core/components/LoadingModule";
import { Button } from "@/components/ui/button";
import { RoundedCard } from "../core/components/RoundedCard";
import { TableData } from "@/components/ui/table-data";
import { vehiculoColumns } from "./constants/VehiculoColumns";
import { useNavigate } from "@tanstack/react-router";

export function VehiclesPage() {
  const { data, isLoading } = useAllVehicles();
  const navigate = useNavigate();

  function goToCrearVehiculo() {
    navigate({ to: "/admin/vehicles/crear" });
  }
  return (
    <div className="flex min-h-screen w-full max-w-full flex-col overflow-hidden">
      <ModuleTitle>
        <p>Vehículos</p>
      </ModuleTitle>
      <div className="mt-4 px-6">
        <Button className="w-fit" onClick={goToCrearVehiculo}>
          Crear nuevo vehículo
        </Button>
        <RoundedCard className="mt-8 flex-col">
          <p> Vehículos {data && `(${data.list.length})`}</p>
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
