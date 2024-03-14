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
      <button className="px-2 py-1 text-xl hover:bg-stone-200">
        <MdMenu />
      </button>

      <div className="mt-16 h-full origin-left scale-x-0 border-r border-stone-300 shadow-md transition-transform md:scale-x-100">
        <div className="flex flex-col gap-1 px-2 py-1 font-medium">
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
