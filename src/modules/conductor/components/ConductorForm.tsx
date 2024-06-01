import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z, zodExtra } from "@/lib/zodExtra";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ErrorLabel } from "@/components/ui/error-label";
import { LoadingWrapper } from "@/modules/core/components/LoadingWrapper";
import { useCrearConductor } from "../hooks/useCrearConductor";
import { usePlacaVehiculos } from "../hooks/usePlacaVehiculos";
import { Combobox } from "@/components/ui/combo-box";
import { LoadingSpinner } from "@/modules/core/components/LoadingSpinner/LoadingSpinner";

const formData = z.object({
  usuario: z.object({
    email: zodExtra.string().email(),
    nombre: zodExtra.string(),
    password: zodExtra.string(),
  }),
  vehiculosID: z.array(z.number()),
});
type FormDataType = z.infer<typeof formData>;

export function ConductorForm() {
  const conductor = useCrearConductor();
  const placas = usePlacaVehiculos();

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
    conductor.mutate(data);
  }

  return (
    <form
      className="flex h-full w-full flex-col text-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-sm font-medium">Crear conductor</h1>
      <p className="mt-2 text-smd font-medium">Nombre</p>
      <Input
        className="mt-1 max-w-56"
        type="text"
        placeholder="Nombre"
        {...register("usuario.nombre")}
      />
      <ErrorLabel text={errors.usuario?.nombre?.message} />
      <p className="mt-4 text-smd font-medium">Correo electrónico</p>
      <Input
        className="mt-1 max-w-56"
        placeholder="Correo electrónico"
        type="email"
        {...register("usuario.email")}
      />
      <ErrorLabel text={errors.usuario?.email?.message} />
      <p className="mt-4 text-smd font-medium">Contraseña</p>
      <Input
        className="mt-1 max-w-56"
        placeholder="Contraseña"
        type="password"
        autoComplete="new-password"
        {...register("usuario.password")}
      />
      <ErrorLabel text={errors.usuario?.password?.message} />
      <p className="mt-4 text-smd font-medium">Placa de vehículo asociado</p>
      {placas.data && (
        <Combobox
          className="mt-1"
          placeHolder="Seleccionar vehículo"
          searchPlaceholder="Buscar vehículo"
          maxWidth="max-w-56"
          options={placas.data.list.map((p) => ({
            label: `${p.matricula}`,
            value: `${p.vehiculoID}`,
          }))}
          onSelect={(value) => {
            if (!Number.parseInt(value)) return;
            setValue("vehiculosID", [Number.parseInt(value)]);
            trigger("vehiculosID");
          }}
        />
      )}

      {placas.isLoading && <LoadingSpinner />}
      <ErrorLabel text={errors.vehiculosID?.message} />

      <div className="ml-auto mt-8 w-fit">
        <LoadingWrapper isLoading={conductor.isPending}>
          <Button disabled={conductor.isPending}>Crear conductor</Button>
        </LoadingWrapper>
      </div>
    </form>
  );
}
