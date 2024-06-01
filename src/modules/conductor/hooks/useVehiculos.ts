import { ConductorService } from "@/backend";
import { useToken } from "@/modules/core/store/useAuthStore";
import { useQuery } from "@tanstack/react-query";

export function useVehiculos() {
  const token = useToken();
  const query = useQuery({
    queryFn: () => ConductorService.getConductorVehiculos(token),
    queryKey: ["vehiculosConductor"],
  });

  return query;
}
