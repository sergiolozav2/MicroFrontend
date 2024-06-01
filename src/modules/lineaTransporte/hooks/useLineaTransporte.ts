import { LineaTransporteService } from "@/backend";
import { useQuery } from "@tanstack/react-query";

export function useLineaTransporte(lineaTransporteID: number) {
  const query = useQuery({
    queryKey: ["lineas", lineaTransporteID],
    queryFn: () =>
      LineaTransporteService.getLineaTransporte1(lineaTransporteID),
  });
  return query;
}
