import { Button } from "@/components/ui/button";
import { ModuleTitle } from "../core/components/ModulesLayout";
import { RoundedCard } from "../core/components/RoundedCard";
import { EditarLineaForm } from "./components/EditarLineaForm";
import { useLineaTransporte } from "./hooks/useLineaTransporte";
import { LoadingModule } from "../core/components/LoadingModule";
import { AdministradorLineaForm } from "./components/AdministradorLineaForm";

type Props = {
  lineaTransporteID: number;
};
export function LineaTransporteEditarPage(props: Props) {
  function goBack() {
    window.history.back();
  }
  const { data, isLoading } = useLineaTransporte(props.lineaTransporteID);

  if (isLoading) {
    return <LoadingModule />;
  }
  return (
    <div className="over flex min-h-screen w-full max-w-full flex-col pb-12">
      <ModuleTitle>
        <p>Líneas de transporte / Editar</p>
      </ModuleTitle>

      <div className="mt-1 flex h-full flex-col px-6">
        <Button
          className="mb-4 w-fit px-0 py-0 text-smd"
          variant="link"
          onClick={goBack}
        >
          Volver a lista
        </Button>
        <div className="grid gap-x-4 gap-y-8 xl:grid-cols-2">
          <RoundedCard className="flex-col">
            {data && <EditarLineaForm lineaTransporte={data} />}
          </RoundedCard>
          <RoundedCard className="flex-col">
            {data && (
              <AdministradorLineaForm
                administrador={data.administrador}
                lineaTransporteID={props.lineaTransporteID}
              />
            )}
          </RoundedCard>
        </div>
      </div>
    </div>
  );
}
