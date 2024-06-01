import { FaBus, FaPersonWalking } from "react-icons/fa6";
import { RutaType } from "../hooks/useCalcularRuta";

type RutaSolucionListProps = {
  rutas: RutaType[];
};
export function RutaSolucionList(props: RutaSolucionListProps) {
  const ruta = props.rutas[0];
  return (
    <div className="mt-1 flex flex-col px-2 py-1">
      <p className="text-sm font-medium">5 min</p>

      <div className="flex items-center gap-2">
        <FaPersonWalking /> {">"}
        <div className="flex items-center gap-1.5">
          <FaBus />
          <p className="text-xs">{ruta.numeroLinea}</p>
        </div>
      </div>
    </div>
  );
}
