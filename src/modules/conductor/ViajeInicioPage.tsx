import { ConductorService, VehiculoService } from "@/backend";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

type ViajeInicioPageProps = {
  vehiculo: VehiculoType;
};

type VehiculoType = ReturnedBody<
  typeof ConductorService.getConductorVehiculos
>["list"][0]["vehiculo"];
export function ViajeInicioPage(props: ViajeInicioPageProps) {
  const [access, setAccess] = useState(false);
  async function handleIniciarViaje() {
    if (!access) {
      getLocation().then(() => {
        setAccess(true);
      });
      return;
    }

    setAccess(false);
  }

  function onLocationPing(location: GeolocationPosition) {
    VehiculoService.putVehiculoActualizarViaje({
      latitud: location.coords.latitude,
      longitud: location.coords.longitude,
      vehiculoID: props.vehiculo.vehiculoID,
    });
  }
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (access) {
      interval = setInterval(() => {
        navigator.geolocation.getCurrentPosition(onLocationPing);
      }, 2000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [access]);
  return (
    <div className="flex w-full flex-col">
      <Button className="w-fit" onClick={handleIniciarViaje}>
        {access ? "Detener viaje" : "Iniciar viaje"}
      </Button>
    </div>
  );
}

function getLocation() {
  const promise = new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((permissionStatus) => {
          if (permissionStatus.state === "denied") {
            alert("Please allow location access.");
            window.location.href = "app-settings:location";
          } else {
            navigator.geolocation.getCurrentPosition(
              (success) => {
                resolve(success);
              },
              (error) => {
                reject(error);
              },
            );
          }
        });
    } else {
      alert("Geolocation is not supported in your browser.");
    }
  });
  return promise;
}
