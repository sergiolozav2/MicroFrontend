"use client";

import { ConductorService } from "@/backend";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { formatToUserDate } from "@/modules/core/utils/formatToUserDate";
import { ColumnDef } from "@tanstack/react-table";
import { ViajeInicioPage } from "../ViajeInicioPage";

export type VehiculoType = ReturnedBody<
  typeof ConductorService.getConductorVehiculos
>["list"][0];

type VehiculoSiType = ReturnedBody<
  typeof ConductorService.getConductorVehiculos
>["list"][0]["vehiculo"];

export const vehiculoColumns: ColumnDef<VehiculoType>[] = [
  {
    accessorFn: (row) => row.vehiculo.matricula,
    header: "Matrícula",
  },
  {
    accessorFn: (row) => row.vehiculo.modelo,
    header: "Modelo",
  },
  {
    accessorFn: (row) => row.vehiculo.lineaTransporte.numeroLinea,
    header: "Línea",
  },
  {
    accessorFn: (row) => formatToUserDate(row.creadoEn),
    header: "Fecha registro",
    meta: {
      className: "w-full",
    },
  },
  {
    header: "Acciones",
    accessorFn: (row) => row.vehiculo,
    cell: (a) => (
      <Dialog>
        <DialogTrigger asChild>
          <button className="whitespace-nowrap rounded-md bg-primary px-2.5 py-1 text-primary-foreground">
            Iniciar viaje
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[605px]">
          <DialogHeader>
            <DialogTitle>Iniciar/detener viaje</DialogTitle>
            <DialogDescription>
              Tu ubicación será visible para todos los usuarios de la
              aplicación.
            </DialogDescription>
          </DialogHeader>
          <div className="flex w-full flex-col items-center justify-center">
            <ViajeInicioPage vehiculo={a.getValue() as VehiculoSiType} />
          </div>
        </DialogContent>
      </Dialog>
    ),
  },
];
