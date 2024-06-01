import { Button } from "@/components/ui/button";
import { ModuleTitle } from "../core/components/ModulesLayout";
import { RoundedCard } from "../core/components/RoundedCard";
import { VehicleForm } from "./components/VehicleForm";

export function VehiclesCrearPage() {
  function goBack() {
    window.history.back();
  }
  return (
    <div className="over flex min-h-screen w-full max-w-full flex-col pb-12">
      <ModuleTitle>
        <p>Vehiculos / Crear</p>
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
          <VehicleForm />
        </RoundedCard>
      </div>
    </div>
  );
}
