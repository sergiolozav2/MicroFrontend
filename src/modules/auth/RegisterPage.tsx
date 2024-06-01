import { Link } from "@tanstack/react-router";
import { ImageContainer } from "./components/ImageContainer";
import { AuthContainer } from "./components/AuthContainer";
import { BorderLink } from "./components/BorderLink";
import { z, zodExtra } from "@/lib/zodExtra";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRegister } from "./hooks/useRegister";
import { ErrorLabel } from "@/components/ui/error-label";
import { LoadingWrapper } from "../core/components/LoadingWrapper";

const formData = z.object({
  email: zodExtra.string().email(),
  nombre: zodExtra.string(),
  password: zodExtra.string(),
});
type FormDataType = z.infer<typeof formData>;

export function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>({ resolver: zodResolver(formData) });

  const registerM = useRegister();

  function onSubmit(data: FormDataType) {
    registerM.mutate(data);
  }
  return (
    <div className="bg-background lg:flex lg:min-h-screen lg:flex-wrap">
      <AuthContainer>
        <div className="text-center">
          <Link to="/">
            <img
              className="mx-auto mt-12 w-24"
              src="/images/logo/logo-256.png"
              alt="logo"
            />
          </Link>
          <h4 className="mb-8 mt-1 pb-1 text-xl font-medium">Micro</h4>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="mb-4">Registra una nueva cuenta</h1>
          <Input
            className="mt-3"
            placeholder="Correo electrońico"
            {...register("email")}
          />
          <ErrorLabel text={errors.email?.message} />
          <Input
            className="mt-3"
            placeholder="Nombre completo"
            {...register("nombre")}
          />
          <ErrorLabel text={errors.nombre?.message} />
          <Input
            type="password"
            className="mt-3"
            placeholder="Contraseña"
            {...register("password")}
          />
          <ErrorLabel text={errors.password?.message} />

          <div className="mb-12 mt-5 text-center">
            <LoadingWrapper isLoading={registerM.isPending}>
              <Button disabled={registerM.isPending}>Crear cuenta</Button>
            </LoadingWrapper>
          </div>

          <div className="flex items-center justify-between pb-6">
            <p className="mb-0 mr-2 text-sm font-medium text-stone-600">
              ¿Tienes una cuenta?
            </p>
            <BorderLink to="/login">Inicia sesión</BorderLink>
          </div>
        </form>
      </AuthContainer>

      <ImageContainer>
        <h2 className="mb-6 text-xl font-semibold md:text-3xl">
          Únete a la comunidad de Micro
        </h2>
        <p className="text-sm md:text-xl">
          ¡Registrate ahora y disfruta de beneficios extra como guardar tus
          rutas más usadas o comentar!
        </p>
      </ImageContainer>
    </div>
  );
}
