import { FaHistory, FaMapMarked, FaBus } from "react-icons/fa";
import { RoutesBarOption } from "./components/RoutesBarOption";
import { SearchRoutesTab } from "./components/SearchRoutesTab";
import { routerApi } from "../../constants/routerApi"; 
import { panelOptionsEnum } from "../../constants/panelOptionsEnum";

export function RoutesPanel() {
  const { tab } = routerApi.useSearch();
  return (
    <div className="absolute inset-0 top-auto z-[500] md:right-auto md:top-0">
      <div className="flex w-full bg-white shadow-lg md:h-full md:flex-row">
        <div className="flex w-full justify-between gap-4 border-t px-3 pb-2 pt-1 shadow-md md:flex-col md:justify-normal md:border-r md:py-4">
          <RoutesBarOption
            label="Rutas"
            tab={panelOptionsEnum.Routes}
            selected={tab === panelOptionsEnum.Routes}
          >
            <FaMapMarked className="mb-2" />
          </RoutesBarOption>
          <RoutesBarOption
            label="Líneas"
            tab={panelOptionsEnum.Lines}
            selected={tab === panelOptionsEnum.Lines}
          >
            <FaBus className="mb-2" />
          </RoutesBarOption>
          <RoutesBarOption
            label="Historial"
            tab={panelOptionsEnum.History}
            selected={tab === panelOptionsEnum.History}
          >
            <FaHistory className="mb-2" />
          </RoutesBarOption>
        </div>
        <div className="min-w-80 border-r shadow-md hidden md:block">
          <SearchRoutesTab />
        </div>
      </div>
    </div>
  );
}
