import { Map } from "leaflet";
import { MutableRefObject, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import {
  Circle,
  MapContainer,
  Polyline,
  TileLayer,
  useMap,
} from "react-leaflet";
import { PuntoType } from "../MapPage";
import { RutaType } from "../hooks/useCalcularRuta";

interface MapaPublicoProps extends HackProps {
  enableSelectorMode: boolean;
  puntoInicio?: PuntoType;
  puntoDestino?: PuntoType;
  solucion?: RutaType[];
  rutaSeleccionada?: PuntoType[];
}

export function MapaPublico(props: MapaPublicoProps) {
  return (
    <div className="relative isolate flex h-full flex-1">
      {props.enableSelectorMode && (
        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-full">
          <FaLocationDot className="text-3xl text-primary" />
        </div>
      )}
      <MapContainer
        className="h-full flex-1"
        center={[-17.782862, -63.180853]}
        zoomControl={false}
        zoom={13}
        scrollWheelZoom={true}
      >
        <Hack mapRef={props.mapRef} />
        <TileLayer
          url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
        />
        {props.puntoInicio && (
          <Circle
            center={[props.puntoInicio.latitud, props.puntoInicio.longitud]}
            radius={25}
            color="red"
          />
        )}
        {props.puntoDestino && (
          <Circle
            center={[props.puntoDestino.latitud, props.puntoDestino.longitud]}
            radius={25}
            color="green"
          />
        )}
        {props.rutaSeleccionada &&
          props.rutaSeleccionada?.length >= 2 &&
          props.rutaSeleccionada.slice(1).map((punto, index) => (
            <Polyline
              key={index}
              color="red"
              positions={[
                [
                  props?.rutaSeleccionada?.at(index)?.latitud ?? 0,
                  props?.rutaSeleccionada?.at(index)?.longitud ?? 0,
                ],
                [punto.latitud, punto.longitud],
              ]}
            />
          ))}
        {props.solucion &&
          props.solucion[0]?.puntos?.slice(1).map((punto, index) => {
            if (!props.solucion) return null;
            const puntos = props.solucion[0].puntos;
            return (
              <Polyline
                key={index}
                color="red"
                positions={[
                  [
                    puntos ? puntos[index].latitud : 0,
                    puntos ? puntos[index].longitud : 0,
                  ],
                  [punto.latitud, punto.longitud],
                ]}
              />
            );
          })}
      </MapContainer>
    </div>
  );
}

interface HackProps {
  mapRef: MutableRefObject<Map | undefined>;
}
function Hack(props: HackProps) {
  const map = useMap();
  useEffect(() => {
    props.mapRef.current = map;
  }, [map, props]);
  return null;
}
