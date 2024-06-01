import { MapaService } from "@/backend";
import { useMutation } from "@tanstack/react-query";

type DataBody = {
  inicio: {
    latitud: number;
    longitud: number;
  };
  destino: {
    latitud: number;
    longitud: number;
  };
};

export type RutaCalculadaType = {
  list: RutaType[];
};

export type RutaType = {
  lineaTransporteID: number;
  numeroLinea: string;
  puntos: {
    latitud: number;
    longitud: number;
  }[];
};
type Props = {
  onSuccess: (response: RutaCalculadaType) => void;
};
export function useCalcularRuta(props: Props) {
  const query = useMutation({
    mutationFn: (data: DataBody) => MapaService.postMapa(data),
    onSuccess: props.onSuccess,
  });

  return query;
}
