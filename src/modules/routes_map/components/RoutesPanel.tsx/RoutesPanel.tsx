import { RoutesBarOption } from "./components/RoutesBarOption";
import { SearchRoutesTab } from "./components/SearchRoutesTab";

export function RoutesPanel() {
  return (
    <div className="absolute inset-0 top-auto z-[500] md:right-auto md:top-0">
      <div className="h-24 w-full bg-stone-100 shadow-lg md:h-full md:w-80">
        <div className="hidden md:block">
          <SearchRoutesTab />
        </div>
        <div className="flex justify-between md:hidden">
        <RoutesBarOption label="Rutas" selected/>
        <RoutesBarOption label="Líneas" selected={false}/>
        <RoutesBarOption label="Historial" selected={false}/>
        </div>
      </div>
    </div>
  );
}
