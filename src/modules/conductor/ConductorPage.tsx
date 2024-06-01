import { ModuleTitle } from "../core/components/ModulesLayout";
import { useAllConductores } from "./hooks/useAllConductores";
import { LoadingModule } from "../core/components/LoadingModule";
import { Button } from "@/components/ui/button";
import { RoundedCard } from "../core/components/RoundedCard";
import { TableData } from "@/components/ui/table-data";
import { conductorColumns } from "./constants/ConductorColumns";
import { useNavigate } from "@tanstack/react-router";

export function ConductorPage() {
  const { data, isLoading } = useAllConductores();
  const navigate = useNavigate();

  function goToCrearConductor() {
    navigate({ to: "/admin/conductor/crear" });
  }
  return (
    <div className="flex min-h-screen w-full max-w-full flex-col overflow-hidden">
      <ModuleTitle>
        <p>Conductores</p>
      </ModuleTitle>
      <div className="mt-4 px-6">
        <Button className="w-fit" onClick={goToCrearConductor}>
          Crear nuevo conductor
        </Button>
        <RoundedCard className="mt-8 flex-col">
          <p> Conductores {data && `(${data.list.length})`}</p>
          {isLoading && <LoadingModule />}
          {data && (
            <div className="mt-4 flex overflow-auto">
              <TableData columns={conductorColumns} data={data.list} />
            </div>
          )}
        </RoundedCard>
      </div>
    </div>
  );
}
