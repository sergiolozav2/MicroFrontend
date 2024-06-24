import { MapaPublico } from "./components/MapaPublico";
import { Button } from "@/components/ui/button";
import React, { useRef, useState } from "react";
import { Map } from "leaflet";
import {
  MdChevronLeft,
  MdClose,
  MdMap,
  MdOutlineRoute,
  MdSettings,
} from "react-icons/md";
import { useLineasTransporte } from "../lineaTransporte/hooks/useLineasTransporte";
import { Separator } from "@/components/ui/separator";
import { RutaType, useCalcularRuta } from "./hooks/useCalcularRuta";
import { toast } from "react-toastify";
import { LoadingWrapper } from "../core/components/LoadingWrapper";
import { RutaSolucionList } from "./components/RutaSolucionList";
import { FaBus } from "react-icons/fa6";
import { GrShare } from "react-icons/gr";
import { useNavigate } from "@tanstack/react-router";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { usePollVehiculosActivos } from "./hooks/usePollVehiculosActivos";
export type PuntoType = {
  latitud: number;
  longitud: number;
};

const TabsEnum = {
  mapa: "mapa",
  lineas: "lineas",
  opciones: "opciones",
};

const colorByIndex = [
  "#FF00FF",
  "#008000",
  "#A27B5C",
  "#6495ED",
  "#116D6E",
  "#DE3163",
  "#008000",
  "#FA8072",
  "#7B68EE",
  "#40E0D0",
];

type SelectorModeTypes = "inicio" | "destino" | undefined;
export function MapPage() {
  const mapRef = useRef<Map>();

  const navigate = useNavigate();
  const [puntoInicio, setPuntoInicio] = useState<PuntoType>();
  const [puntoDestino, setPuntoDestino] = useState<PuntoType>();
  const [solucion, setSolucion] = useState<RutaType[]>();
  const [mostrarRuta, setMostrarRuta] = useState(false);
  const { data: dataVehiculosReal } = usePollVehiculosActivos();
  const [ruta, _] = useState<PuntoType[]>();

  const [tab, setTab] = useState(TabsEnum.mapa);

  const [enableSelectorMode, setEnableSelectorMode] =
    useState<SelectorModeTypes>();

  function startLocationSelector(mode: SelectorModeTypes) {
    setEnableSelectorMode(mode);
  }
  console.log(dataVehiculosReal)
  function goToLogin() {
    navigate({ to: "/login" });
  }
  function handleSelectLocation() {
    setEnableSelectorMode(undefined);
    if (!mapRef.current) return;
    const position = mapRef.current.getCenter();
    const punto = { latitud: position.lat, longitud: position.lng };
    if (enableSelectorMode === "inicio") {
      setPuntoInicio(punto);
    }
    if (enableSelectorMode === "destino") {
      setPuntoDestino(punto);
    }
  }

  function handleCloseSelectLocation(source: SelectorModeTypes) {
    if (enableSelectorMode) {
      setEnableSelectorMode(undefined);
      return;
    }
    if (source === "inicio") {
      setPuntoInicio(undefined);
      return;
    }
    if (source === "destino") {
      setPuntoDestino(undefined);
      return;
    }
  }

  const { data } = useLineasTransporte();
  const calcularRuta = useCalcularRuta({
    onSuccess: (response) => {
      setSolucion(response.list);
      setMostrarRuta(true);
    },
  });

  function handleCalcularRuta() {
    if (!puntoInicio) {
      toast.info("Falta una ruta de inicio");
      return;
    }
    if (!puntoDestino) {
      toast.info("Falta una ruta de destino");
      return;
    }
    calcularRuta.mutate({
      inicio: puntoInicio,
      destino: puntoDestino,
    });
  }

  return (
    <div className="relative flex min-h-screen w-full flex-1 flex-col">
      <div className="absolute inset-0 top-auto z-10">
        {enableSelectorMode && (
          <div className="mb-1 flex w-full">
            <Button className="mx-auto w-fit" onClick={handleSelectLocation}>
              Seleccionar
            </Button>
          </div>
        )}
        <div className="bg-background px-4 py-3">
          {tab === "mapa" && (
            <div className="flex flex-col">
              {!mostrarRuta && (
                <div className="flex flex-col">
                  <div className="flex h-10 w-full items-center rounded-md border border-input bg-background text-sm text-muted-foreground">
                    <button
                      className="w-full px-3 py-2 text-left"
                      onClick={() => startLocationSelector("inicio")}
                    >
                      {puntoInicio ? (
                        <div className="flex items-center gap-3 text-foreground">
                          <div className="h-3 w-3 rounded-full border-[2px] border-red-600 bg-red-600/40"></div>
                          <p>{formatPunto(puntoInicio)}</p>
                        </div>
                      ) : (
                        "Punto de inicio"
                      )}
                    </button>
                    {(enableSelectorMode === "inicio" || puntoInicio) && (
                      <button
                        className="mx-1.5 flex text-xl"
                        onClick={() => handleCloseSelectLocation("inicio")}
                      >
                        <MdClose />
                      </button>
                    )}
                  </div>
                  <div className="mt-2 flex h-10 w-full items-center rounded-md border border-input bg-background text-sm text-muted-foreground">
                    <button
                      className="w-full px-3 py-2 text-left"
                      onClick={() => startLocationSelector("destino")}
                    >
                      {puntoDestino ? (
                        <div className="flex items-center gap-3 text-foreground">
                          <div className="h-3 w-3 rounded-full border-[2px] border-green-600 bg-green-600/40"></div>
                          <p>{formatPunto(puntoDestino)}</p>
                        </div>
                      ) : (
                        "Punto de destino"
                      )}
                    </button>
                    {(enableSelectorMode === "destino" || puntoDestino) && (
                      <button
                        className="mx-1.5 flex text-xl"
                        onClick={() => handleCloseSelectLocation("destino")}
                      >
                        <MdClose />
                      </button>
                    )}
                  </div>
                  <LoadingWrapper
                    className="mt-4"
                    isLoading={calcularRuta.isPending}
                  >
                    <Button
                      disabled={calcularRuta.isPending}
                      onClick={handleCalcularRuta}
                    >
                      Calcular ruta
                    </Button>
                  </LoadingWrapper>
                </div>
              )}
              {calcularRuta.data && mostrarRuta && (
                <div className="mb-4 flex flex-col">
                  <div className="flex items-center">
                    <button
                      className="mr-1 text-xl"
                      onClick={() => setMostrarRuta(false)}
                    >
                      <MdChevronLeft />
                    </button>
                    <p>Ruta recomendada</p>
                  </div>
                  <RutaSolucionList rutas={calcularRuta.data.list} />
                </div>
              )}
            </div>
          )}
          <div className="mt-2 flex w-full">
            <Button
              className={`flex flex-1 flex-col items-center ${tab === "mapa" ? "bg-primary text-primary-foreground" : ""}`}
              variant="ghost"
              onClick={() => setTab("mapa")}
            >
              <MdMap />
              <p>Mapa</p>
            </Button>
            <Button
              className={`flex flex-1 flex-col items-center ${tab === "linea" ? "bg-primary text-primary-foreground" : ""}`}
              variant="ghost"
              onClick={() => setTab("linea")}
            >
              <MdOutlineRoute />
              <p>Lineas</p>
            </Button>
            <Button
              className={`flex flex-1 flex-col items-center ${tab === "opciones" ? "bg-primary text-primary-foreground" : ""}`}
              variant="ghost"
              onClick={() => setTab("opciones")}
            >
              <MdSettings />
              <p>Opciones</p>
            </Button>
          </div>
        </div>
      </div>
      {tab === "mapa" && (
        <MapaPublico
          enableSelectorMode={!!enableSelectorMode}
          mapRef={mapRef}
          vehiculoTiempoReal={dataVehiculosReal?.list}
          puntoInicio={puntoInicio}
          puntoDestino={puntoDestino}
          solucion={solucion}
          rutaSeleccionada={ruta}
        />
      )}
      {tab === "linea" && (
        <div className="flex h-full flex-col px-4 py-4 text-foreground">
          <p className="font-medium">Líneas de micro</p>

          <div className="flex flex-col">
            {data?.list &&
              data?.list.map((linea, index) => (
                <React.Fragment key={linea.lineaTransporteID}>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button
                        className="flex items-center px-2 py-3.5 text-sm"
                        onClick={() => {
                          //setTab(TabsEnum.mapa);
                          //setRuta(linea.rutaIda.puntos);
                        }}
                      >
                        <FaBus
                          className="mr-2"
                          style={{
                            color: colorByIndex[index % colorByIndex.length],
                          }}
                        />
                        <p>Linea {linea.numeroLinea}</p>
                        <div className="ml-auto">
                          <GrShare />
                        </div>
                      </button>
                    </DialogTrigger>
                    <DialogContent>
                      <p>Dejar calificación de línea de transporte</p>
                      <textarea className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"></textarea>
                    </DialogContent>
                  </Dialog>
                  <Separator />
                </React.Fragment>
              ))}
          </div>

          <p className="mt-6 font-medium">Historial de viajes</p>
          <p className="mt-1 text-sm text-muted-foreground">
            No tienes ningún viaje
          </p>

          <p className="mt-6 font-medium">Ubicaciones favoritas</p>
          <p className="mt-1 text-sm">Hogar</p>
          <p className="text-xs text-muted-foreground">
            {" "}
            -17.4234234, 63.2423423{" "}
          </p>
        </div>
      )}
      {tab === "opciones" && (
        <div className="flex h-full flex-col px-4 py-4 text-foreground">
          <p className="mb-4 font-medium">Opciones</p>

          <p className="mb-1 font-medium">Editar nombre de usuario</p>
          <Input className="mb-4" type="email" placeholder="Usuario" />
          <p className="mb-1 font-medium">Editar correo electrónico</p>
          <Input
            className="mb-4"
            type="email"
            placeholder="Correo electrónico"
          />

          <Button onClick={goToLogin}>Cerrar sesión</Button>
        </div>
      )}
    </div>
  );
}

function formatPunto(punto: PuntoType) {
  return `LatLng(${punto.latitud.toFixed(4)}, ${punto.longitud.toFixed(4)})`;
}
