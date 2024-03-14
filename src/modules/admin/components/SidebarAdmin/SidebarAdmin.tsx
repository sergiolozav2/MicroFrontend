import {
  MdEditRoad,
  MdMenu,
  MdOutlineAnalytics,
  MdOutlineHome,
  MdPeopleOutline,
} from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuTruck } from "react-icons/lu";
import { SidebarLink } from "./components/SidebarLink";

export function SidebarAdmin() {
  return (
    <div className="fixed inset-0 right-auto flex min-h-screen w-admin-navbar flex-col">
      <div className="hidden border-r border-stone-300 px-4 py-3 md:block">
        <img className="mt-4 mx-auto max-w-12" src="/images/logo/logo-135.png" />
      </div>
      <div className="flex h-9 items-end p-1 md:hidden">
        <button className="px-1 py-0.5 text-xl hover:bg-stone-900/10 ">
          <MdMenu />
        </button>
      </div>
      <div className="h-full origin-left scale-x-0 border-r border-stone-300 shadow-md transition-transform md:scale-x-100">
        <div className="mt-6 flex flex-col gap-1 px-2 py-1 font-medium">
          <SidebarLink
            text="Inicio"
            to="/admin/"
            onClick={() => 0}
            icon={<MdOutlineHome />}
          />
          <SidebarLink
            text="Rutas"
            to="/admin/routes"
            onClick={() => 0}
            icon={<MdEditRoad />}
          />
          <SidebarLink
            text="Vehículos"
            to="/admin/vehicles"
            onClick={() => 0}
            icon={<LuTruck />}
          />
          <SidebarLink
            text="Personal"
            to="/admin/team"
            onClick={() => 0}
            icon={<MdPeopleOutline />}
          />
          <SidebarLink
            text="Eventos"
            to="/admin/events"
            onClick={() => 0}
            icon={<IoMdNotificationsOutline />}
          />
          <SidebarLink
            text="Métricas"
            to="/admin/metrics"
            onClick={() => 0}
            icon={<MdOutlineAnalytics />}
          />
        </div>
      </div>
    </div>
  );
}
