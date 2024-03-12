import { MapContainer, TileLayer } from "react-leaflet";

export function RoutesMap() {
  return (
    <MapContainer
      className="flex-1"
      center={[-17.782862, -63.180853]}
      zoomControl={false}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
        subdomains={["mt0", "mt1", "mt2", "mt3"]}
      />
    </MapContainer>
  );
}
