import { AddNewButton } from "../components/AddNewButton";
import { RoundedCard } from "../components/RoudedCard";
import { TitleSection } from "../components/TitleSection";
import { VehiclesTable } from "./components/VehiclesTable";
import { FaBolt, FaBus, FaStopwatch } from "react-icons/fa6";

export function VehiclesPage() {
  return (
    <div className="flex min-h-screen w-full max-w-full flex-col overflow-hidden">
      <TitleSection className="justify-between">
        <div className="flex flex-col">
          <h2 className="font-semibold"> Vehículos </h2>
          <p className="text-xs text-stone-600">Agrega y edita tus vehículos</p>
        </div>

        <AddNewButton text="Crear" />
      </TitleSection>
      <div className="px-8">
        <div className="mx-auto mt-4 flex w-full max-w-5xl flex-col gap-4 sm:px-6 sm:flex-row">
          <RoundedCard className="mx-auto max-w-xs">
            <div className="flex w-full flex-col pb-4">
              <div className="flex">
                <p className="text-sm text-stone-800">Buses</p>
                <div className="ml-auto rounded-full bg-primary-100 p-2 text-2xl text-primary-500">
                  <FaBus />
                </div>
              </div>
              <p className="text-3xl font-semibold text-stone-700">3</p>
            </div>
          </RoundedCard>
          <RoundedCard className="mx-auto max-w-xs">
            <div className="flex w-full flex-col pb-4">
              <div className="flex">
                <p className="text-sm text-stone-800">Buses activos</p>
                <div className="ml-auto rounded-full bg-primary-100 p-2 text-2xl text-primary-500">
                  <FaBolt />
                </div>
              </div>
              <p className="text-3xl font-semibold text-stone-700">3</p>
            </div>
          </RoundedCard>
          <RoundedCard className="mx-auto max-w-xs">
            <div className="flex w-full flex-col pb-4">
              <div className="flex">
                <p className="text-sm text-stone-800">Buses en movimiento</p>
                <div className="ml-auto rounded-full bg-primary-100 p-2 text-2xl text-primary-500">
                  <FaStopwatch />
                </div>
              </div>
              <p className="text-3xl font-semibold text-stone-700">3</p>
            </div>
          </RoundedCard>
        </div>
        <div className="mb-8 mt-8 h-[1px] w-full bg-stone-200"></div>
        <RoundedCard className="flex-col gap-4">
          <p className="text-sm font-medium">Todos tus vehículos (3)</p>
          <div className="mt-4 overflow-x-auto">
            <VehiclesTable />
          </div>
        </RoundedCard>
      </div>
    </div>
  );
}
