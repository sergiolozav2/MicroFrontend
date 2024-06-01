import { LineaTransporteService } from "@/backend";
import { useQuery } from "@tanstack/react-query";

export function useLineaSoloNumero() {
  const query = useQuery({
    queryKey: ["lineas", "solo-numero"],
    queryFn: LineaTransporteService.getLineaTransporteOnlyLines,
  });
  return query;
}
