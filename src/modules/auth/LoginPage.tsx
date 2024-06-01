import { Link, Navigate } from "@tanstack/react-router";
import { ImageContainer } from "./components/ImageContainer";
import { AuthContainer } from "./components/AuthContainer";
import { BorderLink } from "./components/BorderLink";
import { useForm } from "react-hook-form";
import { useLogin } from "./hooks/useLogin";
import { useAuthStore } from "../core/store/useAuthStore";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoadingWrapper } from "../core/components/LoadingWrapper";

type Inputs = {
  email: string;
  password: string;
};
export function LoginPage() {
  const { register, handleSubmit } = useForm<Inputs>();
  const login = useLogin();
  async function onSubmit(data: Inputs) {
    login.mutate(data);
  }

  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="/admin/linea" />;
  }

  return (
    <div className="lg:min-h-screen bg-background lg:flex lg:flex-wrap">
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
          <h1 className="mb-4 text-foreground">Inicia sesión a tu cuenta</h1>
          <div className="flex flex-col gap-3">
            <Input type="email" placeholder="Usuario" {...register("email")} />
            <Input
              type="password"
              placeholder="Contraseña"
              {...register("password")}
            />
          </div>

          <div className="mb-12 mt-5 flex flex-col text-center">
            <LoadingWrapper isLoading={login.isPending}>
              <Button disabled={login.isPending}>Iniciar sesión</Button>
            </LoadingWrapper>
            <a href="#!" className="mt-4 text-xs font-medium">
              ¿Contraseña olvidada?
            </a>
          </div>

          <div className="flex items-center justify-between pb-6">
            <p className="mb-0 mr-2 text-sm text-muted-foreground">
              ¿No tienes una cuenta?
            </p>
            <BorderLink to="/register">Regístrate</BorderLink>
          </div>
        </form>
      </AuthContainer>
      <ImageContainer>
        <h2 className="mb-6 text-xl font-semibold md:text-3xl">
          Bienvenido a Micro
        </h2>
        <p className="text-sm md:text-xl">
          Navega fácilmente por el transporte público y visualiza los micros en
          tiempo real de Santa Cruz.
        </p>
      </ImageContainer>
    </div>
  );
}
