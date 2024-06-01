import { LineaTransporteService } from "@/backend";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

type BodyType = {
  numeroLinea?: string;
  rutaIda?: Array<{
    latitud: number;
    longitud: number;
  }>;
  rutaVuelta?: Array<{
    latitud: number;
    longitud: number;
  }>;
};

type Props = {
  lineaTransporteID: number;
};
export function useEditarLinea(props: Props) {
  const mutation = useMutation({
    mutationFn: (data: BodyType) =>
      LineaTransporteService.putLineaTransporte(props.lineaTransporteID, data),
    onSuccess: () => {
      toast.success("Línea editada exitosamente");
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });
  return mutation;
}
