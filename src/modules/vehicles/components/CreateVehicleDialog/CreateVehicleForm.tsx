import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type CreateVehicleFormProps = {
  onCreate: () => void;
  onCancel: () => void;
  onError: () => void;
  onSuccess: () => void;
};

export function CreateVehicleForm(props: CreateVehicleFormProps) {
  return (
    <div className="flex w-full flex-col">
      <form className="mt-2 grid grid-cols-2 gap-x-6 gap-y-8">
        <div className="flex flex-col">
          <Label>Matricula</Label>
          <Input className="mt-1 h-10" />
        </div>
        <div className="flex flex-col">
          <Label>Modelo</Label>
          <Input className="mt-1 h-10" />
        </div>
        <div className="flex flex-col">
          <Label>Conductor</Label>
          <Input className="mt-1 h-10" />
        </div>
      </form>
      <div className="ml-auto mt-8 flex gap-4">
        <Button variant="outline" onClick={props.onCancel}>
          Cancelar
        </Button>
        <Button onClick={props.onCreate}>Registrar</Button>
      </div>
    </div>
  );
}
