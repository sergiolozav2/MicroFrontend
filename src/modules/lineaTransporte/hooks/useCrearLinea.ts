import { LineaTransporteService } from "@/backend";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

type LineaType = {
  numeroLinea: string;
  rutaIda: {
    latitud: number;
    longitud: number;
  }[];
  rutaVuelta: {
    latitud: number;
    longitud: number;
  }[];
};
export function useCrearLinea() {
  const mutation = useMutation({
    mutationFn: (data: LineaType) =>
      LineaTransporteService.postLineaTransporte(data),
    onSuccess: () => {
      toast.success("Línea creada exitosamente");
      window.history.back();
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });
  return mutation;
}
