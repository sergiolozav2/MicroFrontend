import { MdEditRoad, MdMenu, MdOutlineAnalytics, MdOutlineHome, MdPeopleOutline } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuTruck } from "react-icons/lu";
import { SidebarOptionButton } from "./components/SidebarOptionButton";

export function SidebarAdmin() {
  return (
    <div className="fixed inset-0 right-auto flex min-h-screen w-admin-navbar flex-col">
      <button className="px-2 py-1 text-xl hover:bg-stone-200">
        <MdMenu />
      </button>

      <div className="mt-16 h-full origin-left scale-x-0 border-r border-stone-300 shadow-md transition-transform md:scale-x-100">
        <div className="flex flex-col gap-1 py-1 px-2 font-medium">
          <SidebarOptionButton
            text="Inicio"
            onClick={() => 0}
            icon={<MdOutlineHome />}
          />
          <SidebarOptionButton
            text="Rutas"
            onClick={() => 0}
            icon={<MdEditRoad />}
          />
          <SidebarOptionButton
            text="Vehículos"
            onClick={() => 0}
            icon={<LuTruck />}
          />
          <SidebarOptionButton
            text="Personal"
            onClick={() => 0}
            icon={<MdPeopleOutline />}
          />
          <SidebarOptionButton
            text="Eventos"
            onClick={() => 0}
            icon={<IoMdNotificationsOutline />}
          />
          <SidebarOptionButton
            text="Métricas"
            onClick={() => 0}
            icon={<MdOutlineAnalytics />}
          />
        </div>
      </div>
    </div>
  );
}
