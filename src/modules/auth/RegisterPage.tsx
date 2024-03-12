import { Link } from "@tanstack/react-router";
import { AuthInput } from "./components/AuthInput";
import { GradientContainer } from "./components/GradientContainer";
import { GradientButton } from "./components/GradientButton";
import { AuthContainer } from "./components/AuthContainer";

export function RegisterPage() {
  return (
    <div className="min-h-screen bg-stone-100 lg:flex lg:flex-wrap">
      <AuthContainer>
        <div className="text-center">
          <Link to="/">
            <img
              className="mx-auto w-48"
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
              alt="logo"
            />
          </Link>
          <h4 className="mb-12 mt-1 pb-1 text-xl font-medium">MicroApp</h4>
        </div>

        <form>
          <p className="mb-4">Registra una nueva cuenta</p>
          <div className="flex flex-col">
            <AuthInput type="text" placeholder="Usuario" />
            <AuthInput type="password" placeholder="Contraseña" />
          </div>

          <div className="mb-12 pb-1 pt-1 text-center">
            <GradientButton type="button">Crear cuenta</GradientButton>
          </div>

          <div className="flex items-center justify-between pb-6">
            <p className="mb-0 mr-2 text-sm font-medium text-stone-800">
              ¿Tienes una cuenta?
            </p>
            <Link
              to="/login"
              className="border-danger text-danger hover:border-danger-600 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 active:border-danger-700 active:text-danger-700 inline-block rounded border-2 border-[#d8363a] px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-[#d8363a] transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 focus:outline-none focus:ring-0"
            >
              Inicia sesión
            </Link>
          </div>
        </form>
      </AuthContainer>

      <GradientContainer>
        <h4 className="mb-6 text-xl font-semibold md:text-2xl">
          Únete a la comunidad de Micro
        </h4>
        <p className="text-sm md:text-base">
          ¡Regístrate ahora y únete a nuestra comunidad en TransitApp!
          Conviértete en parte de una red de usuarios comprometidos con la
          optimización del transporte público en tu ciudad.
        </p>
      </GradientContainer>
    </div>
  );
}
