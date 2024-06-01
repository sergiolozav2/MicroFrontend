import { Input } from "@/components/ui/input";
import { MapaCiudad } from "./MapaCiudad";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { Map } from "leaflet";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useCrearLinea } from "../hooks/useCrearLinea";

export type PuntoType = {
  latitud: number;
  longitud: number;
};
export function CrearLineaForm() {
  const [puntosIda, setPuntosIda] = useState<PuntoType[]>([]);
  const [puntosVuelta, setPuntosVuelta] = useState<PuntoType[]>([]);
  const numeroLinea = useRef<string>();

  const mapIdaRef = useRef<Map>();
  const mapVueltaRef = useRef<Map>();

  function handleAddPuntoIda() {
    if (!mapIdaRef.current) return;

    const position = mapIdaRef.current.getCenter();
    const punto = { latitud: position.lat, longitud: position.lng };
    setPuntosIda([...puntosIda, punto]);
  }

  function handleAddPuntoVuelta() {
    if (!mapVueltaRef.current) return;

    const position = mapVueltaRef.current.getCenter();
    const punto = { latitud: position.lat, longitud: position.lng };
    setPuntosVuelta([...puntosVuelta, punto]);
  }

  const linea = useCrearLinea();

  function handleCrearLinea() {
    if (!numeroLinea.current) return;
    linea.mutate({
      numeroLinea: numeroLinea.current,
      rutaIda: puntosIda,
      rutaVuelta: puntosVuelta,
    });
  }
  return (
    <div className="flex h-full w-full flex-col text-sm">
      <h1 className="text-sm font-medium">Crear línea de transporte</h1>
      <p className="mt-2 text-smd font-medium">Número de línea</p>
      <Input
        className="mt-1 max-w-56"
        type="number"
        placeholder="Número de línea"
        onChange={(e) => {
          const value = e.target.value;
          if (value === Number.parseInt(value).toString()) {
            numeroLinea.current = value;
          }
        }}
      />
      <div className="mt-4 flex h-full flex-col">
        <div className="flex flex-col">
          <p className="text-smd font-medium">Ruta de ida</p>
          <div className="flex items-center text-smd text-muted-foreground">
            <IoMdInformationCircleOutline className="mr-1" />
            <p>Apreta espacio para agregar un punto</p>
          </div>
        </div>
        <MapaCiudad
          puntos={puntosIda}
          mapRef={mapIdaRef}
          onSpacePress={handleAddPuntoIda}
        />
        <div className="mt-2 flex w-full gap-4">
          <Button
            className="w-full"
            variant="destructive"
            onClick={() => setPuntosIda([])}
          >
            Eliminar puntos
          </Button>
          <Button
            className="w-full"
            variant="secondary"
            onClick={handleAddPuntoIda}
          >
            Agregar punto
          </Button>
        </div>
      </div>
      <div className="mt-4 flex h-full flex-col">
        <div className="flex flex-col">
          <p className="text-smd font-medium">Ruta de vuelta</p>
          <div className="flex items-center text-smd text-muted-foreground">
            <IoMdInformationCircleOutline className="mr-1" />
            <p>Apreta espacio para agregar un punto</p>
          </div>
        </div>
        <MapaCiudad
          puntos={puntosVuelta}
          mapRef={mapVueltaRef}
          onSpacePress={handleAddPuntoVuelta}
        />
        <div className="mt-2 flex w-full gap-4">
          <Button
            className="w-full"
            variant="destructive"
            onClick={() => setPuntosVuelta([])}
          >
            Eliminar puntos
          </Button>
          <Button
            className="w-full"
            variant="secondary"
            onClick={handleAddPuntoVuelta}
          >
            Agregar punto
          </Button>
        </div>
      </div>

      <div className="mt-8 flex">
        <Button className="ml-auto w-fit" onClick={handleCrearLinea}>
          Crear línea de transporte
        </Button>
      </div>
    </div>
  );
}
