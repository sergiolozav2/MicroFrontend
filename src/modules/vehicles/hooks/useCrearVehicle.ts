import { VehiculoService } from "@/backend";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

type BodyType = {
  lineaTransporteID: number;
  matricula: string;
  modelo: string;
  propietarioNombre: string;
};
export function useCrearVehicle() {
  const mutation = useMutation({
    mutationFn: (data: BodyType) =>
      VehiculoService.postVehiculo({ ...data, aireAcondicionado: true }),
    onSuccess: () => {
      toast.success("Vehiculo creado exitosamente");
      window.history.back();
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });
  return mutation;
}
