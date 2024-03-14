import { Link, useNavigate } from "@tanstack/react-router";
import { AuthInput } from "./components/AuthInput";
import { GradientContainer } from "./components/GradientContainer";
import { GradientButton } from "./components/GradientButton";
import { AuthContainer } from "./components/AuthContainer";

export function LoginPage() {
  const navigate = useNavigate();
  function handleLogin() {
    navigate({ to: "/admin/vehicles" });
  }
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
          <p className="mb-4">Inicia sesión a tu cuenta</p>
          <div className="flex flex-col">
            <AuthInput type="text" placeholder="Usuario" />
            <AuthInput type="text" placeholder="Contraseña" />
          </div>

          <div className="mb-12 pb-1 pt-1 text-center">
            <GradientButton onClick={handleLogin} type="button">
              Iniciar sesión
            </GradientButton>
            <a href="#!" className="text-sm">
              ¿Contraseña olvidada?
            </a>
          </div>

          <div className="flex items-center justify-between pb-6">
            <p className="mb-0 mr-2 text-sm font-medium text-stone-800">
              ¿No tienes una cuenta?
            </p>
            <Link
              to="/register"
              className="border-danger text-danger hover:border-danger-600 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 active:border-danger-700 active:text-danger-700 inline-block rounded border-2 border-[#d8363a] px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-[#d8363a] transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 focus:outline-none focus:ring-0"
            >
              Regístrate
            </Link>
          </div>
        </form>
      </AuthContainer>

      <GradientContainer>
        <h4 className="mb-6 text-xl font-semibold md:text-2xl">
          Micro: Simplificando tu Viaje en Micros
        </h4>
        <p className="text-sm md:text-base">
          Con nosotros, puedes acceder a rutas y micros en tiempo real para
          planificar tus viajes con facilidad. Simplifica tu experiencia de
          transporte público hoy mismo con nuestra aplicación.
        </p>
      </GradientContainer>
    </div>
  );
}
