import { AdministradorService } from "@/backend";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

type AdministradorLineaBodyType = {
  lineaTransporteID: number;
  usuario: {
    usuarioID?: number;
    email: string;
    nombre: string;
    password: string;
  };
};
export function useCrearAdministradorLinea() {
  const mutation = useMutation({
    mutationFn: (data: AdministradorLineaBodyType) =>
      AdministradorService.postAdministrador(data),
    onSuccess: () => {
      toast.success("Administrador creado exitosamente");
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });
  return mutation;
}
