import { Outlet, createLazyFileRoute } from "@tanstack/react-router";
import { NavbarPublic } from "../modules/components/NavbarPublic/NavbarPublic";

export const Route = createLazyFileRoute("/_public")({
  component: AuthLayout,
});

function AuthLayout() {
  return (
    <>
      <NavbarPublic />
      <Outlet />
    </>
  );
}
