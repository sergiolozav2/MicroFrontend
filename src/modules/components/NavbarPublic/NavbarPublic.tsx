import { CompanyBrand } from "./components/CompanyBrand";
import { LinkOption } from "./components/LinkOption";
import { ToggleNavbarButton } from "./components/ToggleNavbarButton";

export function NavbarPublic() {
  return (
    <nav className="max-h-16">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <CompanyBrand />
        <ToggleNavbarButton />
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
            <li>
              <LinkOption text="App" to="/map" />
            </li>
            <li>
              <LinkOption text="Información" to="/login" />
            </li>
            <li>
              <LinkOption text="Nosotros" to="/login" />
            </li>
            <li>
              <LinkOption text="Inicia sesión" to="/login" />
            </li>
            <li>
              <LinkOption text="Regístrate" to="/register" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
