"use client";

import { ConductorService } from "@/backend";
import { formatToUserDate } from "@/modules/core/utils/formatToUserDate";
import { Link } from "@tanstack/react-router";
import { ColumnDef } from "@tanstack/react-table";

export type ConductorType = ReturnedBody<
  typeof ConductorService.getConductor
>["list"][0];

export const conductorColumns: ColumnDef<ConductorType>[] = [
  {
    accessorKey: "usuarioID",
    header: "ID",
  },
  {
    accessorKey: "nombre",
    header: "Nombre",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorFn: (row) => row.vehiculos.length,
    header: "Vehículos",
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
    accessorFn: (row) => row.usuarioID,
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
