import { useSidebarStore } from "../hooks/useSidebarStore";

export function DarkSheet() {
  const closeSidebar = useSidebarStore((state) => state.close);

  function handleCloseSidebar() {
    closeSidebar();
  }
  return (
    <button
      className="fixed inset-0 -z-10 cursor-default bg-stone-900/20 md:hidden"
      onClick={handleCloseSidebar}
      aria-label="cerrar navegación"
    ></button>
  );
}
