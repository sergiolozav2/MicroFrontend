import {
  Circle,
  MapContainer,
  Polyline,
  TileLayer,
  useMap,
} from "react-leaflet";
import { PuntoType } from "./CrearLineaForm";
import { FaLocationDot } from "react-icons/fa6";
import { Map } from "leaflet";
import { MutableRefObject, useEffect } from "react";

interface MapaCiudadProps extends HackProps {
  className?: string;
  puntos: PuntoType[];
  onSpacePress: () => void;
}
export function MapaCiudad(props: MapaCiudadProps) {
  return (
    <div
      className="relative isolate mt-2 h-80 w-full overflow-hidden rounded border focus-within:border-input"
      onKeyDown={(e) => {
        e.preventDefault();
        if (e.code === "Space") {
          props.onSpacePress();
        }
      }}
    >
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-full">
        <FaLocationDot className="text-2xl text-red-700" />
      </div>
      <MapContainer
        className={`h-full flex-1 ${props.className}`}
        center={[-17.782862, -63.180853]}
        zoomControl={true}
        zoom={16}
        scrollWheelZoom={false}
      >
        <Hack mapRef={props.mapRef} />
        <TileLayer
          url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
        />
        {props.puntos.map((punto, index) => (
          <Circle
            key={index}
            center={[punto.latitud, punto.longitud]}
            radius={25}
            color="red"
          />
        ))}
        {props.puntos.length >= 2 &&
          props.puntos.slice(1).map((punto, index) => (
            <Polyline
              key={index}
              color="red"
              positions={[
                [props.puntos[index].latitud, props.puntos[index].longitud],
                [punto.latitud, punto.longitud],
              ]}
            />
          ))}
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
