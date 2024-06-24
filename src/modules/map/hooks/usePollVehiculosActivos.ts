import { VehiculoService } from "@/backend";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export function usePollVehiculosActivos() {
  const query = useQuery({
    queryKey: ["vehiculo-tiempo-real"],
    queryFn: VehiculoService.getVehiculoUbicacionReal,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      query.refetch();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return query;
}
