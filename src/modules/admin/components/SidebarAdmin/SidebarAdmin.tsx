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
import { AiOutlineSetting } from "react-icons/ai";
import { SidebarTitle } from "./components/SidebarTitle";

export function SidebarAdmin() {
  return (
    <div className="pointer-events-none fixed inset-0 right-auto flex min-h-screen w-admin-navbar flex-col md:pointer-events-auto">
      <div className="hidden items-center border-r border-stone-300 bg-white px-4 py-3 md:flex">
        <img className="mr-2 max-w-6" src="/logo-bus.svg" />
        <p className="font-semibold text-primary-950">Micro</p>
      </div>
      <div className="flex h-9 items-end p-1 md:hidden">
        <button className="pointer-events-auto px-1 py-0.5 text-xl hover:bg-stone-900/10 ">
          <MdMenu />
        </button>
      </div>
      <div className="h-full origin-left scale-x-0 border-r border-stone-300 bg-gradient-to-b from-white from-80% to-primary-300/60 pt-4 shadow-md transition-transform md:scale-x-100">
        <div className="flex flex-col gap-1 px-2 py-1 font-medium">
          <SidebarTitle text="Aplicaciones" />
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
          <SidebarTitle text="General" />
          <SidebarLink
            text="Configuración"
            to="/admin/metrics"
            onClick={() => 0}
            icon={<AiOutlineSetting />}
          />
        </div>
      </div>
    </div>
  );
}
