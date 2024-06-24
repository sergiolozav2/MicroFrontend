import L from "leaflet";

export const leafletBusIcon = new L.Icon({
  iconUrl:
    "https://uxwing.com/wp-content/themes/uxwing/download/transportation-automotive/bus-icon.png",
  shadowUrl:
    "https://uxwing.com/wp-content/themes/uxwing/download/transportation-automotive/bus-icon.png",
  iconSize: [24, 24], // size of the icon
  shadowSize: [1, 1], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76],
});
