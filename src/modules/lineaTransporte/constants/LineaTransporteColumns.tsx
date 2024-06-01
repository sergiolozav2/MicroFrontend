"use client";

import { LineaTransporteService } from "@/backend";
import { Link } from "@tanstack/react-router";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type LineaTransporteType = ReturnedBody<
  typeof LineaTransporteService.getLineaTransporte
>["list"][0];

export const lineaTransporteColumns: ColumnDef<LineaTransporteType>[] = [
  {
    accessorKey: "lineaTransporteID",
    header: "ID",
  },
  {
    accessorKey: "numeroLinea",
    header: "Número de línea",
  },
  {
    accessorFn: (row) => row?.administrador?.nombre ?? "Sin administrador",
    header: "Administrador",
    meta: {
      className: "w-full",
    },
  },
  {
    accessorFn: (row) => row?.vehiculos?.length,
    header: "Vehículos",
  },
  {
    header: "Acciones",
    accessorFn: (row) => row.lineaTransporteID,
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
