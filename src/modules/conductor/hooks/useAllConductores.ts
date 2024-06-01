import { ConductorService } from "@/backend";
import { useQuery } from "@tanstack/react-query";

export function useAllConductores() {
  const query = useQuery({
    queryFn: ConductorService.getConductor,
    queryKey: ["conductores"],
  });

  return query;
}
