import { LineaTransporteService } from "@/backend";
import { useQuery } from "@tanstack/react-query";

export function useLineasTransporte() {
  const query = useQuery({
    queryKey: ["lineas"],
    queryFn: LineaTransporteService.getLineaTransporte,
  });
  return query;
}
