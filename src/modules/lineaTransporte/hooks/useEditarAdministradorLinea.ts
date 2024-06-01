import { AdministradorService } from "@/backend";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

type AdministradorLineaBodyType = {
  lineaTransporteID: number;
  usuario: {
    email?: string;
    nombre?: string;
    password?: string;
  };
};
export function useEditarAdministradorLinea() {
  const mutation = useMutation({
    mutationFn: (data: AdministradorLineaBodyType) =>
      AdministradorService.putAdministrador(data),
    onSuccess: () => {
      toast.success("Administrador editado exitosamente");
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });
  return mutation;
}
