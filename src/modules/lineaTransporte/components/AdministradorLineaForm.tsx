import { LineaTransporteService } from "@/backend";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCrearAdministradorLinea } from "../hooks/useCrearAdministradorLinea";
import { z, zodExtra } from "@/lib/zodExtra";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ErrorLabel } from "@/components/ui/error-label";
import { LoadingWrapper } from "@/modules/core/components/LoadingWrapper";
import { useEditarAdministradorLinea } from "../hooks/useEditarAdministradorLinea";

type AdministradorLineaFormProps = {
  administrador: ReturnedBody<
    typeof LineaTransporteService.getLineaTransporte1
  >["administrador"];
  lineaTransporteID: number;
};

const formData = z.object({
  email: zodExtra.string().email(),
  nombre: zodExtra.string(),
  password: z.string().optional(),
});
type FormDataType = z.infer<typeof formData>;

export function AdministradorLineaForm(props: AdministradorLineaFormProps) {
  const crearAdministrador = useCrearAdministradorLinea();
  const editarAdministrador = useEditarAdministradorLinea();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: zodResolver(formData),
    defaultValues: props.administrador,
  });

  function onSubmit(data: FormDataType) {
    if (props.administrador.usuarioID) {
      editarAdministrador.mutate({
        lineaTransporteID: props.lineaTransporteID,
        usuario: data,
      });
      return;
    }
    if (!data.password) {
      setError("password", { message: "Campo requerido" });
      return;
    }
    crearAdministrador.mutate({
      lineaTransporteID: props.lineaTransporteID,
      usuario: {
        ...data,
        password: data.password,
        usuarioID: props.administrador?.usuarioID,
      },
    });
  }

  return (
    <form
      className="flex h-full w-full flex-col text-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-sm font-medium">Editar administrador de línea</h1>
      <p className="mt-2 text-smd font-medium">Nombre</p>
      <Input
        className="mt-1 max-w-56"
        type="text"
        autoComplete="off"
        placeholder="Nombre"
        {...register("nombre")}
      />
      <ErrorLabel text={errors.nombre?.message} />

      <p className="mt-4 text-smd font-medium">Correo electrónico</p>
      <Input
        className="mt-1 max-w-56"
        type="email"
        autoComplete="new-password"
        placeholder="Correo electrónico"
        {...register("email")}
      />
      <ErrorLabel text={errors.email?.message} />

      <p className="mt-4 text-smd font-medium">Contraseña</p>
      <Input
        className="mt-1 max-w-56"
        type="password"
        autoComplete="new-password"
        placeholder="Contraseña"
        {...register("password")}
      />
      <ErrorLabel text={errors.password?.message} />

      <div className="ml-auto mt-8 w-fit">
        <LoadingWrapper isLoading={crearAdministrador.isPending}>
          {props.administrador?.usuarioID && (
            <Button disabled={crearAdministrador.isPending}>
              Guardar cambios
            </Button>
          )}
          {!props.administrador?.usuarioID && (
            <Button disabled={crearAdministrador.isPending}>
              Crear administrador
            </Button>
          )}
        </LoadingWrapper>
      </div>
    </form>
  );
}
