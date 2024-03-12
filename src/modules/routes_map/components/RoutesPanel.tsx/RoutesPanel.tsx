import { FaHistory, FaMapMarked, FaBus } from "react-icons/fa";
import { RoutesBarOption } from "./components/RoutesBarOption";
import { SearchRoutesTab } from "./components/SearchRoutesTab";

export function RoutesPanel() {
  return (
    <div className="absolute inset-0 top-auto z-[500] md:right-auto md:top-0">
      <div className="flex h-24 w-full bg-stone-50 shadow-lg md:h-full md:w-80 md:flex-row">
        <div className="flex flex-col gap-4 border-r-2 px-3 py-4 shadow-md">
          <RoutesBarOption label="Rutas" selected>
            <FaMapMarked className="mb-2 text-lg" />
          </RoutesBarOption>
          <RoutesBarOption label="Líneas" selected={false}>
            <FaBus className="mb-2 text-lg" />
          </RoutesBarOption>
          <RoutesBarOption label="Historial" selected={false}>
            <FaHistory className="mb-2 text-lg" />
          </RoutesBarOption>
        </div>
        <div className="hidden md:block">
          <SearchRoutesTab />
        </div>
      </div>
    </div>
  );
}
