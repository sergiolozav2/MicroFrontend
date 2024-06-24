import { Input } from "@/components/ui/input";
import { ModuleTitle } from "../core/components/ModulesLayout";
import {
  Cell,
  Line,
  LineChart,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Pie } from "recharts";
import { Button } from "@/components/ui/button";

const donaChart = [
  { name: "Licencia vencida", value: 24, fill: "#2F41BA" },
  { name: "Luces dañadas", value: 12, fill: "#6388F8" },
  { name: "Extintor vencido", value: 72, fill: "#8fb0fc" },
];

const empresaChart = [
  { name: "Enero", value: 2.0, prediction: null },
  { name: "Febrero", value: 0.9, prediction: null },
  { name: "Marzo", value: 2.2, prediction: null },
  { name: "Abril", value: 1.6, prediction: null },
  { name: "Mayo", value: 1.9, prediction: 1.9 },
  { name: "Junio", value: null, prediction: 2.0 },
  { name: "Julio", value: null, prediction: 1.3 },
];

function porcentajeDona(data: { value: number; name: string }[], key: string) {
  const total = data.map((point) => point.value).reduce((b, a) => b + a, 0);
  const valueObject = data.find((point) => point.name === key);
  if (!valueObject) {
    return 0;
  }
  return ((valueObject.value * 100) / total).toFixed(2);
}
export function DashboardEmpresa() {
  return (
    <div className="flex min-h-screen w-full max-w-full flex-col overflow-hidden">
      <ModuleTitle className="w-full">
        <div className="flex w-full items-center justify-between">
          <p>Panel de análisis por empresas</p>
          <a href={"/FormatoReporte.odt"} download={"Reporte.odt"}>
            <Button className="w-fit">Descargar reporte</Button>
          </a>
        </div>
      </ModuleTitle>
      <div className="mt-3 flex flex-col px-6">
        <div className="mt-1 flex justify-between gap-4">
          <Input className="max-w-60" placeholder="Empresa" />
          <Input className="max-w-60" placeholder="Planta de despacho" />
          <Input className="max-w-60" placeholder="Fecha inicio" />
          <Input className="max-w-60" placeholder="Fecha fin" />
        </div>

        <div className="mt-8 flex w-full flex-col gap-x-3 gap-y-7 xl:flex-row">
          <div className="flex w-full flex-col xl:w-4/12">
            <p>Causas de rechazo principales</p>

            <div className="flex flex-col-reverse px-5 xl:flex-row">
              <div className="mx-auto flex gap-4 xl:mx-0 xl:flex-col xl:justify-evenly">
                {donaChart.map((segment) => (
                  <p className="text-sm text-muted-foreground">
                    {segment.name} ({porcentajeDona(donaChart, segment.name)}%)
                  </p>
                ))}
              </div>
              <div className="h-56 w-full">
                <ResponsiveContainer className="w-fit">
                  <PieChart>
                    <Pie dataKey="value" data={donaChart}>
                      {donaChart.map((entry, index) => (
                        <Cell key={`cell-${index}`} strokeWidth={0} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col xl:w-8/12">
            <p>Índice de incumplimiento de empresas</p>
            <div className="mt-3 flex w-full flex-col px-5">
              <div className="h-56 w-full">
                <ResponsiveContainer className="">
                  <LineChart data={empresaChart}>
                    <Tooltip />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Line dataKey="value" dot={{ fill: "blue", width: 4 }} />
                    <Line dataKey="prediction" strokeDasharray="3 3" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
