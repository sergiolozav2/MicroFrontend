import { ConductorService } from "@/backend";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

type BodyType = {
  usuario: {
    email: string;
    nombre: string;
    password: string;
  };
  vehiculosID: number[];
};
export function useCrearConductor() {
  const mutation = useMutation({
    mutationFn: (data: BodyType) => ConductorService.postConductor(data),
    onSuccess: () => {
      toast.success("Conductor creado exitosamente");
      window.history.back();
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });
  return mutation;
}
