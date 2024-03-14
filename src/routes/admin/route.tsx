import { Outlet, createFileRoute } from "@tanstack/react-router";
import { NavbarAdmin } from "../../modules/admin/components/NavbarAdmin/NavbarAdmin";
import { SidebarAdmin } from "../../modules/admin/components/SidebarAdmin/SidebarAdmin";

export const Route = createFileRoute("/admin")({
  component: AppLayout,
});

function AppLayout() {
  return (
    <>
      <NavbarAdmin />
      <SidebarAdmin />
      <div className="flex">
        <div className="md:mr-admin-navbar mr-0 transition-all"></div>
        <Outlet />
      </div>
    </>
  );
}
