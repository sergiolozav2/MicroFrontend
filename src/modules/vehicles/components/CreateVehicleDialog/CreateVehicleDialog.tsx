import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CreateVehicleForm } from "./CreateVehicleForm";

type CreateVehicleDialogProps = {
  open: boolean;
  handleClose: () => void;
};

export function CreateVehicleDialog(props: CreateVehicleDialogProps) {
  return (
    <Dialog
      open={props.open}
      onOpenChange={(value) => !value && props.handleClose()}
    >
      <DialogContent className="sm:max-w-[605px]">
        <DialogHeader>
          <DialogTitle>Vehículo nuevo</DialogTitle>
          <DialogDescription>
            Registra un nuevo vehículo para una línea de transporte.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-center">
          <CreateVehicleForm
            onCancel={() => 0}
            onCreate={() => 0}
            onError={() => 0}
            onSuccess={() => 0}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
