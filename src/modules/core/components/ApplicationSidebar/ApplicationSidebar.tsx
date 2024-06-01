import {
  MdOutlineAnalytics,
  MdOutlineHome,
  MdOutlineRoute,
  MdOutlineWorkOutline,
} from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { SidebarLink } from "./components/SidebarLink";
import { LogoutButton } from "./components/LogoutButton";
import { useSidebarStore } from "./hooks/useSidebarStore";
import { DarkSheet } from "./components/DarkSheet";
import { AiOutlineCar, AiOutlineUserAdd } from "react-icons/ai";

export function ApplicationSidebar() {
  const isOpen = useSidebarStore((state) => state.isOpen);

  const sidebarClass = isOpen ? "" : "hidden";
  const componentClass = isOpen ? "" : "pointer-events-none";
  return (
    <div
      className={`${componentClass} fixed inset-0 right-auto isolate z-10 min-h-screen w-admin-navbar md:pointer-events-auto`}
    >
      {isOpen && <DarkSheet />}
      <div
        className={`${sidebarClass} h-full flex-col border-r bg-card text-card-foreground md:flex`}
      >
        <div className="flex items-center px-4 pt-6">
          <img className="mr-2 max-w-6" src="/images/logo/logo-256.png " />
          <p className="font-semibold">Micro</p>
        </div>
        <div className="h-full origin-left pt-4">
          <div className="flex flex-col gap-1.5 pl-3 pr-2 pt-4 font-medium">
            <SidebarLink
              to="/admin/home"
              text="Inicio"
              icon={<MdOutlineHome />}
            />
            <SidebarLink
              to="/admin/vehicles"
              text="Vehiculos"
              icon={<AiOutlineCar />}
            />
            <SidebarLink
              to="/admin/linea"
              text="Líneas"
              icon={<MdOutlineRoute />}
            />
            <SidebarLink
              to="/admin/conductor"
              text="Conductores"
              icon={<AiOutlineUserAdd />}
            />
            <SidebarLink
              to="/admin/viajes"
              text="Viajes"
              icon={<MdOutlineWorkOutline />}
            />
            <SidebarLink
              to="/admin/events"
              text="Desvíos"
              icon={<IoMdNotificationsOutline />}
            />
            <SidebarLink
              to="/admin/metrics"
              text="Métricas"
              icon={<MdOutlineAnalytics />}
            />
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  );
}
