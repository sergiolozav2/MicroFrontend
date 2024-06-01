import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z, zodExtra } from "@/lib/zodExtra";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ErrorLabel } from "@/components/ui/error-label";
import { LoadingWrapper } from "@/modules/core/components/LoadingWrapper";
import { useCrearVehicle } from "../hooks/useCrearVehicle";
import { Combobox } from "@/components/ui/combo-box";
import { useLineaSoloNumero } from "../hooks/useLineasSoloNumero";
import { LoadingSpinner } from "@/modules/core/components/LoadingSpinner/LoadingSpinner";

const formData = z.object({
  matricula: zodExtra.string(),
  modelo: zodExtra.string(),
  propietarioNombre: zodExtra.string(),
  lineaTransporteID: z.number(),
});
type FormDataType = z.infer<typeof formData>;

export function VehicleForm() {
  const vehicle = useCrearVehicle();
  const lineas = useLineaSoloNumero();

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: zodResolver(formData),
  });

  function onSubmit(data: FormDataType) {
    vehicle.mutate(data);
  }

  return (
    <form
      className="flex h-full w-full flex-col text-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-sm font-medium">Crear vehículo</h1>
      <p className="mt-2 text-smd font-medium">Matrícula</p>
      <Input
        className="mt-1 max-w-56"
        type="text"
        autoComplete="off"
        placeholder="Matricula"
        {...register("matricula")}
      />
      <ErrorLabel text={errors.matricula?.message} />
      <p className="mt-4 text-smd font-medium">Modelo</p>
      <Input
        className="mt-1 max-w-56"
        placeholder="Modelo"
        {...register("modelo")}
      />
      <ErrorLabel text={errors.modelo?.message} />
      <p className="mt-4 text-smd font-medium">Nombre de propietario</p>
      <Input
        className="mt-1 max-w-56"
        placeholder="Nombre de propietario"
        {...register("propietarioNombre")}
      />
      <ErrorLabel text={errors.propietarioNombre?.message} />
      <p className="mt-4 text-smd font-medium">Línea de micro</p>
      {lineas.data && (
        <Combobox
          className="mt-1"
          placeHolder="Seleccionar línea"
          searchPlaceholder="Buscar línea"
          maxWidth="max-w-56"
          options={lineas.data.list.map((p) => ({
            label: `Linea ${p.numeroLinea}`,
            value: `${p.lineaTransporteID}`,
          }))}
          onSelect={(value) => {
            setValue("lineaTransporteID", Number.parseInt(value));
            trigger("lineaTransporteID");
          }}
        />
      )}
      {lineas.isLoading && <LoadingSpinner />}
      <ErrorLabel text={errors.lineaTransporteID?.message} />
      <div className="ml-auto mt-8 w-fit">
        <LoadingWrapper isLoading={vehicle.isPending}>
          <Button disabled={vehicle.isPending}>Crear vehículo</Button>
        </LoadingWrapper>
      </div>
    </form>
  );
}
