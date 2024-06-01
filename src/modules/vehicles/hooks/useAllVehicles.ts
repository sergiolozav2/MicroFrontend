import { VehiculoService } from "@/backend";
import { useQuery } from "@tanstack/react-query";

export function useAllVehicles() {
  const query = useQuery({
    queryFn: VehiculoService.getVehiculo,
    queryKey: ["vehiculos"],
  });

  return query;
}
