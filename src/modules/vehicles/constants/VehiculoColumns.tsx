"use client";

import { VehiculoService } from "@/backend";
import { Link } from "@tanstack/react-router";
import { ColumnDef } from "@tanstack/react-table";

export type VehiculoType = ReturnedBody<
  typeof VehiculoService.getVehiculo
>["list"][0];

export const vehiculoColumns: ColumnDef<VehiculoType>[] = [
  {
    accessorKey: "vehiculoID",
    header: "ID",
  },
  {
    accessorKey: "matricula",
    header: "Matrícula",
  },
  {
    accessorKey: "modelo",
    header: "Modelo",
  },
  {
    accessorKey: "propietarioNombre",
    header: "Propietario",
    meta: {
      className: "w-full",
    },
  },
  {
    header: "Acciones",
    accessorFn: (row) => row.vehiculoID,
    cell: (a) => (
      <Link
        className="rounded-md bg-primary px-2.5 py-1 text-primary-foreground"
        to="/admin/linea/editar/$lineaTransporteID"
        params={{ lineaTransporteID: `${a.getValue()}` }}
      >
        Editar
      </Link>
    ),
  },
];
