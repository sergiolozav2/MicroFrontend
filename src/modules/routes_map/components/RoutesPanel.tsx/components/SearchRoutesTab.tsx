import { FcHome, FcSearch } from "react-icons/fc";
import { RouteSuggestionItem } from "../../RouteSuggestionItem/RouteSuggestionItem";
import { SearchAddressInput } from "./SearchAddressInput";

export function SearchRoutesTab() {
  const columnClassName = "flex flex-col gap-3 px-5";
  return (
    <div className="flex flex-col py-6">
      <div className={columnClassName}>
        <SearchAddressInput icon={<FcSearch />} placeholder="Punto de inicio" />
        <SearchAddressInput icon={<FcHome />} placeholder="Destino" />
      </div>
      <div className="mt-4 h-[1px] w-full bg-stone-300"></div>
      <div className={columnClassName}>
        <p className="mt-3">Rutas recomendadas</p>
        <RouteSuggestionItem
          time={5}
          steps={[
            { type: "Walk", data: 5 },

            { type: "Bus", data: 38 },
          ]}
        />
        <div className="h-[1px] w-full bg-stone-300"></div>
        <RouteSuggestionItem
          time={11}
          steps={[
            { type: "Bus", data: 42 },
            { type: "Bus", data: 38 },
          ]}
        />
      </div>
    </div>
  );
}
