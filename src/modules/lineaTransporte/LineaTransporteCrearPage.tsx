import { Button } from "@/components/ui/button";
import { ModuleTitle } from "../core/components/ModulesLayout";
import { CrearLineaForm } from "./components/CrearLineaForm";
import { RoundedCard } from "../core/components/RoundedCard";

export function LineaTransporteCrearPage() {
  function goBack() {
    window.history.back();
  }
  return (
    <div className="over flex min-h-screen w-full max-w-full flex-col pb-12">
      <ModuleTitle>
        <p>Líneas de transporte / Crear</p>
      </ModuleTitle>

      <div className="mt-1 flex h-full flex-col px-6">
        <Button
          className="mb-4 w-fit px-0 py-0 text-smd"
          variant="link"
          onClick={goBack}
        >
          Volver a lista
        </Button>
        <RoundedCard className="flex-col">
          <CrearLineaForm />
        </RoundedCard>
      </div>
    </div>
  );
}
